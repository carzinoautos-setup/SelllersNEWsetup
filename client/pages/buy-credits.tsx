import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function BuyCredits() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>("10");
  const [customAmount, setCustomAmount] = useState<number | "">("");

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-medium text-[#24272C] font-albert">Buy Credits</h1>
            <p className="text-sm text-[#696665] mt-2">Purchase credits to feature your listings and boost visibility.</p>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-sm">
              <h2 className="text-lg font-medium text-[#24272C] mb-4">Choose a package</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <PackageCard
                  title="Starter"
                  credits={10}
                  price="$9"
                  selected={selectedPackage === "10"}
                  onSelect={() => setSelectedPackage("10")}
                />

                <PackageCard
                  title="Growth"
                  credits={25}
                  price="$19"
                  selected={selectedPackage === "25"}
                  onSelect={() => setSelectedPackage("25")}
                />

                <PackageCard
                  title="Pro"
                  credits={50}
                  price="$35"
                  selected={selectedPackage === "50"}
                  onSelect={() => setSelectedPackage("50")}
                />
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Or enter custom amount</h3>
                <div className="flex gap-3 items-center">
                  <input
                    type="number"
                    min={1}
                    value={customAmount as any}
                    onChange={(e) => setCustomAmount(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-40 px-3 py-2 rounded-lg border border-[#EDEDED] text-sm"
                    placeholder="Credits"
                  />
                  <span className="text-sm text-[#696665]">credits</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  className="px-4 py-2 rounded-lg bg-[#E82121] text-white font-medium"
                  onClick={() => alert(`Purchasing ${customAmount || selectedPackage} credits (demo)`)}
                >
                  Purchase
                </button>

                <button
                  className="px-4 py-2 rounded-lg border border-[#EDEDED] bg-white text-sm"
                  onClick={() => { setSelectedPackage(null); setCustomAmount(""); }}
                >
                  Reset
                </button>
              </div>
            </div>

            <aside className="bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-sm">
              <h3 className="text-base font-medium mb-3">How credits work</h3>
              <p className="text-sm text-[#696665] leading-[1.45]">Credits can be applied to your vehicle listings to feature them in search results and increase visibility. Credits do not expire.</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium">Need help?</h4>
                <p className="text-sm text-[#696665]">Visit our Help Center or contact support for assistance with purchases.</p>
              </div>
            </aside>
          </section>

          {/* Featured Credits Purchase Section */}
          <section className="mt-12">
            <div className="mb-12">
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-bold text-black font-albert leading-tight">
                  Buy Featured ad credits
                </h2>
                <div className="w-24 md:w-32 h-0.5 bg-[#E82121] mt-2"></div>
              </div>
              <p className="mt-4 text-base md:text-lg text-[#24272C] leading-relaxed max-w-5xl font-albert">
                Promoting your car with featured ad credits on Carzino gives you maximum visibility and faster results. Featured listings appear at the top of search results, attract more views, and stand out with highlighted formatting that draws buyer attention. With targeted exposure to serious car shoppers and optimized display across desktop and mobile, your vehicle gets noticed quicker, builds buyer trust, and sells faster—all at a cost-effective rate that delivers strong value for every credit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* 1-Pack */}
              <div className="flex flex-col bg-white rounded-2xl border border-[#EDEDED] p-6 lg:p-8 h-full shadow-sm">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/51bc3967e0cfacb3dec69f592eca5be9b62c263f?width=695"
                  alt="Featured Credit"
                  className="w-full h-24 lg:h-28 object-contain mb-5"
                />

                <div className="mb-5">
                  <h3 className="text-2xl lg:text-3xl font-medium text-[#E82121] font-albert mb-2">
                    1-Pack
                  </h3>
                  <p className="text-xs text-[#696665] font-albert leading-relaxed">
                    Feature your car on Carzino to get top placement, more views, and faster sales.
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl lg:text-3xl font-medium text-[#24272C] font-albert">$</span>
                  <span className="text-[42px] lg:text-[70px] font-bold text-[#24272C] font-albert leading-none">5</span>
                </div>

                <div className="flex-1 space-y-4 mb-6">
                  <FeatureItem text="1 Featured Ad listing" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Runs for 45 days" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Get more leads from your listings" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="More Views, Targeted Exposure" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Sell your car fast" />
                  <div className="h-px bg-[#EDEDED]"></div>
                </div>

                <button className="w-full bg-[#24272C] text-white py-3 px-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* 5-Pack */}
              <div className="flex flex-col bg-white rounded-2xl border border-[#EDEDED] p-6 lg:p-8 h-full shadow-sm">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/82996bba11e0d8ddd6053ebbfa5710e3e259db53?width=695"
                  alt="Featured Credit"
                  className="w-full h-24 lg:h-28 object-contain mb-5"
                />

                <div className="mb-5">
                  <h3 className="text-2xl lg:text-3xl font-medium text-[#E82121] font-albert mb-2">
                    5-Pack
                  </h3>
                  <p className="text-xs text-[#696665] font-albert leading-relaxed">
                    Feature your car on Carzino to get top placement, more views, and faster sales.
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl lg:text-3xl font-medium text-[#24272C] font-albert">$</span>
                  <span className="text-[42px] lg:text-[70px] font-bold text-[#24272C] font-albert leading-none">25</span>
                </div>

                <div className="flex-1 space-y-4 mb-6">
                  <FeatureItem text="5 Featured Ad listing" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Runs for 45 days" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Get more leads from your listings" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="More Views, Targeted Exposure" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Sell your car fast" />
                  <div className="h-px bg-[#EDEDED]"></div>
                </div>

                <button className="w-full bg-[#24272C] text-white py-3 px-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* 10-Pack */}
              <div className="flex flex-col bg-white rounded-2xl border border-[#EDEDED] p-6 lg:p-8 h-full shadow-sm">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f3af57c3a86baad09be458102b2d69988051b1e7?width=695"
                  alt="Featured Credit"
                  className="w-full h-24 lg:h-28 object-contain mb-5"
                />

                <div className="mb-5">
                  <h3 className="text-2xl lg:text-3xl font-medium text-[#E82121] font-albert mb-2">
                    10-Pack
                  </h3>
                  <p className="text-xs text-[#696665] font-albert leading-relaxed">
                    Feature your car on Carzino to get top placement, more views, and faster sales.
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl lg:text-3xl font-medium text-[#24272C] font-albert">$</span>
                  <span className="text-[42px] lg:text-[70px] font-bold text-[#24272C] font-albert leading-none">50</span>
                </div>

                <div className="flex-1 space-y-4 mb-6">
                  <FeatureItem text="10 Featured Ad listing" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Runs for 45 days" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Get more leads from your listings" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="More Views, Targeted Exposure" />
                  <div className="h-px bg-[#EDEDED]"></div>
                  <FeatureItem text="Sell your car fast" />
                  <div className="h-px bg-[#EDEDED]"></div>
                </div>

                <button className="w-full bg-[#24272C] text-white py-3 px-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="w-5 h-5 flex-shrink-0"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.875 10C1.875 5.5125 5.5125 1.875 10 1.875C14.4875 1.875 18.125 5.5125 18.125 10C18.125 14.4875 14.4875 18.125 10 18.125C5.5125 18.125 1.875 14.4875 1.875 10ZM13.0083 8.48833C13.0583 8.42171 13.0945 8.34576 13.1147 8.26496C13.135 8.18415 13.1388 8.10012 13.1261 8.0178C13.1134 7.93547 13.0844 7.85652 13.0407 7.78558C12.9971 7.71464 12.9396 7.65315 12.8719 7.60471C12.8041 7.55627 12.7273 7.52187 12.6461 7.50352C12.5648 7.48518 12.4807 7.48326 12.3987 7.49789C12.3167 7.51251 12.2385 7.54338 12.1686 7.58868C12.0987 7.63398 12.0385 7.69279 11.9917 7.76167L9.295 11.5367L7.94167 10.1833C7.82319 10.0729 7.66648 10.0128 7.50456 10.0157C7.34265 10.0185 7.18816 10.0841 7.07365 10.1986C6.95914 10.3132 6.89354 10.4676 6.89069 10.6296C6.88783 10.7915 6.94793 10.9482 7.05833 11.0667L8.93333 12.9417C8.99749 13.0058 9.07483 13.0552 9.15999 13.0864C9.24515 13.1176 9.33608 13.1299 9.42647 13.1224C9.51686 13.115 9.60455 13.088 9.68344 13.0432C9.76233 12.9985 9.83054 12.9371 9.88333 12.8633L13.0083 8.48833Z"
          fill="#E82121"
        />
      </svg>
      <span className="text-sm text-[#696665] font-albert">{text}</span>
    </div>
  );
}

function PackageCard({ title, credits, price, selected, onSelect }: { title: string; credits: number; price: string; selected: boolean; onSelect: () => void; }) {
  return (
    <div
      onClick={onSelect}
      className={`p-4 rounded-2xl cursor-pointer border ${selected ? "border-[#E82121] bg-red-50" : "border-[#EDEDED] bg-white"}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-[#696665]">{title}</div>
          <div className="text-2xl font-medium text-[#24272C]">{credits}</div>
          <div className="text-sm text-[#696665]">credits</div>
        </div>
        <div className="text-lg font-medium">{price}</div>
      </div>
    </div>
  );
}
