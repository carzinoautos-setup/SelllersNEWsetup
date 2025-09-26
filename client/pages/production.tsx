import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Production() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-[#24272C] mb-4">Production</h1>
            <p className="text-sm text-[#6B6B6B] mb-6">
              This is the Production page. You can use this space to store unused pages
              or content fragments. The content here follows the same layout and
              styles as other dashboard pages so it can be edited from the design
              screen.
            </p>

            <div className="space-y-4">
              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">Drafts & Stored Pages</h2>
                <p className="text-sm text-[#696665] mt-2">
                  Add any unused pages or sections here for safekeeping. They will
                  remain accessible from the design screen for quick edits and
                  reuse.
                </p>
              </section>

              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">Notes</h2>
                <p className="text-sm text-[#696665] mt-2">
                  Use this area to document why a page was archived or any required
                  next steps before publishing.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
