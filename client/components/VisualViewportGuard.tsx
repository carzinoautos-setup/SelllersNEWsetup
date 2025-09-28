import { useEffect } from "react";

export default function VisualViewportGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const docEl = document.documentElement;
    const body = document.body;

    function applyConstraints() {
      try {
        // Reinforce overflow and width constraints to avoid horizontal drift
        docEl.style.overflowX = "hidden";
        body.style.overflowX = "hidden";
        docEl.style.minWidth = "100%";
        body.style.minWidth = "100%";

        // Ensure any container helper classes keep min-width 0
        const containers = document.querySelectorAll<HTMLElement>(".container-minw-0, .min-w-0");
        containers.forEach((el) => {
          el.style.minWidth = "0";
          // also ensure box-sizing so padding doesn't cause overflow
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
        // small timeout to allow viewport to settle
        setTimeout(() => applyConstraints(), 50);
      };
      vv.addEventListener("resize", handler);
      vv.addEventListener("scroll", handler);

      // also listen to window resize as fallback
      window.addEventListener("resize", handler);

      return () => {
        vv.removeEventListener("resize", handler);
        vv.removeEventListener("scroll", handler);
        window.removeEventListener("resize", handler);
      };
    }

    // fallback: listen to window resize
    function winHandler() {
      setTimeout(() => applyConstraints(), 50);
    }
    window.addEventListener("resize", winHandler);
    return () => window.removeEventListener("resize", winHandler);
  }, []);

  return null;
}
