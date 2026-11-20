// The full test page for signed-in accounts, served by src/proxy.ts at /<level>/<module>/test.
import type { Metadata } from "next";
import { SessionPage, sessionMetadata, sessionStaticParams, type SessionParams } from "@/components/session/SessionPages";

export const dynamicParams = false;

export function generateStaticParams() {
  return sessionStaticParams();
}

export async function generateMetadata(props: SessionParams): Promise<Metadata> {
  return { ...(await sessionMetadata(props, "test")), robots: { index: false } };
}

export default function FullTestPage(props: SessionParams) {
  return <SessionPage {...props} mode="test" preview={false} />;
}
