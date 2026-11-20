"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { VIEWER_COOKIE, decodeViewer, type ViewerHint } from "./access";

/** The signed-in account from the proxy's display cookie (never used to decide access). */
export function readViewer(): ViewerHint | null {
  const raw = document.cookie.split("; ").find((c) => c.startsWith(`${VIEWER_COOKIE}=`));
  return decodeViewer(raw?.slice(VIEWER_COOKIE.length + 1));
}

/**
 * The signed-in account, or null when signed out. `undefined` on the first render: pages are static, so the server
 * can't know — it's read after hydration and again on every navigation (the proxy refreshes the cookie each request).
 */
export function useViewer(): ViewerHint | null | undefined {
  const pathname = usePathname();
  const [viewer, setViewer] = useState<ViewerHint | null | undefined>(undefined);
  useEffect(() => setViewer(readViewer()), [pathname]);
  return viewer;
}
