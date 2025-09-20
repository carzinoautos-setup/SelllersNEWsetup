import { DashboardLayout } from "../components/DashboardLayout";
import { EditProfileForm } from "../components/EditProfileForm";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="py-6 md:py-10 lg:px-[50px] px-4 sm:px-6">
        <h1 className="text-xl sm:text-xl lg:text-[22px] font-albert font-semibold text-black leading-tight mb-6 lg:mb-[20px]">
          Profile
        </h1>
        <EditProfileForm />
      </div>
    </DashboardLayout>
  );
}
