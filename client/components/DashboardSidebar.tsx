import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function DashboardSidebar({ className }: SidebarProps) {
  const menuItems = [
    { name: "Dashboard", icon: DashboardIcon, active: false },
    { name: "Add a listing", icon: EditIcon, active: false },
    { name: "Buy Credits (1)", icon: CoinsIcon, active: false },
    { name: "Messages", icon: MessageIcon, active: false, badge: "7" },
    { name: "Your Listings", icon: MailIcon, active: true },
    { name: "Profile", icon: UserIcon, active: false },
    { name: "Account Settings", icon: SettingsIcon, active: false },
    { name: "Add your Payment", icon: LogoutIcon, active: false },
    { name: "Billing", icon: LogoutIcon, active: false },
    { name: "Help Center", icon: LifebuoyIcon, active: false },
    { name: "Logout", icon: LogoutIcon, active: false },
  ];

  return (
    <div className={cn("h-full flex flex-col bg-[#24272C]", className)}>
      <div className="flex-1 flex flex-col justify-between overflow-y-auto">
        {/* Logo */}
        <div className="hidden sm:flex justify-center items-center px-6 pb-[13px] pt-[16px] bg-[#E3E1E1] -mb-[5px]">
          <svg
            className="w-[180px] md:w-[222px] h-auto"
            viewBox="0 0 251 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="250" height="51" rx="9.5" fill="white" stroke="#B9B9B9"/>
            <path d="M76.4883 28.8488V28.8057C76.4883 24.6201 79.7151 21.3359 84.0765 21.3359C87.0168 21.3359 88.9089 22.5665 90.1808 24.334L87.1777 26.6541C86.3573 25.6273 85.4112 24.9728 84.0333 24.9728C82.0195 24.9728 80.5984 26.6776 80.5984 28.7704V28.8096C80.5984 30.9651 82.0155 32.6464 84.0333 32.6464C85.5329 32.6464 86.4201 31.9488 87.2798 30.9024L90.2829 33.0383C88.9246 34.9077 87.0953 36.2833 83.9077 36.2833C79.7976 36.2833 76.4844 33.1441 76.4844 28.8527L76.4883 28.8488Z" fill="#231F20"/>
            <path d="M104.958 21.5195H108.801L114.929 35.9888H110.654L109.606 33.4218H104.055L103.027 35.9888H98.834L104.962 21.5195H104.958ZM108.452 30.3257L106.85 26.242L105.225 30.3257H108.452Z" fill="#231F20"/>
            <path d="M124.461 21.6211H131.264C133.462 21.6211 134.985 22.1972 135.951 23.1809C136.795 24 137.227 25.1091 137.227 26.5278V26.5709C137.227 28.7656 136.053 30.2235 134.267 30.9838L137.702 35.9924H133.097L130.2 31.6422H128.453V35.9924H124.465V21.625L124.461 21.6211ZM131.08 28.5187C132.438 28.5187 133.219 27.8603 133.219 26.8139V26.7747C133.219 25.646 132.399 25.0699 131.06 25.0699H128.449V28.5187H131.08V28.5187Z" fill="#231F20"/>
            <path d="M148.238 33.0962L155.454 24.9876H148.486V21.6211H160.965V24.5134L153.75 32.622H160.965V35.9885H148.238V33.0962V33.0962Z" fill="#6D6E71"/>
            <path d="M172.574 21.6211H176.582V35.9885H172.574V21.6211Z" fill="#6D6E71"/>
            <path d="M188.68 21.6211H192.401L198.321 29.2163V21.6211H202.266V35.9885H198.772L192.625 28.1072V35.9885H188.676V21.6211H188.68Z" fill="#6D6E71"/>
            <path d="M213.779 28.8488V28.8057C213.779 24.6789 217.108 21.3359 221.552 21.3359C225.996 21.3359 229.282 24.6397 229.282 28.7665V28.8057C229.282 32.9325 225.949 36.2755 221.509 36.2755C217.069 36.2755 213.779 32.9717 213.779 28.8449V28.8488ZM225.211 28.8488V28.8057C225.211 26.7325 223.711 24.9258 221.509 24.9258C219.307 24.9258 217.87 26.6894 217.87 28.7626V28.8018C217.87 30.875 219.369 32.6817 221.548 32.6817C223.727 32.6817 225.207 30.9181 225.207 28.8449L225.211 28.8488Z" fill="#6D6E71"/>
            <path d="M64.7969 29.5462H34.0487L43.54 20.0727H16V18H48.5515L39.0602 27.4735H64.7969V29.5462Z" fill="#BE1E2D"/>
            <path d="M55.7725 32.8626H25.0243L34.5156 23.3891H16V21.3164H39.5271L30.0358 30.792H55.7725V32.8626Z" fill="#231F20"/>
            <path d="M46.7482 36.185H16L25.4893 26.7094H16V24.6367H30.5008L21.0115 34.1123H46.7482V36.185Z" fill="#6D6E71"/>
          </svg>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5"></div>

        {/* Profile Section */}
        <div className="px-6 py-4 mt-4">
          <div className="flex items-center gap-3">
            <div className="relative w-[52px] h-[52px]">
              <div className="w-[52px] h-[52px] rounded-full bg-white/40 flex items-center justify-center">
                <UserIcon className="w-[19px] h-[19px] text-white" />
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
        <div className="px-2 mt-2">
          <div className="px-3 mb-2">
            <div className="text-white/40 text-sm font-albert">Menu</div>
          </div>

          <div className="space-y-2 px-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-[10px] cursor-pointer transition-colors",
                  item.active
                    ? "bg-main-color"
                    : "hover:bg-white/5"
                )}
              >
                <item.icon className={cn(
                  "w-[22px] h-[22px] flex-shrink-0",
                  item.active ? "text-white" : "text-white/20"
                )} />
                <span className={cn(
                  "flex-1 text-sm font-albert truncate",
                  item.active
                    ? "text-white font-bold"
                    : "text-white font-medium"
                )}>
                  {item.name}
                </span>
                {item.badge && (
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{item.badge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Spacer to push copyright to bottom */}
        <div className="mt-8" />

        {/* Copyright */}
        <div className="px-6 py-6 text-text-muted/80 text-sm font-albert">Copyright © 2025 Carzino</div>
      </div>
    </div>
  );
}

