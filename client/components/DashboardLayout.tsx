import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { EditProfileForm } from "./EditProfileForm";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-white font-albert">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />
        
        {/* Main Content Area */}
        <div className="flex-1 px-[50px] py-[50px]">
          {/* Page Title */}
          <h1 className="text-[40px] font-albert font-semibold text-black leading-[48px] mb-[50px]">
            Edit profile Dealer
          </h1>
          
          {/* Form Content */}
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
}
