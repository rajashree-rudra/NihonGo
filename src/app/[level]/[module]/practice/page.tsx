// /n5/kanji/practice etc. — the preview for signed-out visitors (first kana rows / kanji groups). Signed-in accounts
// get the full page at the same address (src/proxy.ts serves src/app/full/[level]/[module]/practice).
import { SessionPage, sessionMetadata, sessionStaticParams, type SessionParams } from "@/components/session/SessionPages";

export const dynamicParams = false;

export function generateStaticParams() {
  return sessionStaticParams();
}

export function generateMetadata(props: SessionParams) {
  return sessionMetadata(props, "practice");
}

export default function PreviewPracticePage(props: SessionParams) {
  return <SessionPage {...props} mode="practice" preview />;
}
