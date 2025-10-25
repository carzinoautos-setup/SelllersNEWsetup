"use client";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function DashboardHeader({
  className,
  onOpenSidebar,
  mobileOpen,
}: HeaderProps & { onOpenSidebar?: () => void; mobileOpen?: boolean }) {
  const navItems = ["Home", "Cars for Sale", "Trade in your Car", "Dealers"];

  const headerClasses = cn(
    "flex items-center justify-between px-4 lg:px-[50px] lg:py-[22px] py-3 relative shadow-xl header-fixed-safe",
    // Mobile open -> dark header. Otherwise white background for tablet/desktop.
    mobileOpen
      ? "bg-black border-black text-white h-[76px] sm:bg-black sm:text-white"
      : "bg-white text-black h-[76px] lg:h-auto border-b border-line lg:border-l-0",
    className,
  );

  return (
    <div className={headerClasses}>
      <div className="flex items-center gap-4">
        <svg
          className="block lg:hidden header-logo h-[20px]"
          viewBox="0 0 214 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* logo paths omitted */}
        </svg>

        <nav className="hidden lg:flex items-center gap-6 pl-[10px] font-medium">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="text-heading text-sm md:text-base font-semibold font-albert cursor-pointer hover:text-main-color transition-colors"
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      <div data-builder-slot="header-icon" role="region" aria-label="Header design icon slot" className="absolute left-4 top-4 flex items-center gap-2">
        <div className="h-6 w-6" />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-[3px]">
            <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fb622b05c94614d5fa10444bc8470754b?format=webp&width=800"
                className="w-6 h-6 object-contain"
                alt="Profile"
              />
            </div>
            <div className="text-heading text-sm font-medium font-albert">25 Credits</div>
          </div>

          <button className="flex items-center gap-[10px] px-4 py-2 bg-main-color rounded-[8px] overflow-hidden h-[40px] w-[140px] justify-center text-white">
            <span className="text-[12px] font-medium font-albert">Add listing</span>
          </button>
        </div>

        <button className="lg:hidden p-2 rounded-md transition-colors hover:bg-black/5">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
