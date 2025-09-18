import { useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { EditProfileForm } from "./EditProfileForm";

export function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white font-albert">
      {/* Mobile Sidebar overlay */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Sidebar - hidden on small screens unless toggled */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-[280px] transform bg-[#24272C] transition-transform lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:pl-[280px]">
        {/* Header - pass toggler for mobile */}
        <div className="flex-shrink-0">
          <DashboardHeader onOpenSidebar={() => setMobileOpen(true)} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 md:px-10 lg:px-[50px] py-6 md:py-10">
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
  );
}
