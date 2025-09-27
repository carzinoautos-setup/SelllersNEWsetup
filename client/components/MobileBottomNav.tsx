import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

export function MobileBottomNav() {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  const navItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 14.8438C13.5742 14.8438 14.4531 13.9648 14.4531 12.8906C14.4531 12.3047 14.1992 11.7773 13.7891 11.4258L16.0547 5.9375L15.3516 5.60547L12.5 10.9375C11.4258 10.9375 10.5469 11.8164 10.5469 12.8906C10.5469 13.9648 11.4258 14.8438 12.5 14.8438Z"
            fill="#2E2D2D"
          />
        </svg>
      ),
    },
    {
      path: "/messages",
      label: "Messages",
      href: "https://17a0f3d119a943be91f46c5b31c1b02b-da78dca3ef7a449f928f07305.fly.dev/messages",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1186 16.8814L22.75 14.5128V11.375C22.7473 9.20661 21.9406 7.11624 20.4861 5.50811C19.0315 3.89998 17.0322 2.88832 14.875 2.66875V0.875H13.125V2.66875C10.9678 2.88832 8.96854 3.89998 7.51395 5.50811C6.05936 7.11624 5.25271 9.20661 5.25 11.375V14.5128L2.88137 16.8814C2.71727 17.0454 2.62505 17.268 2.625 17.5V20.125C2.625 20.3571 2.71719 20.5796 2.88128 20.7437C3.04538 20.9078 3.26794 21 3.5 21H9.625V21.6799C9.60597 22.7899 9.99723 23.868 10.7238 24.7074C11.4504 25.5469 12.4612 26.0887 13.5625 26.229C14.1708 26.2893 14.785 26.2217 15.3655 26.0304C15.9461 25.8391 16.4802 25.5284 16.9335 25.1183C17.3867 24.7082 17.7492 24.2078 17.9974 23.6492C18.2457 23.0906 18.3743 22.4863 18.375 21.875V21H24.5C24.7321 21 24.9546 20.9078 25.1187 20.7437C25.2828 20.5796 25.375 20.3571 25.375 20.125V17.5C25.375 17.268 25.2827 17.0454 25.1186 16.8814Z"
            fill="#2E2D2D"
          />
        </svg>
      ),
    },
    {
      path: "/messages-2",
      label: "Messages Duplicate",
      href: "https://17a0f3d119a943be91f46c5b31c1b02b-da78dca3ef7a449f928f07305.fly.dev/messages-2",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1186 16.8814L22.75 14.5128V11.375C22.7473 9.20661 21.9406 7.11624 20.4861 5.50811C19.0315 3.89998 17.0322 2.88832 14.875 2.66875V0.875H13.125V2.66875C10.9678 2.88832 8.96854 3.89998 7.51395 5.50811C6.05936 7.11624 5.25271 9.20661 5.25 11.375V14.5128L2.88137 16.8814C2.71727 17.0454 2.62505 17.268 2.625 17.5V20.125C2.625 20.3571 2.71719 20.5796 2.88128 20.7437C3.04538 20.9078 3.26794 21 3.5 21H9.625V21.6799C9.60597 22.7899 9.99723 23.868 10.7238 24.7074C11.4504 25.5469 12.4612 26.0887 13.5625 26.229C14.1708 26.2893 14.785 26.2217 15.3655 26.0304C15.9461 25.8391 16.4802 25.5284 16.9335 25.1183C17.3867 24.7082 17.7492 24.2078 17.9974 23.6492C18.2457 23.0906 18.3743 22.4863 18.375 21.875V21H24.5C24.7321 21 24.9546 20.9078 25.1187 20.7437C25.2828 20.5796 25.375 20.3571 25.375 20.125V17.5C25.375 17.268 25.2827 17.0454 25.1186 16.8814Z"
            fill="#2E2D2D"
          />
        </svg>
      ),
    },
    {
      path: "/listings",
      label: "Listings",
      href: "https://17a0f3d119a943be91f46c5b31c1b02b-da78dca3ef7a449f928f07305.fly.dev/listings",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2C7.38125 2 2 7.38125 2 14C2 20.6187 7.38125 26 14 26C20.6187 26 26 20.6187 26 14C26 7.38125 20.6187 2 14 2Z"
            fill="#2E2D2D"
          />
        </svg>
      ),
    },
  ];

  const nav = (
    <div
      className="lg:hidden fixed left-0 right-0 bottom-0 z-[99999] bg-[#FCFCFC] border-t border-gray-200"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 8px)" }}
      role="navigation"
      aria-label="Mobile bottom navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="flex justify-between items-center py-3"
          style={{ gap: 20 }}
        >
          {navItems.map((item) => {
            // convert to absolute URL to deployed app when running in Builder preview
            const base = typeof window !== 'undefined' && window.location.hostname.includes('projects.builder')
              ? 'https://17a0f3d119a943be91f46c5b31c1b02b-da78dca3ef7a449f928f07305.fly.dev'
              : '';
            const href = base ? `${base}${item.path}` : item.path;
            return (
              <a
                key={item.path}
                href={href}
                className={`flex flex-col items-center gap-1.5 text-center ${
                  location.pathname === item.path ? "opacity-100" : "opacity-60"
                }`}
                style={{ textDecoration: "none" }}
              >
                <div className="w-7 h-7 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[11px] font-albert text-[#2E2D2D] font-normal leading-none">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );

  return createPortal(nav, document.body);
}
