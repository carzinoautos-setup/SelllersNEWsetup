"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

export function DashboardSidebar({ className }: SidebarProps) {
  const menuItems = [
    { name: "Dashboard", icon: DashboardIcon, active: false, path: "/dashboard" },
    { name: "Add a Listing", icon: EditIcon, active: false, path: "/add-a-listing" },
    { name: "Your Listings", icon: MailIcon, active: true, path: "/yourlistings" },
    { name: "Buy Credits", icon: CoinsIcon, active: false, path: "/buy-credits" },
    { name: "Messages", icon: MessageIcon, active: false, badge: "7", path: "/messages" },
    { name: "Reset Password", icon: EditIcon, active: false, path: "/reset" },
    { name: "Profile", icon: UserIcon, active: false, path: "/profile" },
    { name: "Edit Listing", icon: EditIcon, active: false, path: "/edit-listing" },
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
          <svg className="w-[180px] md:w-[222px] h-auto lg:hidden" viewBox="0 0 251 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="250" height="51" rx="9.5" fill="white" stroke="#B9B9B9" />
          </svg>

          {/* Desktop Logo */}
          <svg className="hidden lg:block h-[18px] w-auto" width="214" height="19" viewBox="0 0 214 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="214" height="19" rx="2" fill="#E3E1E1" />
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
              <div className="text-white text-sm font-albert truncate">Username@gmail...</div>
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
                  pathname === item.path ? "bg-main-color" : "hover:bg-white/5",
                )}
              >
                <item.icon
                  className={cn(
                    "w-[22px] h-[22px] flex-shrink-0",
                    pathname === item.path ? "text-white" : "text-[rgba(255,255,255,0.85)]",
                  )}
                />
                <span
                  className={cn(
                    "flex-1 text-sm font-albert truncate",
                    pathname === item.path ? "text-white font-bold" : "text-white font-medium",
                  )}
                >
                  {item.name === "Production" ? <p className="m-0">Notes-Production</p> : item.name}
                </span>
                {item.badge && (
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{item.badge}</span>
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

// Icon components (kept small and semantic to avoid very long inline paths)
function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="6" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="7" width="4" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16" y="12" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14.06 6.94l3.75 3.75" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s-7.5-4.5-9-8.5C1.5 7 6 4.5 8.5 6 10 7 12 9 12 9s2-2 3.5-3c2.5-1.5 7 1 5.5 6.5-1.5 4-9 8.5-9 8.5z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 20c2-4 6-6 8-6s6 2 8 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19.4 15a1 1 0 0 0 .2-1.1l-1-1.7a1 1 0 0 0-1.1-.4l-1.9.6a5 5 0 0 0-1.4-.8l-.3-2a1 1 0 0 0-.9-.9h-2a1 1 0 0 0-.9.9l-.3 2a5 5 0 0 0-1.4.8l-1.9-.6a1 1 0 0 0-1.1.4l-1 1.7A1 1 0 0 0 4.6 15l1.4 1a5 5 0 0 0 0 1.8L4.6 19a1 1 0 0 0-.2 1.1l1 1.7A1 1 0 0 0 6.5 22l1.9-.6a5 5 0 0 0 1.4.8l.3 2a1 1 0 0 0 .9.9h2a1 1 0 0 0 .9-.9l.3-2a5 5 0 0 0 1.4-.8l1.9.6a1 1 0 0 0 1.1-.4l1-1.7a1 1 0 0 0-.2-1.1l-1.4-1a5 5 0 0 0 0-1.8l1.4-1z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 12H9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 4h6v16H5z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CoinsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LifebuoyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default DashboardSidebar;
