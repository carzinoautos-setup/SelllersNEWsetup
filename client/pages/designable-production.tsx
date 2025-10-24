import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import Link from "next/link";

export default function DesignableProduction() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-[#24272C] mb-4">
              Designable Production
            </h1>
            <p className="text-sm text-[#6B6B6B] mb-6">
              This is a copy of the Production page created so you can edit and
              design it from the design tab. It includes the same layout and
              elements as the original Production page used across the
              dashboard.
            </p>

            <div className="space-y-4">
              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">
                  Payment gateway pages
                </h2>
                <p className="text-sm text-[#696665] mt-2">
                  Add any unused pages or sections here for safekeeping. They
                  will remain accessible from the design screen for quick edits
                  and reuse.
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/checkout"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /checkout
                  </Link>
                  <Link
                    href="/payments"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /payments
                  </Link>
                  <Link
                    href="/billing"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /billing
                  </Link>
                </div>
              </section>

              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">
                  Design Elements
                </h2>
                <Link
                  href="/vindecoder"
                  className="text-sm text-[#1f2937] hover:underline"
                >
                  /vindecoder
                </Link>
                <div className="mt-2">
                  <Link
                    href="/edit-listing"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /edit-listing
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
