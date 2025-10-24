import React from "react";

interface Props {
  mobileOpen?: boolean;
  setMobileOpen?: (v: boolean) => void;
  isMobile?: boolean;
  children?: React.ReactNode;
}

export function HeaderFooterSidebar({ children }: Props) {
  // Minimal placeholder that composes header, sidebar and footer if present
  return <div className="min-h-screen">{children}</div>;
}

export default HeaderFooterSidebar;
