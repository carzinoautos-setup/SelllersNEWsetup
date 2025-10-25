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
    mobileOpen
      ? "bg-black border-black text-white h-[76px] sm:bg-black sm:text-white"
      : "bg-white text-black h-[76px] lg:h-auto border-b border-line lg:border-l-0",
    className,
  );

  return (
    <div className={headerClasses}>
      {/* Red stripe at top - only visible on mobile when menu is closed */}
      <div className="flex items-center gap-4">
        {/* Mobile logo (visible on small screens) */}
        <svg
          className="block lg:hidden header-logo h-[20px]"
          viewBox="0 0 214 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60.6914 10.9426V10.8995C60.6914 6.71388 63.9183 3.42969 68.2796 3.42969C71.2199 3.42969 73.112 4.66028 74.3839 6.42778L71.3808 8.74788C70.5604 7.72108 69.6143 7.0666 68.2364 7.0666C66.2226 7.0666 64.8015 8.7714 64.8015 10.8642V10.9034C64.8015 13.0589 66.2187 14.7402 68.2364 14.7402C69.736 14.7402 70.6232 14.0426 71.4829 12.9962L74.486 15.1321C73.1277 17.0015 71.2984 18.3771 68.1108 18.3771C64.0007 18.3771 60.6875 15.2379 60.6875 10.9465L60.6914 10.9426Z" fill="#231F20" />
          <path d="M89.1611 3.61328H93.0042L99.1321 18.0825H94.8571L93.809 15.5155H88.2582L87.2297 18.0825H83.0371L89.165 3.61328H89.1611ZM92.6548 12.4195L91.0532 8.33577L89.428 12.4195H92.6548Z" fill="#231F20" />
          <path d="M108.664 3.71484H115.467C117.665 3.71484 119.189 4.29095 120.154 5.27464C120.998 6.09372 121.43 7.20283 121.43 8.62154V8.66465C121.43 10.8593 120.256 12.3172 118.47 13.0775L121.905 18.0861H117.3L114.403 13.7359H112.656V18.0861H108.668V3.71876L108.664 3.71484ZM115.283 10.6124C116.641 10.6124 117.422 9.95402 117.422 8.90763V8.86843C117.422 7.73974 116.602 7.16364 115.263 7.16364H112.652V8.51867H115.283V8.51867Z" fill="#231F20" />
          <path d="M132.441 15.1899L139.657 7.08133H132.689V3.71484H145.168V6.60713L137.953 14.7157H145.168V15.9885H132.441V15.1899V15.1899Z" fill="#6D6E71" />
          <path d="M156.777 3.71484H160.785V15.9885H156.777V3.71484Z" fill="#6D6E71" />
          <path d="M172.883 3.71484H176.604L182.524 11.31V3.71484H186.469V15.9885H182.976L176.828 10.2009V15.9885H172.879V3.71484H172.883Z" fill="#6D6E71" />
          <path d="M197.982 10.9426V10.8995C197.982 6.77266 201.311 3.42969 205.755 3.42969C210.199 3.42969 213.485 6.73347 213.485 10.8603V10.8995C213.485 15.0263 210.152 18.3692 205.712 18.3692C201.272 18.3692 197.982 15.0654 197.982 10.9386V10.9426ZM209.414 10.9426V10.8995C209.414 8.82626 207.914 7.01956 205.712 7.01956C203.51 7.01956 202.073 8.78315 202.073 10.8563V10.8955C202.073 12.9687 203.572 14.7754 205.751 14.7754C207.93 14.7754 209.41 13.0118 209.41 10.9386L209.414 10.9426Z" fill="#6D6E71" />
          <path d="M49 11.64H18.2518L27.7431 2.16646H0.203125V0.09375H32.7546L23.2633 9.56728H49V11.64Z" fill="#BE1E2D" />
          <path d="M39.9757 14.9564H9.22745L18.7188 5.48287H0.203125V3.41016H23.7303L14.2389 12.8857H39.9757V14.9564Z" fill="#231F20" />
          <path d="M30.9513 18.2787H0.203125L9.69242 8.80318H0.203125V6.73047H14.7039L5.21462 16.206H30.9513V18.2787Z" fill="#6D6E71" />
        </svg>

        {/* Desktop nav (visible on lg+) */}
        <nav className="hidden lg:flex items-center gap-6 pl-[10px] font-medium">
          {navItems.map((item, index) => (
            <div key={index} className="text-heading text-sm md:text-base font-semibold font-albert cursor-pointer hover:text-main-color transition-colors">
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Center: Upload icon on mobile when menu is closed */}
      <div data-builder-slot="header-icon" role="region" aria-label="Header design icon slot" className="absolute left-4 top-4 flex items-center gap-2">
        <div className="h-6 w-6" />
      </div>

      {/* Right: desktop user & button, mobile hamburger */}
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-[3px]">
            <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fb622b05c94614d5fa10444bc8470754b?format=webp&width=800" className="w-6 h-6 object-contain" alt="Profile" />
            </div>
            <div className="text-heading text-sm font-medium font-albert">25 Credits</div>
          </div>

          <button className="flex items-center gap-[10px] px-4 py-2 bg-main-color rounded-[8px] overflow-hidden h-[40px] w-[140px] justify-center text-white">
            <span className="text-[12px] font-medium font-albert">Add listing</span>
          </button>
        </div>

        {/* Cloud upload icon (visible on mobile, left of hamburger) */}
        <button className="lg:hidden p-2 rounded-md transition-colors hover:bg-black/5">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" viewBox="0 0 38 38" fill="none"><path d="M27.3686 23.8521C27.3142 23.9065 27.2496 23.9498 27.1784 23.9792C27.1073 24.0087 27.0311 24.0239 26.9541 24.0239C26.8771 24.0239 26.8008 24.0087 26.7297 23.9792C26.6586 23.9498 26.5939 23.9065 26.5395 23.8521L22.8525 20.165V30.4688C22.8525 30.6242 22.7908 30.7732 22.6809 30.8831C22.571 30.993 22.422 31.0547 22.2666 31.0547C22.1112 31.0547 21.9621 30.993 21.8522 30.8831C21.7424 30.7732 21.6806 30.6242 21.6806 30.4688V20.165L17.9936 23.8521C17.8837 23.962 17.7346 24.0238 17.5791 24.0238C17.4236 24.0238 17.2745 23.962 17.1645 23.8521C17.0546 23.7421 16.9928 23.593 16.9928 23.4375C16.9928 23.282 17.0546 23.1329 17.1645 23.023L21.852 18.3355C21.9064 18.281 21.9711 18.2378 22.0422 18.2083C22.1133 18.1788 22.1896 18.1636 22.2666 18.1636C22.3436 18.1636 22.4198 18.1788 22.4909 18.2083C22.5621 18.2378 22.6267 18.281 22.6811 18.3355L27.3686 23.023C27.4231 23.0774 27.4663 23.142 27.4958 23.2131C27.5253 23.2843 27.5405 23.3605 27.5405 23.4375C27.5405 23.5145 27.5253 23.5908 27.4958 23.6619C27.4663 23.733 27.4231 23.7976 27.3686 23.8521Z" fill="currentColor"/></svg>
        </button>

        {/* Mobile hamburger (visible on small screens) */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            mobileOpen ? "bg-black" : "hover:bg-black/5",
          )}
          onClick={onOpenSidebar}
          aria-label="Open menu"
        >
          <svg width="28" height="21" viewBox="0 0 28 21" fill="none" className={mobileOpen ? "text-white" : "text-black sm:text-black"}>
            <rect y="0" width="28" height="3.5" fill="currentColor" />
            <rect y="8.75" width="28" height="3.5" fill="currentColor" />
            <rect y="17.5" width="28" height="3.5" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}
