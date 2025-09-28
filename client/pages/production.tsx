import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Link } from "react-router-dom";

export default function Production() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-[#24272C] mb-4">
              Production
            </h1>
            <p className="text-sm text-[#6B6B6B] mb-6">
              This is the Production page. You can use this space to store
              unused pages or content fragments. The content here follows the
              same layout and styles as other dashboard pages so it can be
              edited from the design screen.
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
                    to="/checkout"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /checkout
                  </Link>
                                <Link
                    to="/billing"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /billing
                  </Link>
                </div>
              </section>

              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">
                  login stuff
                </h2>
                <div className="text-sm text-[#1f2937]">
                  <Link to="/login-1" className="hover:underline block">
                    /login-1
                  </Link>
                </div>
              </section>

              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">
                  Design Elements
                </h2>
                <Link
                  to="/vindecoder"
                  className="text-sm text-[#1f2937] hover:underline"
                >
                  /vindecoder
                </Link>
                <div className="mt-2">
                  <Link
                    to="/edit-listing"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /edit-listing
                  </Link>
                </div>
              </section>

              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">
                  POP UP Messages
                </h2>
                <div className="text-sm text-[#1f2937]">
                  <Link
                    to="/success-uploaded"
                    className="hover:underline block"
                  >
                    /success-uploaded
                  </Link>
                  <Link to="/remove-listing" className="hover:underline block">
                    /remove-listing
                  </Link>
                  <div className="flex flex-col relative mt-5">
                    <Link to="/change-status" className="hover:underline block">
                      /change-status
                    </Link>
                    <Link to="/feature-mycar" className="hover:underline block">
                      /feature-mycar
                    </Link>
                    <Link to="/apply-credits" className="hover:underline block">
                      /apply-credits
                    </Link>
                  </div>
                </div>
                <div className="mt-2" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
