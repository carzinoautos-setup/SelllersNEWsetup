// import { DashboardLayout } from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-[32px] xl:px-[60px] py-8">
          <header className="flex flex-col items-center gap-1 sm:gap-6 mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#24272C] font-albert text-center">
              <div style={{ fontWeight: 500 }}>
                <p>Welcome to your Carzino account test2</p>
              </div>
            </h1>
            <p className="text-sm text-[#696665] text-center max-w-2xl">
              Overview of your account and quick actions.
            </p>
          </header>

          {/* Top cards: 3 columns on lg, stacked on mobile */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch mb-8">
            {/* Duplicate of Add Listing — Sellers Name card */}
            <div
              className="flex flex-col justify-between gap-4 p-5 md:p-6 rounded-2xl bg-white h-full w-full lg:w-1/3"
              style={{
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-full text-center">
                  <div
                    className="flex items-center justify-center"
                    style={{ marginTop: "-4px" }}
                  >
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
                  <div className="text-sm text-[#696665] mt-0.5 w-full">
                    <div style={{ fontWeight: 400 }}>
                      <p>Address Here</p>
                    </div>
                    <div>Tacoma, Wa 98498</div>
                    <div>
                      <div>emailhere@gmail.com</div>
                      <div>Account #: Add here</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button className="w-1/2 sm:w-[204px] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm h-10 sm:h-[50px] bg-[#E82121] text-white rounded-lg font-medium">
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
                <button className="w-1/2 sm:w-[204px] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm h-10 sm:h-[50px] bg-[#4A4A4A] text-white rounded-lg font-medium">
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
                <button className="w-1/2 sm:w-[204px] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm h-10 sm:h-[50px] bg-[#E82121] text-white rounded-lg font-medium inline-flex items-center justify-center gap-2">
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

          {/* Dashboard Feature Cards */}
          <div className="flex flex-col gap-10 w-full max-w-[1290px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 xl:gap-8">
              {/* Help Center */}
              <div
                className="flex flex-col gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl border border-[#EDEDED] bg-white w-full max-w-none lg:max-w-[300px] mx-auto lg:mx-0"
                style={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                  border: "0.8px solid rgba(228, 228, 228, 1)",
                }}
              >
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                  <svg
                    className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_help)">
                      <path
                        d="M14.9062 19.3122L10.125 18.2809C8.8125 17.9997 7.59375 19.0309 7.59375 20.3434V22.3122C7.59375 23.9059 8.71875 24.2809 10.3125 24.2809H15.75C17.0625 24.2809 17.5313 23.7184 17.5313 22.9684V22.6872C17.625 21.0934 16.5 19.6872 14.9062 19.3122ZM9.375 22.4059V20.3434C9.375 20.1559 9.5625 19.9684 9.75 20.0622L14.5312 21.0934C15.1875 21.2809 15.6562 21.8434 15.75 22.4997C13.3125 22.4059 9.65625 22.4997 9.375 22.4059ZM21.1875 25.2184H33C33.4688 25.2184 33.9375 24.8434 33.9375 24.2809C33.9375 23.7184 33.5625 23.3434 33 23.3434H21.1875C20.7188 23.3434 20.25 23.7184 20.25 24.2809C20.25 24.8434 20.7188 25.2184 21.1875 25.2184Z"
                        fill="#E82121"
                      />
                      <path
                        d="M59.5312 55.2188L52.9688 44.7188C57.1875 40.4063 58.125 33.6562 54.75 28.4062C53.7188 26.8125 52.4063 25.4063 50.8125 24.375V19.5C50.8125 17.9062 50.3437 16.2188 49.3125 14.8125H51.6562C53.0625 14.8125 54.1875 13.6875 54.1875 12.2813V11.25C54.1875 9.84375 53.0625 8.71875 51.6562 8.71875H50.0625C48.5625 8.71875 47.25 9.46875 46.3125 10.6875L42.6562 3.1875C41.9062 1.3125 40.125 0 38.0625 0H16.125C14.0625 0 12.2813 1.21875 11.5313 3.09375L7.875 10.6875C7.03125 9.46875 5.625 8.71875 4.125 8.71875H2.53125C1.125 8.71875 0 9.84375 0 11.25V12.2813C0 13.6875 1.125 14.8125 2.53125 14.8125H4.875C3.84375 16.125 3.375 17.8125 3.375 19.5V25.125C3.375 27.2812 4.125 29.3438 5.625 31.125V35.3438C5.625 37.2188 7.125 38.7187 9 38.7187H12.4688C14.3438 38.7187 15.8437 37.2188 15.8437 35.3438V33.6563H30.2812C29.9062 36.6563 30.4687 39.75 32.1562 42.4687C35.4375 47.7187 41.8125 49.9688 47.625 48L54.1875 58.5C55.125 60 57 60.375 58.5 59.5312C60 58.5938 60.375 56.7188 59.5312 55.2188ZM50.0625 10.5938H51.6562C52.0312 10.5938 52.3125 10.875 52.3125 11.25V12.2813C52.3125 12.6563 52.0312 12.9375 51.6562 12.9375H47.625C47.5312 12.8438 47.4375 12.6563 47.25 12.4688C47.5313 12.2813 48.1875 10.5938 50.0625 10.5938ZM13.2188 3.84375C13.6875 2.625 14.8125 1.875 16.125 1.875H38.0625C39.375 1.875 40.5 2.625 41.0625 3.9375C41.4375 4.6875 45.2812 12.75 45.75 13.4063H8.53125C8.90625 12.75 8.53125 13.5937 13.2188 3.84375ZM1.875 12.2813V11.25C1.875 10.875 2.15625 10.5938 2.53125 10.5938H4.125C5.0625 10.5938 5.90625 11.0625 6.375 11.8125L6.84375 12.5625C6.75 12.75 6.65625 12.8437 6.46875 13.0312H2.53125C2.15625 12.9375 1.875 12.6563 1.875 12.2813ZM14.0625 35.25C14.0625 36.0937 13.4062 36.75 12.5625 36.75H9C8.15625 36.75 7.5 36.0937 7.5 35.25V32.5313C8.625 33.1875 9.9375 33.5625 11.25 33.5625H14.0625V35.25ZM11.1562 31.7813C7.6875 31.7813 5.15625 28.5 5.15625 25.0313V19.4063C5.15625 17.8125 5.8125 16.3125 6.9375 15.0938H47.1562C48.375 16.3125 48.9375 17.8125 48.9375 19.4063V23.25C48.1875 22.875 47.3438 22.5937 46.5938 22.4062V20.25C46.5938 18.8438 45.2812 17.9062 44.0625 18.1875L39.2813 19.2188C37.7813 19.5938 36.6562 20.9062 36.6562 22.5C36.6562 22.6875 36.5625 23.25 37.0312 23.7187L36.4688 24C35.1563 24.8438 34.125 25.7813 33.1875 26.9063H21.1875C20.7188 26.9063 20.25 27.2813 20.25 27.8438C20.25 28.4063 20.625 28.7813 21.1875 28.7813H31.875C31.3125 29.7188 30.9375 30.75 30.6563 31.6875H11.1562V31.7813ZM40.5 22.5H38.4375C38.5313 21.8438 39 21.2813 39.6562 21.1875C39.75 21.1875 39.75 21.1875 39.6562 21.1875L44.5312 20.1562C44.7188 20.1562 44.9063 20.25 44.9063 20.4375V22.3125C43.4063 22.0312 41.9063 22.125 40.5 22.5ZM33.75 41.4375C30.375 36.0938 32.0625 28.9687 37.4063 25.5937C42.75 22.2187 49.875 23.9063 53.25 29.25C56.625 34.5938 54.9375 41.7187 49.5938 45.0937C44.1563 48.4687 37.125 46.875 33.75 41.4375ZM57.5625 57.9375C57 58.3125 56.1563 58.125 55.7812 57.5625L49.4063 47.3438C49.7813 47.1562 50.1563 46.9687 50.5313 46.6875C50.9063 46.5 51.2812 46.2188 51.5625 45.9375L57.9375 56.1563C58.3125 56.8125 58.125 57.5625 57.5625 57.9375Z"
                        fill="#E82121"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_help">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                    <h3 className="text-[17px] font-medium text-[#24272C] font-albert leading-[20px]">
                      Help Center
                    </h3>
                    <p className="text-sm font-normal text-[#696665] font-albert leading-[140%]">
                      Get quick answers, helpful guides, and expert support
                      whenever you need assistance using Carzino.
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Ad Credits */}
              <div
                className="flex flex-col gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl border border-[#EDEDED] bg-white w-full max-w-none lg:max-w-[300px] mx-auto lg:mx-0"
                style={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                  border: "0.8px solid rgba(228, 228, 228, 1)",
                }}
              >
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                  <svg
                    className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9688 39.5622L11.9063 38.4372C10.5 38.1559 9.28125 39.1872 9.28125 40.5934V42.7497C9.28125 44.4372 10.5938 44.7184 12.1875 44.8122H18C19.0313 44.8122 19.875 44.4372 19.875 43.4059V43.1247C19.7813 41.3434 18.6563 39.9372 16.9688 39.5622ZM11.0625 42.8434V40.4997C11.0625 40.2184 11.25 40.0309 11.5313 40.1247L16.6875 41.2497C17.4375 41.4372 18 42.0934 18.0937 42.8434C17.9062 42.9372 11.1563 42.9372 11.0625 42.8434ZM48.0937 38.4372L42.9375 39.5622C41.25 39.9372 40.125 41.3434 40.125 43.0309C40.125 43.1247 39.9375 44.3434 41.25 44.6247C41.9062 44.8122 46.125 44.7184 47.9062 44.7184C49.5 44.7184 50.7187 44.3434 50.7187 42.6559V40.4997C50.8125 39.1872 49.5 38.1559 48.0937 38.4372ZM48.9375 42.8434C48.6563 42.9372 42.0937 42.9372 42 42.9372C42.0937 42.1872 42.5625 41.5309 43.3125 41.3434L48.4688 40.2184C48.75 40.1247 48.9375 40.3122 48.9375 40.5934V42.8434ZM36.2812 43.8747H23.7187C23.25 43.8747 22.7812 44.2497 22.7812 44.8122C22.7812 45.3747 23.1562 45.7497 23.7187 45.7497H36.2812C36.75 45.7497 37.2187 45.3747 37.2187 44.8122C37.2187 44.2497 36.8437 43.8747 36.2812 43.8747ZM36.2812 47.7184H23.7187C23.25 47.7184 22.7812 48.0934 22.7812 48.6559C22.7812 49.2184 23.1562 49.5934 23.7187 49.5934H36.2812C36.75 49.5934 37.2187 49.2184 37.2187 48.6559C37.2187 48.0934 36.8437 47.7184 36.2812 47.7184Z"
                      fill="#E82121"
                    />
                    <path
                      d="M56.25 28.3125H54.5625C52.9687 28.3125 51.4687 29.0625 50.625 30.4688L48.9375 27.0937C53.8125 24.8437 57.1875 19.9687 57.1875 14.25C57.0937 6.375 50.7187 0 42.9375 0C35.1562 0 28.7812 6.375 28.7812 14.1563C28.7812 15.8438 29.0625 17.4375 29.625 18.9375H18.2812C16.125 18.9375 14.1563 20.25 13.4063 22.2188L9.46875 30.375C8.625 29.0625 7.125 28.2188 5.53125 28.2188H3.75C2.34375 28.2188 1.125 29.4375 1.125 30.8438V31.9687C1.125 33.375 2.25 34.5938 3.75 34.5938H6.46875C5.34375 36 4.78125 37.7812 4.78125 39.6562V45.6563C4.78125 47.9063 5.625 50.1562 7.21875 52.0312V56.5312C7.21875 58.5 8.8125 60 10.6875 60H14.4375C16.4062 60 17.9062 58.4062 17.9062 56.5312V54.75H42V56.5312C42 58.5 43.5937 60 45.4687 60H49.2187C51.1875 60 52.6875 58.4062 52.6875 56.5312V52.0312C54.2813 50.25 55.125 48.0937 55.125 45.75V39.75C55.125 38.625 54.8437 37.4062 54.375 36.375C54.0937 35.8125 53.8125 35.25 53.3438 34.6875H56.25C57.6562 34.6875 58.875 33.5625 58.875 32.0625V30.9375C58.7812 29.4375 57.6562 28.3125 56.25 28.3125ZM42.9375 1.875C49.7812 1.875 55.3125 7.40625 55.3125 14.1563C55.3125 20.9063 49.7813 26.4375 43.0313 26.4375C36.2813 26.4375 30.75 20.9063 30.75 14.1563C30.75 7.40625 36.1875 1.875 42.9375 1.875ZM15.0938 22.9688C15.5625 21.6563 16.875 20.8125 18.2812 20.8125H30.4687C32.8125 25.3125 37.5 28.3125 42.9375 28.3125C44.4375 28.3125 45.8437 28.125 47.1562 27.6562C47.25 27.75 49.5 32.5313 49.875 33.1875H10.0312C10.4063 32.625 9.84375 33.9375 15.0938 22.9688ZM3 31.9687V30.8438C3 30.375 3.375 30 3.75 30H5.4375C7.5 30 8.25 31.875 8.4375 32.1562C8.34375 32.3437 8.15625 32.5313 8.0625 32.7188H3.75C3.375 32.7188 3 32.4375 3 31.9687ZM16.125 56.4375C16.125 57.375 15.375 58.125 14.4375 58.125H10.6875C9.75 58.125 9 57.375 9 56.4375V53.4375C10.2188 54.1875 11.625 54.5625 13.0312 54.5625H16.125V56.4375ZM49.3125 58.125H45.5625C44.625 58.125 43.875 57.375 43.875 56.4375V54.6562H46.9687C48.375 54.6562 49.7813 54.2812 51 53.5312V56.5312C51 57.375 50.25 58.125 49.3125 58.125ZM53.4375 45.5625C53.4375 49.3125 50.7187 52.7812 46.9687 52.7812H13.0312C9.28125 52.7812 6.5625 49.2187 6.5625 45.5625V39.5625C6.5625 37.875 7.21875 36.1875 8.53125 34.9687H51.5625C52.125 35.5312 52.5937 36.1875 52.9687 36.9375C53.3437 37.7813 53.5312 38.7188 53.5312 39.5625V45.5625H53.4375ZM57 31.9687C57 32.4375 56.625 32.7188 56.25 32.7188H51.9375C51.75 32.5313 51.6562 32.3437 51.5625 32.1562C51.8437 31.875 52.5 30 54.5625 30H56.25C56.7187 30 57 30.375 57 30.75V31.9687Z"
                      fill="#E82121"
                    />
                    <path
                      d="M40.125 17.9062C40.125 17.4375 39.75 16.9687 39.1875 16.9687C38.625 16.9687 38.25 17.3437 38.25 17.9062C38.25 20.1562 39.8438 22.0312 42 22.4062V23.625C42 24.0937 42.375 24.5625 42.9375 24.5625C43.5 24.5625 43.875 24.1875 43.875 23.625V22.4062C46.0312 21.9375 47.625 20.1562 47.625 17.9062C47.625 15.6562 46.0312 13.7812 43.875 13.4062V7.78125C45 8.15625 45.75 9.1875 45.75 10.4062C45.75 10.875 46.125 11.3437 46.6875 11.3437C47.25 11.3437 47.625 10.9687 47.625 10.4062C47.625 8.15625 46.0312 6.28125 43.875 5.90625V4.6875C43.875 4.21875 43.5 3.75 42.9375 3.75C42.375 3.75 42 4.125 42 4.6875V5.90625C39.8438 6.375 38.25 8.15625 38.25 10.4062C38.25 12.6562 39.8438 14.5312 42 14.9062V20.4375C40.9687 20.1562 40.125 19.125 40.125 17.9062ZM45.75 17.9062C45.75 19.125 44.9063 20.1562 43.875 20.5312V15.2812C45 15.5625 45.75 16.6875 45.75 17.9062ZM40.125 10.4062C40.125 9.1875 40.9687 8.15625 42 7.78125V13.125C40.9687 12.6562 40.125 11.625 40.125 10.4062Z"
                      fill="#E82121"
                    />
                  </svg>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                    <h3 className="text-[17px] font-medium text-[#24272C] font-albert leading-[20px]">
                      <p>Featured Ad Credit</p>
                    </h3>
                    <p className="text-sm font-normal text-[#696665] font-albert leading-[140%]">
                      Boost your visibility and attract more buyers by applying
                      credits to feature your vehicle listings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div
                className="flex flex-col gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl border border-[#EDEDED] bg-white w-full max-w-none lg:max-w-[300px] mx-auto lg:mx-0"
                style={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                  border: "0.8px solid rgba(228, 228, 228, 1)",
                }}
              >
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                  <svg
                    className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_messages)">
                      <path
                        d="M10.2187 11.3438L10.9688 11.4375C10.5937 11.9062 10.4062 12.5625 10.5 13.2188L11.0625 22.3125C11.1563 23.1562 11.625 23.9062 12.2813 24.2812V25.7812C12.2813 27.0937 13.3125 28.125 14.625 28.125H18.5625C19.875 28.125 20.9062 27.0937 20.9062 25.7812V24.6562H36.6562V25.7812C36.6562 27.0937 37.6875 28.125 39 28.125H42.9375C44.25 28.125 45.2812 27.0937 45.2812 25.7812V24.0938C45.8437 23.625 46.2187 23.0625 46.2187 22.3125L46.7813 13.2188C46.875 12.5625 46.5938 12 46.3125 11.4375L47.1562 11.3438C48.6562 11.1563 49.875 9.84375 49.7812 8.15625C49.5937 6.75 48.375 5.71875 46.9687 5.625H44.625C43.875 5.625 43.125 5.90625 42.5625 6.46875C41.9063 4.96875 41.0625 3.5625 40.3125 2.34375C39.4687 0.9375 37.875 0 36.2812 0H21.1875C19.5 0 18 0.84375 17.0625 2.34375C16.125 3.84375 15.4688 5.0625 14.8125 6.46875C14.3438 5.90625 13.5938 5.625 12.8438 5.625L10.5 5.71875C8.90625 5.71875 7.6875 7.03125 7.6875 8.53125C7.6875 9.9375 8.8125 11.25 10.2187 11.3438ZM14.7188 10.5H42.6562C42.9375 10.875 43.2188 11.1562 43.5 11.4375C39.9375 12.0937 37.6875 13.875 36.375 15.5625C35.7187 16.4063 34.7812 16.7812 33.8437 16.7812H23.4375C22.5 16.7812 21.5625 16.3125 20.9062 15.5625C19.5937 13.9688 17.3437 12.0937 13.7812 11.4375C14.1563 11.1562 14.4375 10.7812 14.7188 10.5ZM43.7812 22.875H13.5938C13.2188 22.875 12.8438 22.5938 12.8438 22.2188L12.5625 17.5313C12.8437 17.5313 16.5938 19.7813 19.3125 16.5C20.3438 17.7188 21.5625 18.6562 23.4375 18.6562H33.9375C35.7187 18.6562 36.9375 17.8125 38.0625 16.5C39.375 18.0938 41.625 18.75 43.5937 18L44.7188 17.5313L44.4375 22.2188C44.5313 22.5938 44.1563 22.875 43.7812 22.875ZM18 15.1875C16.125 17.7188 13.125 15.6563 12.4688 15.5625L12.375 13.125C14.9063 13.2188 16.6875 14.1563 18 15.1875ZM45 13.125L44.9063 15.5625C44.25 15.6563 41.25 17.7188 39.375 15.1875C40.6875 14.1563 42.4687 13.2188 45 13.125ZM19.125 25.875C19.125 26.1563 18.8437 26.4375 18.5625 26.4375H14.625C14.3438 26.4375 14.0625 26.1563 14.0625 25.875V24.75H19.0312V25.875H19.125ZM43.0313 26.3438H39.0938C38.8125 26.3438 38.5312 26.0625 38.5312 25.7812V24.6562H43.5V25.7812C43.5 26.1563 43.3125 26.3438 43.0313 26.3438ZM44.625 7.5H46.9687C47.5312 7.5 48 7.875 48 8.34375C48 8.4375 48.0938 9.375 47.0625 9.46875L44.625 9.75C43.5 8.625 43.7812 8.4375 43.7812 8.34375C43.5937 7.875 44.0625 7.5 44.625 7.5ZM18.6562 3.28125C19.125 2.4375 20.1563 1.875 21.1875 1.875H36.2812C37.3125 1.875 38.25 2.4375 38.8125 3.28125C40.875 6.75 40.7813 6.84375 41.625 8.71875H15.8437C16.6875 6.75 16.5 6.75 18.6562 3.28125ZM10.5 7.5H12.8438C13.9688 7.40625 13.6875 8.625 13.7812 8.71875C13.5 9.1875 13.2188 9.5625 12.8438 9.84375L10.4063 9.5625C9.84375 9.46875 9.375 9.09375 9.375 8.53125C9.5625 8.4375 9.5625 7.59375 10.5 7.5Z"
                        fill="#E82121"
                      />
                      <path
                        d="M58.6875 26.4377C56.9062 23.9064 53.25 24.0002 51.5625 26.2502L39 39.5627C38.1562 37.7814 36.375 36.5627 34.4063 36.5627H23.25C22.2187 36.5627 21.2813 36.3752 20.3438 35.9064C15.6563 33.6564 10.0313 34.3127 6 37.6877L0.84375 42.0002C0.46875 42.2814 0.375 42.9377 0.75 43.3127C1.03125 43.6877 1.6875 43.7814 2.0625 43.4064L7.21875 39.0939C10.6875 36.1877 15.5625 35.6252 19.5937 37.5939C20.7187 38.1564 22.0312 38.4377 23.3437 38.4377H34.5C36.1875 38.4377 37.7812 39.7502 37.7812 41.7189C37.7812 43.5002 36.4687 44.9064 34.6875 44.9064H22.5938C22.125 44.9064 21.6563 45.2814 21.6563 45.8439C21.6563 46.4064 22.0313 46.7814 22.5938 46.7814H34.5C37.125 46.7814 39.375 44.7189 39.375 41.8127L52.9688 27.4689C54 26.0627 56.1562 26.0627 57.1875 27.5627C57.8437 28.5002 57.8438 29.8127 57.0938 30.7502L46.4062 44.8127C39.1875 54.3752 26.8125 57.1877 16.2187 53.9064C13.3125 52.9689 8.71875 53.6252 6 55.2189L0.9375 58.3127C0.46875 58.5939 0.375 59.1564 0.65625 59.5314C0.84375 60.0002 1.40625 60.0939 1.875 59.8127L7.125 56.7189C9.375 55.3127 13.4062 54.8439 15.8437 55.5939C27.0937 59.0627 40.2188 56.0627 48 45.8439L58.6875 31.7814C59.8125 30.1877 59.8125 28.0314 58.6875 26.4377Z"
                        fill="#E82121"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_messages">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                    <h3 className="text-[17px] font-medium text-[#24272C] font-albert leading-[20px]">
                      Messages
                    </h3>
                    <p className="text-sm font-normal text-[#696665] font-albert leading-[140%]">
                      Stay connected with potential buyers and sellers through
                      secure, real-time messaging in your dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Settings */}
              <div
                className="flex flex-col gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl border border-[#EDEDED] bg-white w-full max-w-none lg:max-w-[300px] mx-auto lg:mx-0"
                style={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                  border: "0.8px solid rgba(228, 228, 228, 1)",
                }}
              >
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/3567bf8fc97874a478dd081368b4f20fa2ca862a?width=120"
                    className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"
                    alt="Profile Settings"
                  />
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                    <h3 className="text-[17px] font-medium text-[#24272C] font-albert leading-[20px]">
                      Profile Settings
                    </h3>
                    <p className="text-sm font-normal text-[#696665] font-albert leading-[140%]">
                      Update your personal details, contact information, and
                      preferences to customize your Carzino experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dealership Information Form */}
          <div className="flex flex-col items-start gap-5 w-full max-w-[1290px] mx-auto mt-8" />
        </div>
      </div>
    </DashboardLayout>
  );
}
