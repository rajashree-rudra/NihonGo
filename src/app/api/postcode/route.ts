// Postcode → address parts, for the registration form. Free lookup services, called from here (not the browser) so
// all countries answer in one shape:
//   Japan: zipcloud (Japan Post data) · India: api.postalpincode.in · ~60 other countries: Zippopotam.us
// Countries none of them cover (e.g. Vietnam) answer { found: false } and the person types the address.
import { NextResponse, type NextRequest } from "next/server";
import { isCountryCode } from "@/lib/countries";

export interface PostcodeResult {
  found: boolean;
  region?: string;
  city?: string;
  area?: string;
  /** When the postcode covers several places, the choices for that field */
  cityOptions?: string[];
  areaOptions?: string[];
}

const MONTH = 60 * 60 * 24 * 30;

async function getJson(url: string): Promise<unknown> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000), next: { revalidate: MONTH } });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

const unique = (list: unknown[]) => [...new Set(list.map((v) => String(v ?? "").trim()).filter(Boolean))];

/** One value when there's exactly one, else the choices. */
function pick(options: string[]) {
  return options.length === 1 ? { value: options[0] } : { value: "", options: options.length ? options : undefined };
}

type Rec = Record<string, unknown>;

async function lookup(country: string, code: string): Promise<PostcodeResult> {
  if (country === "JP") {
    const digits = code.replace(/\D/g, "");
    if (digits.length !== 7) return { found: false };
    const data = (await getJson(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${digits}`)) as { results?: Rec[] } | null;
    const rows = data?.results ?? [];
    if (!rows.length) return { found: false };
    const area = pick(unique(rows.map((r) => r.address3)));
    return { found: true, region: String(rows[0].address1 ?? ""), city: String(rows[0].address2 ?? ""), area: area.value, areaOptions: area.options };
  }

  if (country === "IN") {
    const digits = code.replace(/\D/g, "");
    if (digits.length !== 6) return { found: false };
    const data = (await getJson(`https://api.postalpincode.in/pincode/${digits}`)) as { PostOffice?: Rec[] | null }[] | null;
    const offices = data?.[0]?.PostOffice ?? [];
    if (!offices.length) return { found: false };
    const city = pick(unique(offices.map((o) => o.District)));
    const area = pick(unique(offices.map((o) => o.Name)));
    return { found: true, region: String(offices[0].State ?? ""), city: city.value, cityOptions: city.options, area: area.value, areaOptions: area.options };
  }

  const data = (await getJson(`https://api.zippopotam.us/${country.toLowerCase()}/${encodeURIComponent(code)}`)) as { places?: Rec[] } | null;
  const places = data?.places ?? [];
  if (!places.length) return { found: false };
  const city = pick(unique(places.map((p) => p["place name"])));
  return { found: true, region: unique(places.map((p) => p.state))[0] ?? "", city: city.value, cityOptions: city.options };
}

export async function GET(request: NextRequest) {
  const country = (request.nextUrl.searchParams.get("country") ?? "").toUpperCase();
  const code = (request.nextUrl.searchParams.get("code") ?? "").trim();
  if (!isCountryCode(country) || !/^[A-Za-z0-9][A-Za-z0-9 -]{1,11}$/.test(code)) {
    return NextResponse.json({ found: false } satisfies PostcodeResult, { status: 400 });
  }
  const result = await lookup(country, code.toUpperCase());
  return NextResponse.json(result, {
    // Postcodes rarely change: let the CDN answer repeats.
    headers: { "Cache-Control": result.found ? `public, s-maxage=${MONTH}, stale-while-revalidate=${MONTH}` : "public, s-maxage=3600" },
  });
}
