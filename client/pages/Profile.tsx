import { DashboardLayout } from "../components/DashboardLayout";
import { EditProfileForm } from "../components/EditProfileForm";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto">
        <div className="py-6 md:py-10 lg:px-[50px] px-4 sm:px-6">
          <EditProfileForm />
        </div>
      </div>
    </DashboardLayout>
  );
}
