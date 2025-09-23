import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function CheckoutPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-visible">
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full max-w-[1290px] mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-medium text-[#24272C] font-albert">Checkout</h1>
            <p className="text-sm text-[#696665] mt-2">This is the checkout workspace — you can design and test the flow here. The page is intentionally hidden from the sidebar.</p>
          </div>

          <div className="bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-sm">
            <div className="text-sm text-[#696665]">Checkout content placeholder. Add payment forms, order summary, and confirmation components here.</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
