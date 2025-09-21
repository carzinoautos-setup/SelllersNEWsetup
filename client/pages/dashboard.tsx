import { DashboardLayout } from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-visible">
        <div className="pt-8 px-5 w-full max-w-[1280px] mx-auto">
          <h1 className="text-2xl font-semibold text-[#24272C] font-albert mb-4">Dashboard</h1>
          <p className="text-sm text-[#111928] mb-6">Overview of your account and quick actions.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E6E6E6] rounded-lg p-6">
              <div className="text-xs text-gray-500">Your Listings</div>
              <div className="text-2xl font-semibold mt-2">12</div>
            </div>

            <div className="bg-white border border-[#E6E6E6] rounded-lg p-6">
              <div className="text-xs text-gray-500">Views this month</div>
              <div className="text-2xl font-semibold mt-2">1,248</div>
            </div>

            <div className="bg-white border border-[#E6E6E6] rounded-lg p-6">
              <div className="text-xs text-gray-500">Messages</div>
              <div className="text-2xl font-semibold mt-2">3</div>
            </div>
          </div>

          <div className="mt-8 bg-white border border-[#E6E6E6] rounded-lg p-6">
            <h2 className="text-lg font-medium mb-3">Quick actions</h2>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#E82121] text-white rounded-md">Add Listing</button>
              <button className="px-4 py-2 border border-[#E6E6E6] rounded-md">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
