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
    if (typeof window === 'undefined') return;
    function update() {
      setIsMobile(window.innerWidth < 1024);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    // Lock body scroll on small screens while mobile sidebar is open
    if (typeof window === 'undefined') return;
    if (mobileOpen && isMobile) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileOpen, isMobile]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-albert">
      <div className="flex-1 flex items-stretch">
        {/* Mobile Sidebar overlay */}
        <div
          className={`fixed inset-0 z-30 lg:hidden transition-opacity ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!mobileOpen}
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Sidebar - hidden on small screens unless toggled */}
        <div
          className={`absolute top-0 left-0 z-40 h-full w-[80%] lg:w-[280px] transform bg-black transition-transform lg:static lg:h-auto ${
            mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <DashboardSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header - pass toggler for mobile */}
          <div className="flex-shrink-0">
            <DashboardHeader mobileOpen={mobileOpen} onOpenSidebar={() => setMobileOpen(true)} />
          </div>

          {/* Main Content Area */}
          <div className={ `flex-1 ${mobileOpen && isMobile ? 'overflow-hidden' : 'overflow-y-auto'}` }>
            <div className="py-6 md:py-10 lg:px-[50px] px-4 sm:px-6">
              {/* Page Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-albert font-semibold text-black leading-tight mb-6 lg:mb-[50px]">
                Edit profile Dealer
              </h1>

              {/* Form Content */}
              <EditProfileForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
