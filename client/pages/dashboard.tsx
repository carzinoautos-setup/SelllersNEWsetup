import { DashboardLayout } from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="flex flex-col items-center gap-1 sm:gap-6 mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#24272C] font-albert text-center">
              Welcome to your Carzino account
            </h1>
            <p className="text-sm text-[#696665] text-center max-w-2xl">
              Overview of your account and quick actions.
            </p>
          </header>

          {/* Top cards: 3 columns on lg, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start mb-8">
            {/* Add Listing */}
            <div
              className="flex flex-col justify-between gap-1 sm:gap-4 p-5 md:p-6 rounded-2xl bg-white"
              style={{
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F2db1f9af8b3345fb990ffaf367c3987e?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F2db1f9af8b3345fb990ffaf367c3987e?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F2db1f9af8b3345fb990ffaf367c3987e?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F2db1f9af8b3345fb990ffaf367c3987e?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F2db1f9af8b3345fb990ffaf367c3987e?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F2db1f9af8b3345fb990ffaf367c3987e?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F2db1f9af8b3345fb990ffaf367c3987e?format=webp&width=2000 2000w"
                    alt=""
                    className="block sm:hidden lg:block w-full rounded-md object-cover mt-5"
                    style={{
                      aspectRatio: "2.65",
                      objectPosition: "center",
                      minHeight: "20px",
                      minWidth: "20px",
                    }}
                  />
                  <h2 className="text-lg sm:text-2xl font-medium text-[#24272C]">
                    Add A listing
                  </h2>
                  <p className="text-sm text-[#696665] mt-2 w-full">
                    Easily create a new vehicle listing and share it with
                    interested buyers in just minutes using our simple
                    step-by-step form.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-start sm:justify-normal">
                <button className="w-full sm:w-[204px] px-4 py-3 bg-[#E82121] text-white rounded-lg text-sm font-medium">
                  Add listing
                </button>
              </div>
            </div>

            {/* Car image center */}
            <div className="flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6cb5af304655256907388f87557ab314e301d153?width=820"
                alt="Vehicle"
                className="w-full max-w-[480px] object-cover rounded-2xl hidden md:block"
              />
            </div>

            {/* View listings */}
            <div
              className="flex flex-col justify-between gap-4 p-5 md:p-6 rounded-2xl bg-white"
              style={{
                border: "0.8px solid rgba(251,251,251,1)",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=2000 2000w"
                    alt=""
                    className="block sm:hidden lg:block w-full rounded-md object-cover mt-5"
                    style={{
                      aspectRatio: "2.65",
                      objectPosition: "center",
                      minHeight: "20px",
                      minWidth: "20px",
                    }}
                  />
                  <h2 className="text-lg sm:text-2xl font-medium text-[#24272C]">
                    Your listings
                  </h2>
                  <p className="text-sm text-[#696665] mt-2">
                    Quickly access all of your live vehicle listings from your
                    dashboard, where you can update details, adjust pricing, and
                    manage with ease.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-start sm:justify-normal">
                <button className="w-full sm:w-[204px] px-4 py-3 bg-[#E82121] text-white rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2">
                  <span>View listings</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 10L15.36 10"
                      stroke="white"
                      strokeWidth="1.2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom cards: responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Help Center */}
            <div
              className="flex flex-col justify-center rounded-2xl bg-white"
              style={{
                display: "flex",
                alignItems: "flex-start",
                backgroundColor: "rgb(255, 255, 255)",
                border: "0.8px solid rgba(228, 228, 228, 1)",
                borderRadius: "16px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                flexDirection: "column",
                fontWeight: "400",
                justifyContent: "center",
                "@media (max-width: 640px)": {
                  paddingTop: "10px",
                },
                padding: "10px 11px 10px 12px",
              }}
            >
              <div className="flex items-start gap-4">
                <div style={{ fontWeight: "400", marginBottom: "-3px", "@media (max-width: 640px)": { lineHeight: "14px" } }}>
                  <div style={{ color: "rgb(36, 39, 44)", fontSize: "18px", fontWeight: "600", lineHeight: "28px", textDecoration: "rgb(36, 39, 44)", "@media (max-width: 640px)": { lineHeight: "22px" } }}>
                    Help Center
                  </div>
                  <p className="text-sm text-[#696665]" style={{ marginTop: "-1px" }}>
                    Get quick answers, helpful guides, and expert support
                    whenever you need assistance using Carzino.
                  </p>
                </div>
              </div>
              <div
                style={{
                  fontWeight: "400",
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "16px auto 0",
                }}
              />
            </div>

            {/* Featured Credits */}
            <div
              className="flex flex-col justify-between rounded-2xl bg-white "
              style={{
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                justifyContent: "center",
                padding: "10px 11px 10px 12px",
              }}
            >
              <div className="flex items-start gap-4">
                <div style={{ marginBottom: "-3px" }}>
                  <h3 className="text-lg font-medium text-[#24272C]">
                    Help Center
                  </h3>
                  <p className="text-sm text-[#696665] mt-2">
                    Get quick answers, helpful guides, and expert support
                    whenever you need assistance using Carzino.
                  </p>

                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex flex-col justify-between rounded-2xl bg-white "
              style={{
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                justifyContent: "center",
                padding: "10px 11px 10px 12px",
              }}
            >
              <div className="flex items-start gap-4">
                <div style={{ marginBottom: "-3px" }}>
                  <h3 className="text-lg font-medium text-[#24272C]">
                    Help Center
                  </h3>
                  <p className="text-sm text-[#696665] mt-2">
                    Get quick answers, helpful guides, and expert support
                    whenever you need assistance using Carzino.
                  </p>

                </div>
              </div>
            </div>

            {/* Profile Settings */}
            <div
              className="flex flex-col justify-between rounded-2xl bg-white "
              style={{
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                justifyContent: "center",
                padding: "10px 11px 10px 12px",
              }}
            >
              <div className="flex items-start gap-4">
                <div style={{ marginBottom: "-3px" }}>
                  <h3 className="text-lg font-medium text-[#24272C]">
                    Help Center
                  </h3>
                  <p className="text-sm text-[#696665] mt-2">
                    Get quick answers, helpful guides, and expert support
                    whenever you need assistance using Carzino.
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* Dealership Information Form */}
          <div className="flex flex-col items-start gap-5 w-full max-w-[1484px] mx-auto mt-8" />
        </div>

        {/* Profile Card - Figma Design */}
        <div className="w-full max-w-[400px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative flex flex-col items-center justify-end bg-white rounded-3xl p-4 pt-16 pb-6 min-h-[270px]" style={{ boxShadow: '0 10px 20px rgba(0,95,183,0.08)' }}>
            {/* Profile Image - positioned to overflow at top */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-[107px] h-[107px] rounded-full border-[5px] border-white bg-gray-200 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fc995fe842c70430fbc202b2ccec5b0c6?format=webp&width=800"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-3 w-full max-w-[344px] text-center">
              {/* Name */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#24272C] font-albert leading-tight">
                Sellers Name
              </h2>

              {/* Address and Email - keep line breaks */}
              <p className="text-sm font-normal text-[#414141] font-albert leading-[1.4] px-2">
                10216 Melody Lane Sw<br />
                Tacoma, Wa 98498<br />
                emailhere@gmail.com
              </p>

              {/* Edit Profile Button */}
              <button aria-label="Edit profile" className="flex items-center justify-center gap-2 w-[204px] h-[50px] bg-[#24272C] text-white rounded-[14px] font-outfit text-base font-medium hover:bg-[#1a1d21] transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
