import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function PaymentsPage() {
  const [cards, setCards] = useState(
    [
      { id: 1, brand: "Visa", last4: "4242", exp: "12/24" },
      { id: 2, brand: "Mastercard", last4: "3185", exp: "09/25" },
    ] as { id: number; brand: string; last4: string; exp: string }[],
  );

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [exp, setExp] = useState("");

  const addCard = () => {
    if (!cardNumber || !cardName || !exp) return;
    const newCard = {
      id: Date.now(),
      brand: cardNumber.startsWith("4") ? "Visa" : "Card",
      last4: cardNumber.slice(-4),
      exp,
    };
    setCards((s) => [newCard, ...s]);
    setCardNumber("");
    setCardName("");
    setExp("");
  };

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] py-8">
          <div className="mb-6">
            <h1 className="text-[24px] font-semibold text-[#24272C]">Payments</h1>
            <p className="text-[14px] text-[#6B6B6B] mt-2">Manage saved payment methods and add a new card.</p>
          </div>

          {/* Registration Form Component */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-start rounded-[30px] bg-white shadow-[0_4px_18px_0_rgba(0,0,0,0.08)] max-w-[924px] w-full overflow-hidden">
              {/* Left Image */}
              <div className="hidden md:block w-[384px] h-[854px] flex-shrink-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d8f4e4abbc848d3722e720f890700b32fb257ea9?width=768"
                  alt="Registration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col p-10 gap-10 bg-white rounded-r-4 flex-1 relative">
                {/* Close Button */}
                <button className="absolute top-10 right-10 w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#24272C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Title */}
                <h2 className="text-[40px] font-bold leading-[48px] text-[#24272C] font-albert">Register</h2>

                {/* Form */}
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-6">
                    {/* User Name Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#24272C] font-albert">User name</label>
                      <div className="flex h-[54px] px-[18px] py-4 items-center gap-[10px] rounded-[14px] border border-[#EDEDED] bg-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.8118 4.5C11.8118 5.24592 11.5154 5.96129 10.988 6.48874C10.4605 7.01618 9.74517 7.3125 8.99925 7.3125C8.25333 7.3125 7.53796 7.01618 7.01051 6.48874C6.48307 5.96129 6.18675 5.24592 6.18675 4.5C6.18675 3.75408 6.48307 3.03871 7.01051 2.51126C7.53796 1.98382 8.25333 1.6875 8.99925 1.6875C9.74517 1.6875 10.4605 1.98382 10.988 2.51126C11.5154 3.03871 11.8118 3.75408 11.8118 4.5ZM3.375 15.0885C3.3991 13.6128 4.00225 12.2056 5.05438 11.1705C6.10651 10.1354 7.52332 9.55535 8.99925 9.55535C10.4752 9.55535 11.892 10.1354 12.9441 11.1705C13.9962 12.2056 14.5994 13.6128 14.6235 15.0885C12.859 15.8976 10.9404 16.3151 8.99925 16.3125C6.99225 16.3125 5.08725 15.8745 3.375 15.0885Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input
                          type="text"
                          placeholder="User name"
                          className="flex-1 text-sm text-[#696665] font-albert bg-transparent outline-none"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#24272C] font-albert">Email address</label>
                      <div className="flex h-[54px] px-[18px] py-4 items-center gap-[10px] rounded-[14px] border border-[#EDEDED] bg-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.8118 4.5C11.8118 5.24592 11.5154 5.96129 10.988 6.48874C10.4605 7.01618 9.74517 7.3125 8.99925 7.3125C8.25333 7.3125 7.53796 7.01618 7.01051 6.48874C6.48307 5.96129 6.18675 5.24592 6.18675 4.5C6.18675 3.75408 6.48307 3.03871 7.01051 2.51126C7.53796 1.98382 8.25333 1.6875 8.99925 1.6875C9.74517 1.6875 10.4605 1.98382 10.988 2.51126C11.5154 3.03871 11.8118 3.75408 11.8118 4.5ZM3.375 15.0885C3.3991 13.6128 4.00225 12.2056 5.05438 11.1705C6.10651 10.1354 7.52332 9.55535 8.99925 9.55535C10.4752 9.55535 11.892 10.1354 12.9441 11.1705C13.9962 12.2056 14.5994 13.6128 14.6235 15.0885C12.859 15.8976 10.9404 16.3151 8.99925 16.3125C6.99225 16.3125 5.08725 15.8745 3.375 15.0885Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input
                          type="email"
                          placeholder="Email address"
                          className="flex-1 text-sm text-[#696665] font-albert bg-transparent outline-none"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#24272C] font-albert">Password</label>
                      <div className="flex h-[54px] px-[18px] py-4 items-center gap-[10px] rounded-[14px] border border-[#EDEDED] bg-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input
                          type="password"
                          placeholder="Your password"
                          className="flex-1 text-sm text-[#696665] font-albert bg-transparent outline-none"
                        />
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5271 9.2415C1.47534 9.08594 1.47534 8.91781 1.5271 8.76225C2.56735 5.6325 5.5201 3.375 9.0001 3.375C12.4786 3.375 15.4298 5.63025 16.4723 8.7585C16.5248 8.91375 16.5248 9.08175 16.4723 9.23775C15.4328 12.3675 12.4801 14.625 9.0001 14.625C5.5216 14.625 2.5696 12.3697 1.5271 9.2415Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#24272C] font-albert">Confirm password</label>
                      <div className="flex h-[54px] px-[18px] py-4 items-center gap-[10px] rounded-[14px] border border-[#EDEDED] bg-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input
                          type="password"
                          placeholder="Confirm password"
                          className="flex-1 text-sm text-[#696665] font-albert bg-transparent outline-none"
                        />
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.98567 6.16725C2.28401 6.99538 1.76153 7.9599 1.45117 9C2.42017 12.2535 5.43367 14.625 9.00067 14.625C9.74542 14.625 10.4654 14.5215 11.1479 14.3287M4.67167 4.671C5.95616 3.8234 7.46173 3.37266 9.00067 3.375C12.5677 3.375 15.5804 5.7465 16.5494 8.9985C16.0184 10.7755 14.8785 12.3087 13.3297 13.329M4.67167 4.671L2.25067 2.25M4.67167 4.671L7.40917 7.4085M13.3297 13.329L15.7507 15.75M13.3297 13.329L10.5922 10.5915C10.8011 10.3826 10.9669 10.1345 11.08 9.86149C11.193 9.58848 11.2512 9.29587 11.2512 9.00037C11.2512 8.70488 11.193 8.41227 11.08 8.13926C10.9669 7.86626 10.8011 7.6182 10.5922 7.40925C10.3832 7.2003 10.1352 7.03455 9.86216 6.92147C9.58915 6.80839 9.29655 6.75018 9.00105 6.75018C8.70555 6.75018 8.41294 6.80839 8.13994 6.92147C7.86693 7.03455 7.61887 7.2003 7.40992 7.40925M10.5914 10.5908L7.41067 7.41" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className="flex flex-col items-center gap-[18px]">
                    {/* Sign Up Button */}
                    <button className="flex h-[50px] justify-center items-center gap-[10px] w-full rounded-[14px] bg-[#E82121] text-white text-base font-medium">
                      Sign Up
                    </button>

                    {/* Login Link */}
                    <div className="text-sm font-albert leading-[19.6px]">
                      <span className="text-[#24272C]">Don't you have an account? </span>
                      <span className="text-[#E82121] cursor-pointer">Register</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex w-full items-center gap-6">
                    <div className="flex-1 h-[1px] bg-[#EFEFEF]"></div>
                    <span className="text-xs text-[#696665] font-albert">or login with</span>
                    <div className="flex-1 h-[1px] bg-[#EFEFEF]"></div>
                  </div>

                  {/* Social Login */}
                  <div className="flex w-full items-start gap-[10px]">
                    <button className="flex flex-1 px-[18px] py-4 justify-center items-center gap-[10px] rounded-full border border-[#EDEDED] bg-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2866_33317)">
                          <path d="M4.43242 12.0875L3.73625 14.6864L1.19176 14.7402C0.431328 13.3298 0 11.7161 0 10.0013C0 8.34301 0.403281 6.77926 1.11812 5.40234H1.11867L3.38398 5.81766L4.37633 8.06938C4.16863 8.67488 4.05543 9.32488 4.05543 10.0013C4.05551 10.7353 4.18848 11.4386 4.43242 12.0875Z" fill="#FBBB00"/>
                          <path d="M19.8261 8.13281C19.941 8.73773 20.0009 9.36246 20.0009 10.0009C20.0009 10.7169 19.9256 11.4152 19.7822 12.0889C19.2954 14.3812 18.0234 16.3828 16.2613 17.7993L16.2608 17.7987L13.4075 17.6532L13.0037 15.1323C14.1729 14.4466 15.0866 13.3735 15.568 12.0889H10.2207V8.13281H19.8261Z" fill="#518EF8"/>
                          <path d="M16.2595 17.7975L16.2601 17.798C14.5464 19.1755 12.3694 19.9996 9.99965 19.9996C6.19141 19.9996 2.88043 17.8711 1.19141 14.7387L4.43207 12.0859C5.27656 14.3398 7.45074 15.9442 9.99965 15.9442C11.0952 15.9442 12.1216 15.648 13.0024 15.131L16.2595 17.7975Z" fill="#28B446"/>
                          <path d="M16.382 2.30219L13.1425 4.95437C12.2309 4.38461 11.1534 4.05547 9.99906 4.05547C7.39246 4.05547 5.17762 5.73348 4.37543 8.06812L1.11773 5.40109H1.11719C2.78148 2.1923 6.13422 0 9.99906 0C12.4254 0 14.6502 0.864297 16.382 2.30219Z" fill="#F14336"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2866_33317">
                            <rect width="20" height="20" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-sm text-[#696665] font-albert font-medium">Google</span>
                    </button>
                    <button className="flex flex-1 px-[18px] py-4 justify-center items-center gap-[10px] rounded-full border border-[#EDEDED] bg-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2866_33325)">
                          <path d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z" fill="#1877F2"/>
                          <path d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2866_33325">
                            <rect width="20" height="20" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-sm text-[#696665] font-albert font-medium">Facebook</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Form and saved cards */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#E6E6E6] rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-medium text-[#24272C] mb-4">Add a payment method</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#24272C] mb-2">Cardholder name</label>
                    <input
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#E82121] outline-none"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#24272C] mb-2">Card number</label>
                    <input
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#E82121] outline-none"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#24272C] mb-2">Expiration</label>
                      <input
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}
                        className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#E82121] outline-none"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#24272C] mb-2">CVV</label>
                      <input
                        className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#E82121] outline-none"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={addCard}
                      className="inline-flex items-center justify-center h-[48px] px-5 bg-[#E82121] text-white rounded-md hover:bg-[#d11e1e] transition"
                    >
                      Save card
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white border border-[#E6E6E6] rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-[#24272C] mb-4">Saved payment methods</h3>
                <div className="space-y-3">
                  {cards.map((c) => (
                    <div key={c.id} className="flex items-center justify-between p-3 border border-[#F1F1F1] rounded-md">
                      <div>
                        <div className="text-sm font-medium">{c.brand} •••• {c.last4}</div>
                        <div className="text-xs text-[#6B6B6B]">Expires {c.exp}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-[#E82121]">Remove</button>
                        <button className="text-sm text-[#6B6B6B]">Set as default</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: billing summary */}
            <aside className="">
              <div className="bg-white border border-[#E6E6E6] rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-[#24272C] mb-2">Billing</h3>
                <p className="text-sm text-[#6B6B6B]">Default billing method and recent invoices.</p>

                <div className="mt-4">
                  <div className="text-sm text-[#24272C] font-medium">Default: {cards[0]?.brand} •••• {cards[0]?.last4}</div>
                  <div className="text-xs text-[#6B6B6B] mt-2">No recent invoices</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
