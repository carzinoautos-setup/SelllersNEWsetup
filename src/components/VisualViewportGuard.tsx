"use client";
import { useEffect } from "react";

export default function VisualViewportGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const docEl = document.documentElement;
    const body = document.body;

    function applyConstraints() {
      try {
        docEl.style.overflowX = "hidden";
        body.style.overflowX = "hidden";
        docEl.style.minWidth = "100%";
        body.style.minWidth = "100%";

        const containers = document.querySelectorAll<HTMLElement>(".container-minw-0, .min-w-0");
        containers.forEach((el) => {
          el.style.minWidth = "0";
          el.style.boxSizing = "border-box";
        });
      } catch (e) {
        // no-op
      }
    }

    applyConstraints();

    const vv = (window as any).visualViewport;
    if (vv) {
      const handler = () => {
        setTimeout(() => applyConstraints(), 50);
      };
      vv.addEventListener("resize", handler);
      vv.addEventListener("scroll", handler);
      window.addEventListener("resize", handler);
      return () => {
        vv.removeEventListener("resize", handler);
        vv.removeEventListener("scroll", handler);
        window.removeEventListener("resize", handler);
      };
    }

    function winHandler() {
      setTimeout(() => applyConstraints(), 50);
    }
    window.addEventListener("resize", winHandler);
    return () => window.removeEventListener("resize", winHandler);
  }, []);

  return null;
}
