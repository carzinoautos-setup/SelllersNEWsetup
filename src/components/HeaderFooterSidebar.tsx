"use client";
import React from "react";
import VisualViewportGuard from "./VisualViewportGuard";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { Footer } from "./Footer";

interface Props {
  mobileOpen?: boolean;
  setMobileOpen?: (v: boolean) => void;
  isMobile?: boolean;
  children?: React.ReactNode;
}

export function HeaderFooterSidebar({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-white font-albert overflow-x-hidden min-w-0">
      <VisualViewportGuard />
      <div className="w-full h-[9px] bg-[#DE0707]" />
      <div className="flex-1 flex items-stretch">
        <div className="hidden lg:block lg:w-[280px]">
          <DashboardSidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-shrink-0">
            <DashboardHeader />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderFooterSidebar;
