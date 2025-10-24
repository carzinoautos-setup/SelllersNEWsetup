import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import Link from "next/link";

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
                <div className="text-sm text-[#696665] mt-2">
                  <p>
                    We are planning to use stripe as the payment gateway, so we are not sure if these pages will be needed.
                  </p>
                  <p>Checkout is similar to woocommerce</p>
                  <p>Payments: Customer can add payment information</p>
                  <p>
                    <br />
                  </p>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/checkout"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /checkout
                  </Link>
                  <Link
                    href="/billing"
                    className="text-sm text-[#1f2937] hover:underline"
                  >
                    /billing
                  </Link>
                  <div className="flex flex-col relative mt-5">
                    <p className="text-sm font-medium text-[#24272C]">STRIPE SETUP</p>
                    <Link to="/stripe" className="text-sm text-[#1f2937] hover:underline">/stripe</Link>
                  </div>
                </div>
              </section>

              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">
                  login stuff
                </h2>
                <div className="text-sm text-[#1f2937]">
                <div className="flex flex-col relative mt-5">
                  <p>
                    The login page is designed but still needs a little bit of work. We'll need to figure out how we're going to set this up.
                  </p>
                </div>
                <Link to="/login-1" className="hover:underline block">
                  /login-1
                </Link>
              </div>
              </section>

              <section className="p-4 border border-[#EDEDED] rounded-lg">
                <h2 className="text-lg font-medium text-[#24272C]">
                Design Elements
              </h2>
              <div className="text-sm text-[#696665] mt-2">
                <p>
                  <strong>Setup Description:</strong>
                </p>
                <p>
                  The VIN decoder page is built and the layout is in place, but the field mappings and the VIN decoder API have not been set up yet. Currently, the page works through manual input. When a user enters vehicle details into the form, those details are combined into a summary box at the bottom of the page. From there, the system is designed to trigger a call to OpenAI to generate a product description. When the user accepts the generated description, it applies that description directly to the product.
                </p>
                <p>
                  <strong>Additional Notes:</strong>
                </p>
                <ul>
                  <li>
                    The OpenAI integration is not currently turned on, since we cannot expose our API key in this environment. It was working at one point during testing, but it is now disabled until a secure setup is ready.
                  </li>
                  <li>
                    We also have an extra working copy of this page without the VIN decoder integration installed, which can be used for testing or fallback.
                  </li>
                </ul>
                <p>
                  <br />
                </p>
              </div>
              <Link
                to="/vindecoder"
                className="text-sm text-[#1f2937] hover:underline"
              >
                /vindecoder
              </Link>
              <div className="flex flex-col relative mt-5">
                  <p>
                    <br />
                  </p>
                </div>
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
                  <div className="flex flex-col relative mt-5">
                    <p>
                      Messages are intended to display as overlays when a user clicks on certain items on a page. The overlay will cover the entire page with a solid color background, using black at roughly 20% opacity so the page content is dimmed but still visible. This helps draw attention to the message while keeping the context of the page.
                    </p>
                    <p>
                      <strong>Status:</strong>
                    </p>
                    <p>
                      This feature is still in the design process and not finalized yet. Behavior and styling may change as the design is refined.
                    </p>
                  </div>
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
