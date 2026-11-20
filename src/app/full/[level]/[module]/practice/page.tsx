// The full practice page for signed-in accounts, served by src/proxy.ts at /<level>/<module>/practice.
import type { Metadata } from "next";
import { SessionPage, sessionMetadata, sessionStaticParams, type SessionParams } from "@/components/session/SessionPages";

export const dynamicParams = false;

export function generateStaticParams() {
  return sessionStaticParams();
}

export async function generateMetadata(props: SessionParams): Promise<Metadata> {
  return { ...(await sessionMetadata(props, "practice")), robots: { index: false } };
}

export default function FullPracticePage(props: SessionParams) {
  return <SessionPage {...props} mode="practice" preview={false} />;
}
