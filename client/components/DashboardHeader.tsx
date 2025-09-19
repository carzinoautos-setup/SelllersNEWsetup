import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function DashboardHeader({ className, onOpenSidebar, mobileOpen }: HeaderProps & { onOpenSidebar?: () => void; mobileOpen?: boolean }) {
  const navItems = [
    "Home",
    "Cars for Sale",
    "Trade in your Car",
    "Dealers",
    "Contact",
  ];

  const headerClasses = cn(
    "flex items-center justify-between px-5 py-3 relative",
    // Mobile: white background with red top stripe when closed, black when menu open
    // Desktop: keep the existing gray/white styling
    mobileOpen
      ? "bg-black border-black text-white h-[76px] sm:bg-[#FBFBFB]/70 lg:bg-white sm:text-black"
      : "bg-white text-black h-[76px] sm:bg-[#FBFBFB]/70 lg:bg-white lg:h-auto border-b border-line",
    className
  );

  return (
    <div className={headerClasses}>
      {/* Red stripe at top - only visible on mobile when menu is closed */}
      {!mobileOpen && (
        <div className="absolute top-0 left-0 right-0 h-[9px] bg-[#DE0707] sm:hidden" />
      )}
      {/* Left: logo on mobile, nav on desktop */}
      <div className="flex items-center gap-4">
        {/* Mobile logo (visible on small screens) */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fe8f282a634274a1a92939ff6e966f46e?format=webp&width=800"
          alt="Carzino Logo"
          className="block lg:hidden w-[120px] h-[40px] object-contain"
        />

        {/* Desktop nav (visible on lg+) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item, index) => (
            <div key={index} className="text-heading text-sm md:text-base font-medium font-albert cursor-pointer hover:text-main-color transition-colors">
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Center: Upload icon on mobile when menu is closed */}
      {!mobileOpen && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:hidden">
          <UploadIcon className="w-6 h-6 text-black" />
        </div>
      )}

      {/* Right: desktop user & button, mobile hamburger */}
      <div className="flex items-center gap-3">
        {/* Desktop user info + add listing (hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="w-[34px] h-[34px] rounded-full bg-gray-300 flex items-center justify-center">
              <UserIcon className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-heading text-sm font-medium font-albert">25 Credits</div>
          </div>


          <button className="flex items-center gap-[10px] px-[10px] py-[10px] bg-main-color rounded-14 h-[50px] w-[160px] justify-center text-white">
            <span className="text-base font-medium font-albert">Add listing</span>
          </button>
        </div>

        {/* Mobile hamburger (visible on small screens) */}
        <button
          className={cn("lg:hidden p-2 rounded-md transition-colors", mobileOpen ? "bg-black" : "hover:bg-black/5")}
          onClick={onOpenSidebar}
          aria-label="Open menu"
        >
          <svg width="28" height="21" viewBox="0 0 28 21" fill="none" className={mobileOpen ? "text-white" : "text-black sm:text-black"}>
            <rect y="0" width="28" height="3.5" fill="currentColor"/>
            <rect y="8.75" width="28" height="3.5" fill="currentColor"/>
            <rect y="17.5" width="28" height="3.5" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_user)">
        <path d="M10.0007 10.0014C10.9357 10.0014 11.8496 9.72417 12.627 9.20473C13.4044 8.68529 14.0103 7.94699 14.3681 7.0832C14.7259 6.2194 14.8196 5.2689 14.6372 4.3519C14.4547 3.4349 14.0045 2.59258 13.3434 1.93146C12.6823 1.27034 11.84 0.820113 10.923 0.63771C10.006 0.455308 9.05546 0.548923 8.19166 0.906719C7.32787 1.26452 6.58957 1.87042 6.07013 2.64782C5.55069 3.42521 5.27344 4.33918 5.27344 5.27415C5.27469 6.52751 5.77314 7.72919 6.65941 8.61545C7.54567 9.50172 8.74734 10.0002 10.0007 10.0014ZM10.0007 2.12263C10.624 2.12263 11.2333 2.30747 11.7516 2.65376C12.2699 3.00005 12.6738 3.49225 12.9123 4.06812C13.1509 4.64398 13.2133 5.27764 13.0917 5.88898C12.9701 6.50031 12.6699 7.06186 12.2292 7.50261C11.7884 7.94335 11.2269 8.24351 10.6155 8.36511C10.0042 8.48671 9.37054 8.4243 8.79468 8.18577C8.21881 7.94724 7.72661 7.5433 7.38032 7.02504C7.03403 6.50677 6.8492 5.89746 6.8492 5.27415C6.8492 4.43831 7.18123 3.63671 7.77225 3.04569C8.36328 2.45467 9.16488 2.12263 10.0007 2.12263V2.12263Z" fill="currentColor"/>
        <path d="M10.0011 11.5781C8.12108 11.5802 6.31869 12.328 4.98934 13.6573C3.65999 14.9867 2.91224 16.789 2.91016 18.669C2.91016 18.878 2.99316 19.0784 3.14092 19.2261C3.28868 19.3739 3.48908 19.4569 3.69803 19.4569C3.90699 19.4569 4.10739 19.3739 4.25515 19.2261C4.4029 19.0784 4.48591 18.878 4.48591 18.669C4.48591 17.2063 5.06697 15.8035 6.10126 14.7692C7.13555 13.7349 8.53835 13.1539 10.0011 13.1539C11.4638 13.1539 12.8666 13.7349 13.9009 14.7692C14.9352 15.8035 15.5162 17.2063 15.5162 18.669C15.5162 18.878 15.5992 19.0784 15.747 19.2261C15.8947 19.3739 16.0951 19.4569 16.3041 19.4569C16.513 19.4569 16.7134 19.3739 16.8612 19.2261C17.009 19.0784 17.092 18.878 17.092 18.669C17.0899 16.789 16.3421 14.9867 15.0128 13.6573C13.6834 12.328 11.881 11.5802 10.0011 11.5781V11.5781Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_user">
          <rect width="18.9091" height="18.9091" fill="white" transform="translate(0.546875 0.546875)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none">
      <path d="M9.75 4.125L6 7.875L2.25 4.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AddListingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M13.125 14.375V17.1875C13.125 17.705 12.705 18.125 12.1875 18.125H4.0625C3.81386 18.125 3.5754 18.0262 3.39959 17.8504C3.22377 17.6746 3.125 17.4361 3.125 17.1875V6.5625C3.125 6.045 3.545 5.625 4.0625 5.625H5.625C6.04381 5.62472 6.46192 5.65928 6.875 5.72834M13.125 14.375H15.9375C16.455 14.375 16.875 13.955 16.875 13.4375V9.375C16.875 5.65834 14.1725 2.57417 10.625 1.97834C10.2119 1.90928 9.79381 1.87472 9.375 1.875H7.8125C7.295 1.875 6.875 2.295 6.875 2.8125V5.72834M13.125 14.375H7.8125C7.56386 14.375 7.3254 14.2762 7.14959 14.1004C6.97377 13.9246 6.875 13.6861 6.875 13.4375V5.72834M16.875 11.25V9.6875C16.875 8.94158 16.5787 8.22621 16.0512 7.69876C15.5238 7.17132 14.8084 6.875 14.0625 6.875H12.8125C12.5639 6.875 12.3254 6.77623 12.1496 6.60041C11.9738 6.4246 11.875 6.18614 11.875 5.9375V4.6875C11.875 4.31816 11.8023 3.95243 11.6609 3.6112C11.5196 3.26998 11.3124 2.95993 11.0512 2.69876C10.7901 2.4376 10.48 2.23043 10.1388 2.08909C9.79757 1.94775 9.43184 1.875 9.0625 1.875H8.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
