import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-5 pt-24 text-center">
      <p className="font-brush text-8xl text-ink/15">迷子</p>
      <h1 className="mt-4 text-2xl font-extrabold tracking-tight">This page doesn&apos;t exist (yet)</h1>
      <p className="mt-2 text-ink-soft">It may be a level that&apos;s coming soon.</p>
      <ButtonLink href="/" className="mt-8">
        Choose a level
      </ButtonLink>
    </div>
  );
}
