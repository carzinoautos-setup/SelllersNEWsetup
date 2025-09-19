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

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none">
      <path d="M17.438 16.64H11.2518L14.7431 13.1665H7.20312V11.0938H19.7546L16.2633 14.5673H17.438V16.64Z" fill="#BE1E2D"/>
      <path d="M16.9757 19.9564H6.22754L9.71875 16.4829H7.20312V14.4102H14.7303L11.2389 17.8857H16.9757V19.9564Z" fill="#231F20"/>
      <path d="M15.9513 23.2787H7.20312L10.6924 19.8032H7.20312V17.7305H13.7039L10.2146 21.206H15.9513V23.2787Z" fill="#6D6E71"/>
      <path d="M19.369 21.8521C19.314 21.9065 19.25 21.9498 19.178 21.9792C19.107 22.0087 19.031 22.0239 18.954 22.0239C18.877 22.0239 18.801 22.0087 18.73 21.9792C18.659 21.9498 18.594 21.9065 18.54 21.8521L14.853 18.165V28.4688C14.853 28.6242 14.791 28.7732 14.681 28.8831C14.571 28.993 14.422 29.0547 14.267 29.0547C14.111 29.0547 13.962 28.993 13.852 28.8831C13.742 28.7732 13.681 28.6242 13.681 28.4688V18.165L9.994 21.8521C9.884 21.962 9.735 22.0238 9.579 22.0238C9.424 22.0238 9.274 21.962 9.165 21.8521C9.055 21.7421 8.993 21.593 8.993 21.4375C8.993 21.282 9.055 21.1329 9.165 21.023L13.852 16.3355C13.906 16.281 13.971 16.2378 14.042 16.2083C14.113 16.1788 14.19 16.1636 14.267 16.1636C14.344 16.1636 14.42 16.1788 14.491 16.2083C14.562 16.2378 14.627 16.281 14.681 16.3355L19.369 21.023C19.423 21.0774 19.466 21.142 19.496 21.2131C19.525 21.2843 19.54 21.3605 19.54 21.4375C19.54 21.5145 19.525 21.5908 19.496 21.6619C19.466 21.733 19.423 21.7976 19.369 21.8521ZM15.438 4.4453C13.08 4.4478 10.772 5.1273 8.788 6.403C6.805 7.6788 5.229 9.4971 4.249 11.6421C3.046 11.4053 1.806 11.4227 0.611 11.6934C-0.585 11.964 -1.711 12.4818 -2.695 13.2135C-3.678 13.9452 -4.498 14.8746 -5.101 15.9419C-5.704 17.0093 -6.077 18.1911 -6.197 19.4113C-6.316 20.6315 -6.178 21.8631 -5.793 23.027C-5.408 24.1909 -4.784 25.2614 -3.96 26.1696C-3.137 27.0778 -2.132 27.8036 -1.011 28.3005C0.109 28.7974 1.322 29.0543 2.548 29.0547H8.407C8.563 29.0547 8.712 28.993 8.822 28.8831C8.931 28.7732 8.993 28.6242 8.993 28.4688C8.993 28.3134 8.931 28.1643 8.822 28.0544C8.712 27.9445 8.563 27.8828 8.407 27.8828H2.548C1.493 27.8851 0.449 27.6683 -0.517 27.2461C-1.484 26.8239 -2.352 26.2056 -3.067 25.4303C-3.783 24.655 -4.329 23.7396 -4.672 22.7422C-5.015 21.7447 -5.147 20.6869 -5.06 19.6357C-4.972 18.5845 -4.668 17.5629 -4.165 16.6356C-3.663 15.7083 -2.973 14.8955 -2.14 14.2487C-1.306 13.6019 -0.348 13.1352 0.675 12.8781C1.698 12.6211 2.763 12.5793 3.803 12.7554C3.359 14.0404 3.133 15.3905 3.134 16.75C3.134 16.9054 3.195 17.0544 3.305 17.1643C3.415 17.2742 3.564 17.3359 3.72 17.3359C3.875 17.3359 4.024 17.2742 4.134 17.1643C4.244 17.0544 4.306 16.9054 4.306 16.75C4.306 14.743 4.849 12.7735 5.878 11.05C6.906 9.3264 8.381 7.9128 10.147 6.9589C11.913 6.0049 13.903 5.546 15.908 5.6308C17.914 5.7155 19.859 6.3407 21.538 7.4403C23.217 8.5398 24.567 10.0728 25.446 11.8769C26.325 13.6811 26.701 15.6894 26.532 17.6893C26.363 19.6892 25.657 21.6063 24.488 23.2377C23.319 24.8691 21.731 26.1542 19.892 26.957C19.769 27.0112 19.668 27.1059 19.607 27.2253C19.545 27.3447 19.527 27.4816 19.554 27.613C19.582 27.7444 19.654 27.8624 19.758 27.9472C19.862 28.0321 19.992 28.0786 20.126 28.0791C20.207 28.0796 20.286 28.0632 20.36 28.0308C22.953 26.9012 25.078 24.9129 26.377 22.4005C27.675 19.8881 28.069 17.005 27.491 14.2364C26.914 11.4678 25.4 8.9827 23.204 7.1994C21.009 5.4162 18.267 4.4436 15.438 4.4453Z" fill="currentColor"/>
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
