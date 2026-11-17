// Deploy check, run by .github/workflows/deploy.yml after `vercel pull`. Prints only names, never values.
//   node scripts/check-deploy-env.mjs .vercel/.env.production.local
// Where each setting lives (see .env.example):
//   Vercel "Config" (readable; the build needs them) ... NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
//   Vercel "Secret" or "Config" (only the live site) ... SUPABASE_SECRET_KEY, DATABASE_URL, ADMIN_EMAILS — a deploy can't
//                                                        read Secret values, so these are only a reminder
//   GitHub Actions secret (migrations only) ........... DIRECT_URL
import { existsSync, readFileSync } from "node:fs";
import { parseEnv } from "node:util";

const CONFIG = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"];
const SECRET = ["SUPABASE_SECRET_KEY", "DATABASE_URL", "ADMIN_EMAILS"];
const GITHUB = ["DIRECT_URL"];

const file = process.argv[2];
const pulled = file && existsSync(file) ? parseEnv(readFileSync(file, "utf8")) : {};
const has = (name) => Boolean((pulled[name] ?? "").trim());

const problems = [];
const config = CONFIG.filter((n) => !has(n));
if (config.length) problems.push(`Vercel → Settings → Environment Variables, type "Config", Production: ${config.join(", ")}`);
const github = GITHUB.filter((n) => !(process.env[n] ?? "").trim());
if (github.length) problems.push(`GitHub → repository Settings → Secrets and variables → Actions → New repository secret: ${github.join(", ")}`);

if (problems.length) {
  console.error(`::error::Missing settings: ${[...config, ...github].join(", ")}`);
  console.error(["", "Add:", ...problems.map((p) => `  - ${p}`), "Values: as in your .env.local (without the quotes). Then re-run this workflow."].join("\n"));
  process.exit(1);
}

const unseen = SECRET.filter((n) => !(n in pulled));
console.log(`OK: ${[...CONFIG, ...GITHUB].join(", ")}`);
if (unseen.length) console.log(`::notice::Make sure Vercel has these settings (Secret values can't be seen by a deploy): ${unseen.join(", ")}`);
