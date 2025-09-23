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
        </div>
      </div>
    </DashboardLayout>
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
