import { useState, useEffect } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { EditProfileForm } from "./EditProfileForm";
import { Footer } from "./Footer";

export function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Track viewport to know when we're on mobile
    if (typeof window === "undefined") return;
    function update() {
      setIsMobile(window.innerWidth < 1024);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    // Lock body scroll on small screens while mobile sidebar is open using fixed positioning
    if (typeof window === "undefined") return;
    let prevScrollY = 0;
    if (mobileOpen && isMobile) {
      prevScrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${prevScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (top) {
        const prev = parseInt(top || "0") * -1;
        window.scrollTo(0, prev);
      }
    }

    return () => {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (top) {
        const prev = parseInt(top || "0") * -1;
        window.scrollTo(0, prev);
      }
    };
  }, [mobileOpen, isMobile]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-albert">
      {!mobileOpen && <div className="w-full h-[9px] bg-[#DE0707]" />}
      {/* Full-width red top bar shown when menu is closed (non-sticky, part of header flow) */}
      {/* (rendered inside main content so it scrolls with the page) */}
      <div className="flex-1 flex items-stretch">
        {/* Mobile Sidebar overlay */}
        <div
          className={`fixed inset-0 z-30 lg:hidden transition-opacity ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!mobileOpen}
          onClick={() => setMobileOpen(false)}
          onTouchMove={(e) => {
            if (mobileOpen && isMobile) e.preventDefault();
          }}
          onWheel={(e) => {
            if (mobileOpen && isMobile) e.preventDefault();
          }}
          style={mobileOpen && isMobile ? { touchAction: "none" } : undefined}
        >
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Sidebar - hidden on small screens unless toggled */}
        <div
          className={`absolute top-0 left-0 z-40 h-full w-[80%] lg:w-[280px] transform bg-[#212428] transition-transform lg:static lg:h-auto mobile-sidebar ${
            mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <DashboardSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header - pass toggler for mobile */}
          <div className="flex-shrink-0">
            <DashboardHeader
              mobileOpen={mobileOpen}
              onOpenSidebar={() => setMobileOpen(true)}
            />
          </div>

          {/* Main Content Area */}
          <div
            className={`flex-1 ${mobileOpen && isMobile ? "overflow-hidden" : "overflow-y-auto"}`}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
