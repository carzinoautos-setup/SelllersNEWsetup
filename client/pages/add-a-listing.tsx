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

          {/* VIN Entry Form - Responsive */}
          <section className="w-full bg-white border border-[#B2B2B2] rounded-2xl p-4 sm:p-6 lg:p-8 mb-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6 lg:gap-12 items-center">
                {/* Left: Text + Form */}
                <div className="order-1 lg:order-1">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-[#222] leading-tight">
                      Start by entering your vehicles vin number
                    </h2>
                    <p className="text-sm sm:text-[15px] text-[#222] leading-7">
                      How do I find the VIN number for my car?
                      <br />
                      Look on your insurance cards, registration, or the paperwork from when you purchased your vehicle. The most common place to find a VIN is on your vehicle's dashboard, near where the dashboard meets the edge of the windshield on the driver's side.
                    </p>
                  </div>

                  <div className="h-px bg-[#E5E7EB] my-4" />

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-[13px] text-[#818181]">Year</span>
                        <input
                          aria-label="Year"
                          type="text"
                          placeholder="Select Year"
                          className="mt-1 w-full h-[60px] rounded-xl border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none"
                        />
                      </label>

                      <label className="block">
                        <span className="text-[13px] text-[#818181]">Make</span>
                        <input
                          aria-label="Make"
                          type="text"
                          placeholder="Select Make"
                          className="mt-1 w-full h-[60px] rounded-xl border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none"
                        />
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto flex-1 sm:flex-none px-6 py-3 bg-[#CF0D0D] text-white rounded-xl text-[15px] font-medium hover:bg-[#B10B0B] transition-colors"
                      >
                        Next
                      </button>

                      <button
                        type="button"
                        className="w-full sm:w-auto flex-1 sm:flex-none px-6 py-3 bg-[#1E1E1E] text-white rounded-xl text-[15px] font-medium hover:bg-[#2A2A2A] transition-colors border border-[#CF0D0D]"
                      >
                        Skip
                      </button>
                    </div>
                  </form>
                </div>

                {/* Right: Image */}
                <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
                  <div className="w-full max-w-[520px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b0bb87b082abcee51435cb3c6f2e227c5265b92f?width=998"
                      alt="Vehicle listing preview"
                      className="w-full h-auto object-contain rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

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
