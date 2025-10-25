import * as React from "react";

export function useNavigate() {
  // Minimal navigate shim used by migrated client pages.
  return (to: string) => {
    if (typeof window === "undefined") return;
    try {
      if (to.startsWith("/")) {
        window.location.pathname = to;
      } else {
        window.location.href = to;
      }
    } catch (e) {
      // fallback
      window.location.href = to;
    }
  };
}
