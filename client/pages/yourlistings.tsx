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

          <section className="w-full bg-white border border-[#E6E6E6] rounded-2xl p-6">
            <div className="text-sm text-[#242727] mb-4">Editable canvas</div>
            <div className="min-h-[360px] w-full rounded-lg border-dashed border-2 border-[#E6E6E6] bg-transparent flex items-center justify-center">
              <div className="text-muted text-sm text-[#8B8B8B]">Add listing cards or a table here to show user listings.</div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
