import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { EditProfileForm } from "./EditProfileForm";

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-white font-albert overflow-hidden">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0">
          <DashboardHeader />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-[50px] py-[50px]">
            {/* Page Title */}
            <h1 className="text-[40px] font-albert font-semibold text-black leading-[48px] mb-[50px]">
              Edit profile Dealer
            </h1>

            {/* Form Content */}
            <EditProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
}
