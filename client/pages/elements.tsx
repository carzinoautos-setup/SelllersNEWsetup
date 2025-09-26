import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Elements() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-[#24272C] mb-4">Elements</h1>
            <p className="text-sm text-[#6B6B6B] mb-6">
              This Elements page is fully editable from the design screen. Use it to
              store UI sections and fragments that are not yet implemented on the
              live site.
            </p>

            <div className="space-y-4">
              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">Pending Features</h2>
                <p className="text-sm text-[#696665] mt-2">
                  Store component drafts, banners, or page sections here until they are
                  ready to be integrated into production pages.
                </p>
              </section>

              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">UI Fragments</h2>
                <p className="text-sm text-[#696665] mt-2">
                  Small, reusable UI pieces (cards, badges, hero sections) can be
                  kept here for quick access and editing from the design screen.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
