import { DashboardLayout } from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <header className="flex flex-col items-center gap-6 mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#24272C] font-albert text-center">Welcome to your Carzino account</h1>
            <p className="text-sm text-[#696665] text-center max-w-2xl">Overview of your account and quick actions.</p>
          </header>

          {/* Top cards: 3 columns on lg, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">

            {/* Add Listing */}
            <div className="flex flex-col justify-between gap-4 p-8 rounded-2xl bg-white" style={{boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)'}} >
              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg sm:text-2xl font-medium text-[#24272C]">Add A listing</h2>
                  <p className="text-sm text-[#696665] mt-2 w-full">Easily create a new vehicle listing and share it with interested buyers in just minutes using our simple step-by-step form.</p>
                </div>
              </div>

              <div className="mt-4 flex justify-start sm:justify-normal">
                <button className="w-full sm:w-[204px] px-4 py-3 bg-[#E82121] text-white rounded-lg text-sm font-medium">Add listing</button>
              </div>
            </div>

            {/* Car image center */}
            <div className="flex items-center justify-center">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/6cb5af304655256907388f87557ab314e301d153?width=820" alt="Vehicle" className="w-full max-w-[480px] object-cover rounded-2xl" />
            </div>

            {/* View listings */}
            <div className="flex flex-col justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-white border border-[#EDEDED]">
              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg sm:text-2xl font-medium text-[#24272C]">View your listings</h2>
                  <p className="text-sm text-[#696665] mt-2">Quickly access all of your live vehicle listings from your dashboard, where you can update details, adjust pricing, and manage each ad with ease.</p>
                </div>
              </div>

              <div className="mt-4 flex justify-start sm:justify-normal">
                <button className="w-full sm:w-[204px] px-4 py-3 bg-[#E82121] text-white rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2">
                  <span>View listings</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 10L15.36 10" stroke="white" strokeWidth="1.2"/></svg>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom cards: responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Help Center */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white shadow-lg border border-[#EDEDED]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14">
                  <svg className="w-full h-full" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9 19.31L10.12 18.28" fill="#E82121"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#24272C]">Help Center</h3>
                  <p className="text-sm text-[#696665] mt-2">Get quick answers, helpful guides, and expert support whenever you need assistance using Carzino.</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full sm:w-[204px] px-4 py-3 bg-black text-white rounded-lg text-sm font-medium">Help Center</button>
              </div>
            </div>

            {/* Featured Credits */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#EDEDED]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14">
                  <svg className="w-full h-full" viewBox="0 0 60 60"><path d="M16.9 39.56" fill="#E82121"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#24272C]">Featured Ad Credits</h3>
                  <p className="text-sm text-[#696665] mt-2">Boost your visibility and attract more buyers by applying credits to feature your vehicle listings.</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full sm:w-[204px] px-4 py-3 border border-[#2B2825] text-[#E82121] rounded-lg text-sm font-medium">Featured Credits</button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#EDEDED]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14">
                  <svg className="w-full h-full" viewBox="0 0 60 60"><path d="M10.21 11.34" fill="#E82121"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#24272C]">Messages</h3>
                  <p className="text-sm text-[#696665] mt-2">Stay connected with potential buyers and sellers through secure, real-time messaging in your dashboard.</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full sm:w-[204px] px-4 py-3 border border-black text-[#E82121] rounded-lg text-sm font-medium">View Messages</button>
              </div>
            </div>

            {/* Profile Settings */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#EDEDED]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14">
                  <svg className="w-full h-full" viewBox="0 0 60 60"><path d="M41.25 26.34" fill="#E82121"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#24272C]">Profile Settings</h3>
                  <p className="text-sm text-[#696665] mt-2">Update your personal details, contact information, and preferences to customize your Carzino experience.</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full sm:w-[204px] px-4 py-3 border border-[#24272C] text-[#E82121] rounded-lg text-sm font-medium">Update Profile</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
