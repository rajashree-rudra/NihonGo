// The full module page for signed-in accounts. Never linked: src/proxy.ts serves it at the module's own address
// (/n5/kanji → this page) and sends signed-out visitors who type /full/… back to the preview.
import type { Metadata } from "next";
import { ModulePage, moduleMetadata, moduleStaticParams, type ModuleParams } from "@/components/modules/ModulePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return moduleStaticParams();
}

export async function generateMetadata(props: ModuleParams): Promise<Metadata> {
  return { ...(await moduleMetadata(props)), robots: { index: false } };
}

export default function FullModulePage(props: ModuleParams) {
  return <ModulePage {...props} preview={false} />;
}
