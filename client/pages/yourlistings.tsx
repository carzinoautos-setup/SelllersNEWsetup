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


        </div>
      </div>
    </DashboardLayout>
  );
}
