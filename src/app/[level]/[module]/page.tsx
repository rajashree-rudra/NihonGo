// /n5/kanji etc. — the preview for signed-out visitors. Signed-in accounts get the full page at the same address
// (src/proxy.ts serves them src/app/full/[level]/[module]). See src/components/modules/ModulePage.tsx.
import { ModulePage, moduleMetadata, moduleStaticParams, type ModuleParams } from "@/components/modules/ModulePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return moduleStaticParams();
}

export function generateMetadata(props: ModuleParams) {
  return moduleMetadata(props);
}

export default function PreviewModulePage(props: ModuleParams) {
  return <ModulePage {...props} preview />;
}
