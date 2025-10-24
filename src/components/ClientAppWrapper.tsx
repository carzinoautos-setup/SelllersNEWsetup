"use client";
import React, { useEffect, useState } from "react";

export default function ClientAppWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render children directly during SSR/hydration to avoid router usage on server
    return <>{children}</>;
  }

  // Dynamically require to avoid importing during SSR
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { BrowserRouter } = require("react-router-dom");
  return <BrowserRouter>{children}</BrowserRouter>;
}
