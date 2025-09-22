import { DashboardLayout } from "../components/DashboardLayout";

export default function AddAListingPage() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="flex flex-col items-start gap-2 mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#24272C] font-albert">Add a Listing</h1>
            <p className="text-sm text-[#696665]">Design canvas for the Add a Listing page. Add components or content here.</p>
          </header>

          {/* VIN Entry Form */}
          <div className="w-full bg-white border border-[#B2B2B2] rounded-2xl p-6 lg:p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                {/* Heading & Description */}
                <div className="space-y-4">
                  <h2 className="text-2xl lg:text-[32px] font-bold text-[#222] leading-normal">
                    Start by entering your vehicles vin number
                  </h2>
                  <p className="text-[15px] text-[#222] leading-7">
                    How do I find the VIN number for my car?<br />
                    Look on your insurance cards, registration, or the paperwork from when you purchased your vehicle. The most common place to find a VIN is on your vehicle's dashboard, near where the dashboard meets the edge of the windshield on the driver's side.
                  </p>
                </div>

                {/* Separator */}
                <div className="h-px bg-[#E5E7EB]"></div>

                {/* Form Controls */}
                <div className="space-y-4">
                  {/* Input Fields */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-[216px]">
                      <div className="relative bg-white border border-[#E1E1E1] rounded-xl h-[60px] px-4 py-2.5">
                        <label className="block text-[13px] text-[#818181] font-normal">
                          Year
                        </label>
                        <input
                          type="text"
                          placeholder="Select Year"
                          className="w-full text-[15px] text-[#050B20] font-normal bg-transparent border-none outline-none mt-1"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-[216px]">
                      <div className="relative bg-white border border-[#E1E1E1] rounded-xl h-[60px] px-4 py-2.5">
                        <label className="block text-[13px] text-[#818181] font-normal">
                          Make
                        </label>
                        <input
                          type="text"
                          placeholder="Select Make"
                          className="w-full text-[15px] text-[#050B20] font-normal bg-transparent border-none outline-none mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-1">
                    <button className="flex justify-center items-center px-6 py-5 bg-[#CF0D0D] border border-[#CF0D0D] rounded-xl text-white text-[15px] font-medium min-w-[161px] hover:bg-[#B10B0B] transition-colors">
                      Next
                    </button>
                    <button className="flex justify-center items-center px-6 py-5 bg-[#1E1E1E] border border-[#CF0D0D] rounded-xl text-white text-[15px] font-medium min-w-[161px] hover:bg-[#2A2A2A] transition-colors">
                      Skip
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-shrink-0 lg:w-[573px]">
                <div className="p-2.5">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b0bb87b082abcee51435cb3c6f2e227c5265b92f?width=998"
                    alt="Vehicle listing preview"
                    className="w-full h-auto max-w-[499px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <main>
            {/* Placeholder for Add a Listing content */}
            <div className="w-full bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <div className="text-sm text-[#242727] mb-4">Editable canvas</div>
              <div className="min-h-[360px] w-full rounded-lg border-dashed border-2 border-[#E6E6E6] bg-transparent" />
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
}
