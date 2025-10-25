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
            <path
              d="M79.4883 25.8488V25.8057C79.4883 21.6201 82.7151 18.3359 87.0765 18.3359C90.0168 18.3359 91.9089 19.5665 93.1808 21.334L90.1777 23.6541C89.3573 22.6273 88.4112 21.9728 87.0333 21.9728C85.0195 21.9728 83.5984 23.6776 83.5984 25.7704V25.8096C83.5984 27.9651 85.0155 29.6464 87.0333 29.6464C88.5329 29.6464 89.4201 28.9488 90.2798 27.9024L93.2829 30.0383C91.9246 31.9077 90.0953 33.2833 86.9077 33.2833C82.7976 33.2833 79.4844 30.1441 79.4844 25.8527L79.4883 25.8488Z"
              fill="#231F20"
            />
            <path
              d="M107.958 18.5195H111.801L117.929 32.9888H113.654L112.606 30.4218H107.055L106.027 32.9888H101.834L107.962 18.5195H107.958ZM111.452 27.3257L109.85 23.242L108.225 27.3257H111.452Z"
              fill="#231F20"
            />
            <path
              d="M127.461 18.6211H134.264C136.462 18.6211 137.985 19.1972 138.951 20.1809C139.795 21 140.227 22.1091 140.227 23.5278V23.5709C140.227 25.7656 139.053 27.2235 137.267 27.9838L140.702 32.9924H136.097L133.2 28.6422H131.453V32.9924H127.465V18.625L127.461 18.6211ZM134.08 25.5187C135.438 25.5187 136.219 24.8603 136.219 23.8139V23.7747C136.219 22.646 135.399 22.0699 134.06 22.0699H131.449V25.5187H134.08V25.5187Z"
              fill="#231F20"
            />
            <path
              d="M151.238 30.0962L158.454 21.9876H151.486V18.6211H163.965V21.5134L156.75 29.622H163.965V32.9885H151.238V30.0962V30.0962Z"
              fill="#6D6E71"
            />
            <path
              d="M175.574 18.6211H179.582V32.9885H175.574V18.6211Z"
              fill="#6D6E71"
            />
            <path
              d="M191.68 18.6211H195.401L201.321 26.2163V18.6211H205.266V32.9885H201.772L195.625 25.1072V32.9885H191.676V18.6211H191.68Z"
              fill="#6D6E71"
            />
            <path
              d="M216.779 25.8488V25.8057C216.779 21.6789 220.108 18.3359 224.552 18.3359C228.996 18.3359 232.282 21.6397 232.282 25.7665V25.8057C232.282 29.9325 228.949 33.2755 224.509 33.2755C220.069 33.2755 216.779 29.9717 216.779 25.8449V25.8488ZM228.211 25.8488V25.8057C228.211 23.7325 226.711 21.9258 224.509 21.9258C222.307 21.9258 220.87 23.6894 220.87 25.7626V25.8018C220.87 27.875 222.369 29.6817 224.548 29.6817C226.727 29.6817 228.207 27.9181 228.207 25.8449L228.211 25.8488Z"
              fill="#6D6E71"
            />
            <path
              d="M67.7969 28.5462H37.0487L46.54 19.0727H19V17H51.5515L42.0602 26.4735H67.7969V28.5462Z"
              fill="#BE1E2D"
            />
            <path
              d="M58.7725 31.8626H28.0243L37.5156 22.3891H19V20.3164H42.5271L33.0358 29.792H58.7725V31.8626Z"
              fill="#231F20"
            />
            <path
              d="M49.7482 35.185H19L28.4893 25.7094H19V23.6367H33.5008L24.0115 33.1123H49.7482V35.185Z"
              fill="#6D6E71"
            />
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
            <path
              d="M60.4883 8.84882V8.80571C60.4883 4.62013 63.7151 1.33594 68.0765 1.33594C71.0168 1.33594 72.9089 2.56653 74.1808 4.33403L71.1777 6.65413C70.3573 5.62733 69.4112 4.97285 68.0333 4.97285C66.0195 4.97285 64.5984 6.67765 64.5984 8.77044V8.80962C64.5984 10.9651 66.0155 12.6464 68.0333 12.6464C69.5329 12.6464 70.4201 11.9488 71.2798 10.9024L74.2829 13.0383C72.9246 14.9077 71.0953 16.2833 67.9077 16.2833C63.7976 16.2833 60.4844 13.1441 60.4844 8.85273L60.4883 8.84882Z"
              fill="#231F20"
            />
            <path
              d="M88.9579 1.51953H92.8011L98.929 15.9888H94.654L93.6058 13.4218H88.055L87.0265 15.9888H82.834L88.9619 3.61328H88.9579ZM92.4517 10.3257L90.8501 6.24202L89.428 10.3257H92.4517Z"
              fill="#231F20"
            />
            <path
              d="M108.461 1.62109H115.264C117.462 1.62109 118.985 2.1972 119.951 3.18089C120.795 3.99997 121.227 5.10908 121.227 6.52779V6.5709C121.227 8.76558 120.053 10.2235 118.267 10.9838L121.702 15.9924H117.097L114.2 11.6422H112.453V15.9924H108.465V1.62501L108.461 1.62109ZM115.08 8.51867C116.438 8.51867 117.219 7.86027 117.219 6.81388V6.77468C117.219 5.64599 116.399 5.06989 115.06 5.06989H112.449V8.51867H115.08V8.51867Z"
              fill="#231F20"
            />
            <path
              d="M132.238 13.0962L139.454 4.98758H132.486V1.62109H144.965V4.51338L137.75 12.622H144.965V15.9885H132.238V13.0962V13.0962Z"
              fill="#6D6E71"
            />
            <path
              d="M156.574 1.62109H160.582V15.9885H156.574V1.62109Z"
              fill="#6D6E71"
            />
            <path
              d="M172.68 1.62109H176.401L182.321 9.21628V1.62109H186.266V15.9885H182.772L176.625 8.10718V15.9885H172.676V1.62109H172.68Z"
              fill="#6D6E71"
            />
            <path
              d="M197.779 8.84882V8.80571C197.779 4.67891 201.108 1.33594 205.552 1.33594C209.996 1.33594 213.282 4.63972 213.282 8.76652V8.80571C213.282 12.9325 209.949 16.2755 205.509 16.2755C201.069 16.2755 197.779 12.9717 197.779 8.8449V8.84882ZM209.211 8.84882V8.80571C209.211 6.73251 207.711 4.92581 205.509 4.92581C203.307 4.92581 201.87 6.6894 201.87 8.7626V8.80179C201.87 10.875 203.369 12.6817 205.548 12.6817C207.727 12.6817 209.207 10.9181 209.207 8.8449L209.211 8.84882Z"
              fill="#6D6E71"
            />
            <path
              d="M48.7969 11.5462H18.0487L27.54 2.07271H0V0H32.5515L23.0602 9.47353H48.7969V11.5462Z"
              fill="#BE1E2D"
            />
            <path
              d="M39.7725 14.8626H9.02433L18.5156 5.38912H0V3.31641H23.5271L14.0358 12.792H39.7725V14.8626Z"
              fill="#231F20"
            />
            <path
              d="M30.7482 18.185H0L9.48929 8.70943H0V6.63672H14.5008L5.01149 16.1123H30.7482V18.185Z"
              fill="#6D6E71"
            />
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

