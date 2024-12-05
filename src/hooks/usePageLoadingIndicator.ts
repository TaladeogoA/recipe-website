// src/hooks/usePageLoadingIndicator.ts
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { useCallback, useEffect, useRef } from "react";

export function usePageLoadingIndicator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isNavigatingRef = useRef(false);

  const handleStart = useCallback(() => {
    if (!isNavigatingRef.current) {
      isNavigatingRef.current = true;
      NProgress.start();
    }
  }, []);

  const handleComplete = useCallback(() => {
    isNavigatingRef.current = false;
    NProgress.done(true);
  }, []);

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 200,
      minimum: 0.3,
      easing: "ease",
      speed: 500,
    });
  }, []);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName === "A" || target.closest("a");
      if (isLink) handleStart();
    };

    document.addEventListener("mousedown", handleLinkClick);
    return () => {
      document.removeEventListener("mousedown", handleLinkClick);
      handleComplete();
    };
  }, [handleStart, handleComplete]);

  useEffect(() => {
    if (!isNavigatingRef.current) {
      handleStart();
    }

    const timer = setTimeout(handleComplete, 500);

    return () => {
      clearTimeout(timer);
      handleComplete();
    };
  }, [pathname, searchParams, handleStart, handleComplete]);
}
