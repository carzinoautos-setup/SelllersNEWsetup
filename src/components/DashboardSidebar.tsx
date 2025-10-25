"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

export function DashboardSidebar({ className }: SidebarProps) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
      active: false,
      path: "/dashboard",
    },
    {
      name: "Add a Listing",
      icon: EditIcon,
      active: false,
      path: "/add-a-listing",
    },
    {
      name: "Your Listings",
      icon: MailIcon,
      active: true,
      path: "/yourlistings",
    },
    {
      name: "Buy Credits",
      icon: CoinsIcon,
      active: false,
      path: "/buy-credits",
    },
    {
      name: "Messages",
      icon: MessageIcon,
      active: false,
      badge: "7",
      path: "/messages",
    },
    { name: "Reset Password", icon: EditIcon, active: false, path: "/reset" },
    { name: "Profile", icon: UserIcon, active: false, path: "/profile" },
    {
      name: "Edit Listing",
      icon: EditIcon,
      active: false,
      path: "/edit-listing",
    },
    { name: "Help Center", icon: LifebuoyIcon, active: false, path: "/help" },
    { name: "Logout", icon: LogoutIcon, active: false, path: "/logout" },
    { name: "Production", icon: EditIcon, active: false, path: "/production" },
  ];

  const pathname = usePathname();

  return (
    <div
      className={cn(
        "w-[80%] lg:w-[280px] h-full flex flex-col justify-start bg-[#212428] pb-10 mobile-sidebar min-w-0",
        className,
      )}
    >
      <div className="flex-1 flex flex-col justify-start bg-[#212428] overflow-y-auto max-h-screen">
        {/* Logo */}
        <div className="hidden sm:flex justify-center items-center px-[24px] py-[33px] bg-[#E3E1E1] lg:bg-white lg:border-0 lg:shadow-none sm:-mb-[5px] lg:mb-0 lg:border-r-0">
          {/* Mobile/Tablet Logo */}
          <svg
            className="w-[180px] md:w-[222px] h-auto lg:hidden"
            viewBox="0 0 251 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="250"
              height="51"
              rx="9.5"
              fill="white"
              stroke="#B9B9B9"
            />
            {/* SVG paths omitted for brevity intentionally removed */}
          </svg>

          {/* Desktop Figma Logo */}
          <svg
            className="hidden lg:block h-[18px] w-auto"
            width="214"
            height="19"
            viewBox="0 0 214 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG paths omitted for brevity intentionally removed */}
          </svg>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5"></div>

        {/* Profile Section */}
        <div className="px-6 py-4 mt-4">
          <div className="flex items-center gap-3">
            <div className="relative w-[52px] h-[52px]">
              <div className="w-[52px] h-[52px] rounded-full bg-white/40 flex items-center justify-center">
                <UserIcon className="w-[19px] h-[19px] text-[rgba(255,255,255,0.85)]" />
              </div>
            </div>
            <div className="flex-1 truncate">
              <div className="text-white/50 text-xs font-albert">Account</div>
              <div className="text-white text-sm font-albert truncate">
                Username@gmail...
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mt-4"></div>

        {/* Menu */}
        <div className="px-2 mt-0">
          <div className="space-y-2 px-2">
            {menuItems.map((item, index) => (
              <Link
                href={item.path || "#"}
                key={index}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-[10px] transition-colors overflow-hidden",
                  pathname === item.path
                    ? "bg-main-color"
                    : "hover:bg-white/5",
                )}
              >
                <item.icon
                  className={cn(
                    "w-[22px] h-[22px] flex-shrink-0",
                    pathname === item.path
                      ? "text-white"
                      : "text-[rgba(255,255,255,0.85)]",
                  )}
                />
                <span
                  className={cn(
                    "flex-1 text-sm font-albert truncate",
                    pathname === item.path
                      ? "text-white font-bold"
                      : "text-white font-medium",
                  )}
                >
                  {item.name === "Production" ? (<p className="m-0">Notes-Production</p>) : item.name}
                </span>
                {item.badge && (
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">
                      {item.badge}
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Spacer to push copyright to bottom */}
        <div className="mt-0 lg:mt-8" />
      </div>
    </div>
  );
}

// Minimal icon placeholders (kept compact)
function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M6.92479 9.35156V15.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M10.0135 2.55859H6.58608C3.76733 2.55859 2 4.55418 2 7.37934V15.0005C2 17.8257 3.75908 19.8213 6.58608 19.8213H14.6747C17.5027 19.8213 19.2617 17.8257 19.2617 15.0005V11.3082" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.34088 10.6318C1.35729 7.56096 2.50679 4.05104 5.73071 3.01246C7.42654 2.46521 9.29838 2.78788 10.7082 3.84846C12.042 2.81721 13.9825 2.46888 15.6765 3.01246C18.9005 4.05104 20.0573 7.56096 19.0746 10.6318C17.5438 15.4993 10.7082 19.2485 10.7082 19.2485C10.7082 19.2485 3.92304 15.5561 2.34088 10.6318Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M17.6487 17.4833C14.8473 20.2851 10.699 20.8904 7.30422 19.3205" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M16.5756 8.11328L12.5026 11.4252C11.7331 12.0357 10.6504 12.0357 9.88082 11.4252L5.77344 8.11328" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M10.5729 14.0664C7.02762 14.0664 4 14.6024 4 16.7492C4 18.8959 7.00841 19.4512 10.5729 19.4512C14.1183 19.4512 17.145 18.9143 17.145 16.7684C17.145 14.6225 14.1375 14.0664 10.5729 14.0664Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LifebuoyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M16 3.5C13.5277 3.5 11.111 4.23311 9.05538 5.60663C6.99976 6.98015 5.39761 8.93238 4.45151 11.2165C3.50542 13.5005 3.25787 16.0139 3.74019 18.4386C4.2225 20.8634 5.41301 23.0907 7.16117 24.8388C8.90933 26.587 11.1366 27.7775 13.5614 28.2598C15.9861 28.7421 18.4995 28.4946 20.7835 27.5485C23.0676 26.6024 25.0199 25.0002 26.3934 22.9446C27.7669 20.889 28.5 18.4723 28.5 16C28.4964 12.6859 27.1782 9.5086 24.8348 7.16518C22.4914 4.82177 19.3141 3.50364 16 3.5Z" fill="currentColor" />
    </svg>
  );
}

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M13.2237 6.77223V5.91698C13.2237 4.05156 11.7112 2.53906 9.84575 2.53906H5.377C3.5125 2.53906 2 4.05156 2 5.91698V16.1195C2 17.9849 3.5125 19.4974 5.377 19.4974H9.85492C11.7148 19.4974 13.2237 17.9895 13.2237 16.1296V15.2651" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CoinsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M16 20.5C16.89 20.5 17.76 20.2361 18.5001 19.7416C19.2401 19.2471 19.8169 18.5443 20.1575 17.7221" fill="currentColor" />
    </svg>
  );
}
