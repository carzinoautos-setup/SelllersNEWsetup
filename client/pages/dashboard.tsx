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
          <div className="flex flex-col lg:flex-row gap-6 items-stretch mb-8">
            {/* Duplicate of Add Listing — Sellers Name card */}
            <div className="flex flex-col justify-between gap-4 p-5 md:p-6 rounded-2xl bg-white h-full w-full lg:w-1/3" style={{ boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-full">
                  <div className="flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fd3b69236eb3240d09279f432fca9be0d"
                        alt="Seller"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-2xl font-medium text-[#24272C] text-center mt-3">
                    Sellers Name
                  </h2>
                  <p className="text-sm text-[#696665] mt-2 w-full text-center">
                    <span>10216 Melody Lane Sw</span>
                    <br />
                    <span>Tacoma, Wa 98498</span>
                    <br />
                    <span>emailhere@gmail.com<br/>253-000-0000</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button className="w-full sm:w-[204px] px-4 py-3 bg-[#E82121] text-white rounded-lg text-sm font-medium">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Add Listing */}
            <div
              className="flex flex-col justify-between gap-1 sm:gap-4 p-5 md:p-6 rounded-2xl bg-white h-full w-full lg:w-1/3"
              style={{
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F2db1f9af8b3345fb990ffaf367c3987e?format=webp&width=2000"
                    alt=""
                    className="block sm:hidden lg:block w-full rounded-[14px] object-cover"
                    style={{
                      aspectRatio: "2.65 / 1",
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

              <div className="mt-4 flex justify-center">
                <button className="w-full sm:w-[204px] px-4 py-3 bg-[#4A4A4A] text-white rounded-lg text-sm font-medium">
                  Add listing
                </button>
              </div>
            </div>

            {/* View listings */}
            <div
            className="flex flex-col justify-between gap-4 p-5 md:p-6 rounded-2xl bg-white h-full w-full lg:w-1/3"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
              <div className="flex items-start gap-4">
                <div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fba622308806749e89c9669055a2385b0?format=webp&width=2000 2000w"
                    alt=""
                    className="block sm:hidden lg:block w-full rounded-[14px] object-cover"
                    style={{
                      aspectRatio: "2.65 / 1",
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

              <div className="mt-4 flex justify-center">
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
                  <div className="flex items-center" style={{ gap: "8px" }}>
                    <div style={{ color: "rgb(36, 39, 44)", fontSize: "18px", fontWeight: "600", lineHeight: "28px", textDecoration: "rgb(36, 39, 44)", "@media (max-width: 640px)": { lineHeight: "22px" } }}>
                      Help Center
                    </div>
                    <div aria-hidden="true" className="w-6 h-6 flex items-center justify-center" data-design-placeholder="svg-icon">
                      <img src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F60b305c165284e30a98bef1752da9948?format=webp&width=800" alt="Help icon" className="w-full h-full object-contain" style={{ filter: 'contrast(1.25) saturate(1.15)' }} />
                    </div>
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

      </div>
    </DashboardLayout>
  );
}