// Icon components
function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path
        d="M6.92479 9.35156V15.64"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2021 6.34375V15.6412"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4092 12.6797V15.6451"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4619 1.83594H6.87143C3.87698 1.83594 2 3.95535 2 6.95566V15.0495C2 18.0499 3.86825 20.1693 6.87143 20.1693H15.4619C18.4651 20.1693 20.3333 18.0499 20.3333 15.0495V6.95566C20.3333 3.95535 18.4651 1.83594 15.4619 1.83594Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path
        d="M10.0135 2.55859H6.58608C3.76733 2.55859 2 4.55418 2 7.37934V15.0005C2 17.8257 3.75908 19.8213 6.58608 19.8213H14.6747C17.5027 19.8213 19.2617 17.8257 19.2617 15.0005V11.3082"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
We need rest lines; file still truncated at end due to limit 400 but we included full content via write earlier; read returned up to around 546 earlier. But current file ended mid-EditIcon path due to Read limit; but write was successful with full content earlier. Now the file seems complete earlier until end; let's read more lines offset 400 to end. But seems file present. It's okay. Now need to overwrite DashboardHeader with full content including functions and icons. Earlier attempt to write DashboardHeader failed due to placeholder. Let's overwrite src/components/DashboardHeader.tsx with full content from client file plus