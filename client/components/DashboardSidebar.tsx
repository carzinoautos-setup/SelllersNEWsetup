import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function DashboardSidebar({ className }: SidebarProps) {
  const menuItems = [
    { name: "Dashboard", icon: DashboardIcon, active: false },
    { name: "Add a listing", icon: EditIcon, active: false },
    { name: "Buy Credits (1)", icon: HeartIcon, active: false },
    { name: "Messages", icon: MessageIcon, active: false, badge: "7" },
    { name: "Your Listings", icon: MailIcon, active: true },
    { name: "Profile", icon: UserIcon, active: false },
    { name: "Account Settings", icon: SettingsIcon, active: false },
    { name: "Add your Payment", icon: LogoutIcon, active: false },
    { name: "Billing", icon: LogoutIcon, active: false },
    { name: "Help Center", icon: LogoutIcon, active: false },
    { name: "Logout", icon: LogoutIcon, active: false },
  ];

  return (
    <div className={cn("h-full flex flex-col bg-[#24272C]", className)}>
      <div className="overflow-y-auto h-full">
        {/* Logo */}
        <div className="flex justify-center items-center px-6 py-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9c0328289826e779cfbf3ddacf7dfe155dd2df54?width=444"
            alt="Carzino Logo"
            className="w-[180px] md:w-[222px] h-auto"
          />
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
              <div className="text-white text-sm font-albert truncate">themesflat@gmail...</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mt-4"></div>

        {/* Menu */}
        <div className="px-2 mt-4">
          <div className="px-3 mb-3">
            <div className="text-white/40 text-sm font-albert">Menu</div>
          </div>

          <div className="space-y-2 px-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-[10px] cursor-pointer transition-colors",
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
        <div className="px-6 py-6 text-text-muted/80 text-sm font-albert">Copyright © 2024 AutoDecar</div>
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

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <path d="M13.2237 6.77223V5.91698C13.2237 4.05156 11.7112 2.53906 9.84575 2.53906H5.377C3.5125 2.53906 2 4.05156 2 5.91698V16.1195C2 17.9849 3.5125 19.4974 5.377 19.4974H9.85492C11.7148 19.4974 13.2237 17.9895 13.2237 16.1296V15.2651" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4516 11.0208H8.41406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.7656 8.34375L19.4496 11.0158L16.7656 13.6888" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
