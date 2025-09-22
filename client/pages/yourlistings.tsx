import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function YourListingsPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-visible">
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full max-w-[1290px] mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#24272C]">Your Listings</h1>
            <p className="text-sm text-[#6B6B6B] mt-2">Manage and edit your vehicle listings here.</p>
          </div>


          {/* Product-style Listing Page */}
          <section className="w-full mt-8">
            <div className="bg-white border border-[#EDEDED] rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left - Image gallery */}
                <div className="w-full">
                  <div className="rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F54525cf827f1451c9d44f67d3be2e601?format=webp&width=1200"
                      alt="2017 BMW X1 xDrive 20d xline"
                      className="w-full h-[420px] md:h-[520px] object-cover"
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-3">
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F54525cf827f1451c9d44f67d3be2e601?format=webp&width=400" alt="thumb" className="w-full h-20 object-cover rounded-xl" />
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F54525cf827f1451c9d44f67d3be2e601?format=webp&width=400" alt="thumb" className="w-full h-20 object-cover rounded-xl" />
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F54525cf827f1451c9d44f67d3be2e601?format=webp&width=400" alt="thumb" className="w-full h-20 object-cover rounded-xl" />
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F54525cf827f1451c9d44f67d3be2e601?format=webp&width=400" alt="thumb" className="w-full h-20 object-cover rounded-xl" />
                  </div>
                </div>

                {/* Right - Product details */}
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#24272C] font-outfit">2017 BMV X1 xDrive 20d xline</h2>
                    <p className="text-sm text-[#696665] mt-2">Condition: New • Type: Sedan • Post Date: 12-12-25</p>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-3xl font-bold text-[#E82121]">$73,000</div>
                        <div className="text-sm text-[#696665] mt-1">Financing options available</div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button className="px-4 py-2 bg-[#E82121] text-white rounded-2xl font-medium">Promote</button>
                        <button className="px-4 py-2 border border-[#24272C] rounded-2xl font-medium">Edit</button>
                        <button className="px-4 py-2 border border-[#E82121] rounded-2xl font-medium">Featured</button>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-[#24272C]">Description</h4>
                      <p className="text-sm text-[#696665] mt-2 leading-relaxed">This 2017 BMW X1 xDrive 20d xline offers a premium driving experience, combining performance and comfort. Well maintained and in excellent condition, ready for a new owner.</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-xs text-[#696665]">Mileage</h5>
                        <div className="text-sm text-[#24272C]">62,000 km</div>
                      </div>
                      <div>
                        <h5 className="text-xs text-[#696665]">Transmission</h5>
                        <div className="text-sm text-[#24272C]">Automatic</div>
                      </div>
                      <div>
                        <h5 className="text-xs text-[#696665]">Engine</h5>
                        <div className="text-sm text-[#24272C]">2.0L Turbo Diesel</div>
                      </div>
                      <div>
                        <h5 className="text-xs text-[#696665]">Color</h5>
                        <div className="text-sm text-[#24272C]">Grey</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-[#24272C] mb-3">Seller Actions</h4>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-4 py-2 bg-[#F9FBFC] border border-[#E1E1E1] rounded-2xl">Message Buyer</button>
                      <button className="px-4 py-2 bg-[#FFF] border border-[#E1E1E1] rounded-2xl">View Stats</button>
                      <button className="px-4 py-2 bg-[#FFF] border border-[#E1E1E1] rounded-2xl">Duplicate Listing</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional content - similar listings */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-[#24272C] mb-4">Other Listings</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="bg-white border border-[#EDEDED] rounded-2xl overflow-hidden">
                      <div className="h-44 bg-gray-100 overflow-hidden">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F54525cf827f1451c9d44f67d3be2e601?format=webp&width=800" alt="other" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-[#24272C]">2017 BMV X1 xDrive 20d xline</h4>
                        <div className="text-sm text-[#696665] mt-1">$73,000 • New • Sedan</div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button className="w-9 h-9 border border-[#E1E1E1] bg-[#F9FBFC] rounded-2xl"></button>
                            <button className="w-9 h-9 border border-[#E1E1E1] bg-white rounded-2xl"></button>
                          </div>
                          <button className="px-3 py-1 border border-[#24272C] rounded-2xl text-sm">Promote</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Compact pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-3">
                <button className="w-11 h-11 border border-[#EDEDED] rounded-xl flex items-center justify-center">&lt;</button>
                <button className="w-11 h-11 border border-[#EDEDED] rounded-xl">1</button>
                <button className="w-11 h-11 bg-[#E82121] rounded-xl text-white">2</button>
                <button className="w-11 h-11 border border-[#EDEDED] rounded-xl">3</button>
                <button className="w-11 h-11 border border-[#EDEDED] rounded-xl flex items-center justify-center">&gt;</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
