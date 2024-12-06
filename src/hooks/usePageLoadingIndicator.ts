import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import { useCallback, useEffect, useRef } from "react";

export function usePageLoadingIndicator() {
  const pathname = usePathname();
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
      const link = target.closest("a");
      if (
        link?.href &&
        !link.target &&
        link.origin === window.location.origin
      ) {
        handleStart();
      }
    };

    document.addEventListener("mousedown", handleLinkClick);
    return () => {
      document.removeEventListener("mousedown", handleLinkClick);
      handleComplete();
    };
  }, [handleStart, handleComplete]);

  useEffect(() => {
    handleStart();
    const timer = setTimeout(handleComplete, 500);

    return () => {
      clearTimeout(timer);
      handleComplete();
    };
  }, [pathname, handleStart, handleComplete]);
}