// Icon components
function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M6.92479 9.35156V15.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2021 6.34375V15.6412" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.4092 12.6797V15.6451" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4619 1.83594H6.87143C3.87698 1.83594 2 3.95535 2 6.95566V15.0495C2 18.0499 3.86825 20.1693 6.87143 20.1693H15.4619C18.4651 20.1693 20.3333 18.0499 20.3333 15.0495V6.95566C20.3333 3.95535 18.4651 1.83594 15.4619 1.83594Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M10.0135 2.55859H6.58608C3.76733 2.55859 2 4.55418 2 7.37934V15.0005C2 17.8257 3.75908 19.8213 6.58608 19.8213H14.6747C17.5027 19.8213 19.2617 17.8257 19.2617 15.0005V11.3082" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.57059 10.0131L14.4208 3.16281C15.2743 2.31031 16.6575 2.31031 17.5109 3.16281L18.6265 4.2784C19.4799 5.13181 19.4799 6.51598 18.6265 7.36848L11.7433 14.2517C11.3702 14.6248 10.8642 14.8347 10.3362 14.8347H6.90234L6.98851 11.3697C7.00134 10.8601 7.20943 10.3742 7.57059 10.0131Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3789 4.21875L17.5644 8.40425" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.34088 10.6318C1.35729 7.56096 2.50679 4.05104 5.73071 3.01246C7.42654 2.46521 9.29838 2.78788 10.7082 3.84846C12.042 2.81721 13.9825 2.46888 15.6765 3.01246C18.9005 4.05104 20.0573 7.56096 19.0746 10.6318C17.5438 15.4993 10.7082 19.2485 10.7082 19.2485C10.7082 19.2485 3.92304 15.5561 2.34088 10.6318Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.375 6.14062C15.3558 6.45779 16.0488 7.33321 16.1322 8.36079" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.6487 17.4833C14.8473 20.2851 10.699 20.8904 7.30422 19.3205C6.80306 19.1187 6.39219 18.9556 6.00159 18.9556C4.91361 18.9621 3.5594 20.017 2.85558 19.314C2.15176 18.6101 3.20749 17.2548 3.20749 16.1603C3.20749 15.7696 3.05088 15.3661 2.84913 14.864C1.27843 11.4698 1.8846 7.32007 4.68607 4.51921C8.2623 0.941667 14.0725 0.941667 17.6487 4.51829C21.2314 8.10136 21.225 13.9067 17.6487 17.4833Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.7784 11.3802H14.7867" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.1026 11.3802H11.1109" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.42686 11.3802H7.43511" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M16.5756 8.11328L12.5026 11.4252C11.7331 12.0357 10.6504 12.0357 9.88082 11.4252L5.77344 8.11328" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6665 19.25C18.4544 19.2577 20.3333 16.9671 20.3333 14.1518V7.85584C20.3333 5.04059 18.4544 2.75 15.6665 2.75H6.66687C3.87897 2.75 2 5.04059 2 7.85584V14.1518C2 16.9671 3.87897 19.2577 6.66687 19.25H15.6665Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.5729 14.0664C7.02762 14.0664 4 14.6024 4 16.7492C4 18.8959 7.00841 19.4512 10.5729 19.4512C14.1183 19.4512 17.145 18.9143 17.145 16.7684C17.145 14.6225 14.1375 14.0664 10.5729 14.0664Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.5726 11.0036C12.8992 11.0036 14.7849 9.11701 14.7849 6.79043C14.7849 4.46384 12.8992 2.57812 10.5726 2.57812C8.24599 2.57812 6.3594 4.46384 6.3594 6.79043C6.35154 9.10916 8.22503 10.9957 10.5429 11.0036H10.5726Z" stroke="currentColor" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.0674 6.98601L18.4969 5.99593C18.0142 5.15817 16.9445 4.86916 16.1056 5.34986V5.34986C15.7062 5.5851 15.2297 5.65184 14.7811 5.53536C14.3325 5.41889 13.9487 5.12876 13.7143 4.72896C13.5634 4.47484 13.4824 4.1854 13.4793 3.8899V3.8899C13.4929 3.41615 13.3142 2.95707 12.9838 2.61723C12.6535 2.27739 12.1996 2.08574 11.7257 2.08594H10.5762C10.1119 2.08593 9.66669 2.27096 9.33915 2.60007C9.01161 2.92918 8.82873 3.37524 8.83096 3.83956V3.83956C8.8172 4.79822 8.03609 5.56811 7.07733 5.56801C6.78184 5.56494 6.4924 5.4839 6.23828 5.33308V5.33308C5.39937 4.85238 4.32967 5.14139 3.84698 5.97915L3.23447 6.98601C2.75236 7.82273 3.03743 8.89176 3.87215 9.37732V9.37732C4.41473 9.69057 4.74897 10.2695 4.74897 10.896C4.74897 11.5225 4.41473 12.1014 3.87215 12.4147V12.4147C3.03849 12.897 2.75311 13.9634 3.23447 14.7976V14.7976L3.81341 15.7961C4.03958 16.2042 4.41904 16.5053 4.86783 16.6329C5.31662 16.7604 5.79774 16.7039 6.20472 16.4757V16.4757C6.60481 16.2423 7.08157 16.1783 7.52904 16.298C7.97652 16.4178 8.35761 16.7113 8.58763 17.1134C8.73845 17.3675 8.8195 17.657 8.82257 17.9525V17.9525C8.82257 18.921 9.60769 19.7061 10.5762 19.7061H11.7257C12.6909 19.7061 13.4747 18.9261 13.4793 17.9608V17.9608C13.4771 17.4951 13.6611 17.0477 13.9905 16.7184C14.3198 16.389 14.7672 16.205 15.2329 16.2072C15.5277 16.2151 15.816 16.2958 16.072 16.4422V16.4422C16.9087 16.9243 17.9777 16.6392 18.4633 15.8045V15.8045L19.0674 14.7976C19.3013 14.3962 19.3654 13.9182 19.2457 13.4694C19.1261 13.0205 18.8324 12.6379 18.4297 12.4063V12.4063C18.0271 12.1747 17.7334 11.7921 17.6137 11.3432C17.494 10.8944 17.5582 10.4164 17.7921 10.015C17.9441 9.74951 18.1642 9.52938 18.4297 9.37732V9.37732C19.2594 8.89202 19.5439 7.82924 19.0674 6.9944V6.9944V6.98601Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="11.1548" cy="10.8969" rx="2.41648" ry="2.41648" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LifebuoyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3.5C13.5277 3.5 11.111 4.23311 9.05538 5.60663C6.99976 6.98015 5.39761 8.93238 4.45151 11.2165C3.50542 13.5005 3.25787 16.0139 3.74019 18.4386C4.2225 20.8634 5.41301 23.0907 7.16117 24.8388C8.90933 26.587 11.1366 27.7775 13.5614 28.2598C15.9861 28.7421 18.4995 28.4946 20.7835 27.5485C23.0676 26.6024 25.0199 25.0002 26.3934 22.9446C27.7669 20.889 28.5 18.4723 28.5 16C28.4964 12.6859 27.1782 9.5086 24.8348 7.16518C22.4914 4.82177 19.3141 3.50364 16 3.5ZM24.4738 23.7663L20.2238 19.5163C21.0475 18.5292 21.4986 17.2844 21.4986 15.9987C21.4986 14.7131 21.0475 13.4683 20.2238 12.4812L24.4738 8.23125C26.4199 10.3494 27.4999 13.121 27.4999 15.9975C27.4999 18.874 26.4199 21.6456 24.4738 23.7638V23.7663ZM11.5 16C11.5 15.11 11.7639 14.24 12.2584 13.4999C12.7529 12.7599 13.4557 12.1831 14.2779 11.8425C15.1002 11.5019 16.005 11.4128 16.8779 11.5865C17.7508 11.7601 18.5526 12.1887 19.182 12.818C19.8113 13.4474 20.2399 14.2492 20.4135 15.1221C20.5872 15.995 20.4981 16.8998 20.1575 17.7221C19.8169 18.5443 19.2401 19.2471 18.5001 19.7416C17.7601 20.2361 16.89 20.5 16 20.5C14.8065 20.5 13.6619 20.0259 12.818 19.182C11.9741 18.3381 11.5 17.1935 11.5 16ZM23.7663 7.52625L19.5163 11.7762C18.5292 10.9526 17.2844 10.5014 15.9988 10.5014C14.7132 10.5014 13.4683 10.9526 12.4813 11.7762L8.23126 7.52625C10.3494 5.5801 13.121 4.50014 15.9975 4.50014C18.874 4.50014 21.6456 5.5801 23.7638 7.52625H23.7663ZM7.52626 8.23375L11.7763 12.4838C10.9526 13.4708 10.5014 14.7156 10.5014 16.0012C10.5014 17.2869 10.9526 18.5317 11.7763 19.5187L7.52626 23.7687C5.58011 21.6506 4.50014 18.879 4.50014 16.0025C4.50014 13.126 5.58011 10.3544 7.52626 8.23625V8.23375ZM8.23376 24.4737L12.4838 20.2237C13.4708 21.0474 14.7157 21.4986 16.0013 21.4986C17.2869 21.4986 18.5317 21.0474 19.5188 20.2237L23.7688 24.4737C21.6506 26.4199 18.879 27.4999 16.0025 27.4999C13.126 27.4999 10.3544 26.4199 8.23626 24.4737H8.23376Z" fill="currentColor"/>
    </svg>
  );
}

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M13.2237 6.77223V5.91698C13.2237 4.05156 11.7112 2.53906 9.84575 2.53906H5.377C3.5125 2.53906 2 4.05156 2 5.91698V16.1195C2 17.9849 3.5125 19.4974 5.377 19.4974H9.85492C11.7148 19.4974 13.2237 17.9895 13.2237 16.1296V15.2651" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4516 11.0208H8.41406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.7656 8.34375L19.4496 11.0158L16.7656 13.6888" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CoinsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20.5C16.89 20.5 17.76 20.2361 18.5001 19.7416C19.2401 19.2471 19.8169 18.5443 20.1575 17.7221C20.4981 16.8998 20.5872 15.995 20.4135 15.1221C20.2399 14.2492 19.8113 13.4474 19.182 12.818C18.5526 12.1887 17.7508 11.7601 16.8779 11.5865C16.005 11.4128 15.1002 11.5019 14.2779 11.8425C13.4557 12.1831 12.7529 12.7599 12.2584 13.4999C11.7639 14.24 11.5 15.11 11.5 16C11.5 17.1935 11.9741 18.3381 12.818 19.182C13.6619 20.0259 14.8065 20.5 16 20.5ZM16 12.5C16.6922 12.5 17.3689 12.7053 17.9445 13.0899C18.5201 13.4744 18.9687 14.0211 19.2336 14.6606C19.4985 15.3001 19.5678 16.0039 19.4327 16.6828C19.2977 17.3617 18.9644 17.9854 18.4749 18.4749C17.9854 18.9644 17.3617 19.2977 16.6828 19.4327C16.0039 19.5678 15.3001 19.4985 14.6606 19.2336C14.0211 18.9687 13.4744 18.5201 13.0899 17.9445C12.7053 17.3689 12.5 16.6922 12.5 16C12.5 15.0717 12.8687 14.1815 13.5251 13.5251C14.1815 12.8687 15.0717 12.5 16 12.5ZM30 7.5H2C1.86739 7.5 1.74021 7.55268 1.64645 7.64645C1.55268 7.74021 1.5 7.86739 1.5 8V24C1.5 24.1326 1.55268 24.2598 1.64645 24.3536C1.74021 24.4473 1.86739 24.5 2 24.5H30C30.1326 24.5 30.2598 24.4473 30.3536 24.3536C30.4473 24.2598 30.5 24.1326 30.5 24V8C30.5 7.86739 30.4473 7.74021 30.3536 7.64645C30.2598 7.55268 30.1326 7.5 30 7.5ZM2.5 13.4075C3.69336 13.1266 4.78476 12.5185 5.65166 11.6517C6.51855 10.7848 7.12659 9.69336 7.4075 8.5H24.5925C24.8734 9.69336 25.4815 10.7848 26.3483 11.6517C27.2152 12.5185 28.3066 13.1266 29.5 13.4075V18.5925C28.3066 18.8734 27.2152 19.4815 26.3483 20.3483C25.4815 21.2152 24.8734 22.3066 24.5925 23.5H7.4075C7.12659 22.3066 6.51855 21.2152 5.65166 20.3483C4.78476 19.4815 3.69336 18.8734 2.5 18.5925V13.4075ZM29.5 12.375C28.5762 12.1152 27.7347 11.6224 27.0561 10.9439C26.3776 10.2653 25.8848 9.42379 25.625 8.5H29.5V12.375ZM6.375 8.5C6.11523 9.42379 5.62243 10.2653 4.94388 10.9439C4.26533 11.6224 3.42379 12.1152 2.5 12.375V8.5H6.375ZM2.5 19.625C3.42379 19.8848 4.26533 20.3776 4.94388 21.0561C5.62243 21.7347 6.11523 22.5762 6.375 23.5H2.5V19.625ZM25.625 23.5C25.8848 22.5762 26.3776 21.7347 27.0561 21.0561C27.7347 20.3776 28.5762 19.8848 29.5 19.625V23.5H25.625Z" fill="currentColor"/>
    </svg>
  );
}
