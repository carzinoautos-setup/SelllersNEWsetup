import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { DashboardLayout } from "../components/DashboardLayout";

interface PaymentMethod {
  id: string;
  brand: string;
  last4: string;
  exp: string;
  name: string;
}

interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed";
}

export default function BillingPage() {
  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [invoices] = useState<Invoice[]>([
    { id: "INV-1001", date: "2025-08-01", amount: 120, status: "Paid" },
    { id: "INV-1002", date: "2025-08-15", amount: 75, status: "Paid" },
    { id: "INV-1003", date: "2025-09-05", amount: 45, status: "Pending" },
  ]);

  const [form, setForm] = useState({
    name: "",
    card: "",
    exp: "",
    cvc: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.card || !form.name) return;
    const last4 = form.card.replace(/\s+/g, "").slice(-4);
    const brand = form.card.startsWith("4") ? "Visa" : form.card.startsWith("5") ? "Mastercard" : "Card";
    const id = `pm_${Date.now()}`;
    setMethods((m) => [...m, { id, brand, last4, exp: form.exp || "", name: form.name }]);
    setForm({ name: "", card: "", exp: "", cvc: "", address: "" });
  };

  const removeMethod = (id: string) => setMethods((m) => m.filter((x) => x.id !== id));

  const [showStripeModal, setShowStripeModal] = useState(false);

  // Open modal automatically when page loads
  useEffect(() => {
    setShowStripeModal(true);
  }, []);

  const Modal: React.FC<{ children: React.ReactNode; onClose?: () => void }> = ({ children, onClose }) => {
    if (typeof document === "undefined") return null;
    const handleOverlayMouseDown = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && onClose) onClose();
    };
    return createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
        onMouseDown={handleOverlayMouseDown}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>,
      document.body
    );
  };

  const handleStripePay = () => {
    // This is a placeholder for integrating Stripe Elements or redirect to Checkout.
    // For now it simulates a successful payment and closes the modal.
    setShowStripeModal(false);
    window.alert("Payment processed (simulation)");
  };

  // lock body scroll while modal is open and close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowStripeModal(false);
    };
    if (showStripeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showStripeModal]);

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-visible">
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-[28px] font-albert font-medium text-[#050B20] mb-6">Billing</h2>

              {/* Stripe Checkout Component */}
              <div className="w-full max-w-[1500px] mx-auto bg-[#FDFDFD] rounded-[20px] shadow-[0_0_100px_0_rgba(0,0,0,0.10)] p-8 mb-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Column - Order Summary */}
                  <div className="w-full lg:w-[428px] flex-shrink-0">
                    {/* Back Button */}
                    <div className="flex items-center gap-2 mb-6">
                      <svg className="w-3 h-3 text-[#E82121]" viewBox="0 0 12 13" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.56283 5.74826H11.2501C11.449 5.74826 11.6398 5.82728 11.7804 5.96793C11.9211 6.10858 12.0001 6.29935 12.0001 6.49826C12.0001 6.69717 11.9211 6.88794 11.7804 7.02859C11.6398 7.16924 11.449 7.24826 11.2501 7.24826H2.56283L6.00608 10.6915C6.14691 10.8322 6.22607 11.0232 6.22614 11.2222C6.22621 11.4213 6.14719 11.6123 6.00646 11.7531C5.86573 11.894 5.67482 11.9731 5.47572 11.9732C5.27663 11.9733 5.08566 11.8942 4.94483 11.7535L0.219834 7.02851C0.0792307 6.88786 0.000244141 6.69713 0.000244141 6.49826C0.000244141 6.29939 0.0792307 6.10866 0.219834 5.96801L4.94483 1.24301C5.08576 1.10228 5.27683 1.0233 5.47599 1.02344C5.67515 1.02358 5.8661 1.10283 6.00683 1.24376C6.14756 1.38469 6.22655 1.57575 6.22641 1.77492C6.22627 1.97408 6.14701 2.16503 6.00608 2.30576L2.56283 5.74826Z" fill="currentColor"/>
                      </svg>
                      <span className="text-[#E82121] font-albert text-sm font-medium">Back</span>
                    </div>

                    {/* Order Summary Title */}
                    <h3 className="text-[#30313D] font-inter text-base font-bold mb-5">Order Summary</h3>

                    {/* Product Item */}
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/384e5dac0ee88ede163b487c4cb19f549aa2765a?width=132"
                        alt="Featured Ad Credit"
                        className="w-[66px] h-[66px] rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-[#30313D] font-albert text-sm font-semibold mb-3">Featured Ad Credit</h4>
                        <p className="text-[#30313D] font-albert text-xs">1 Featured Credit</p>
                      </div>
                      <div className="text-[#30313D] font-albert text-sm text-right">$5</div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="border-t border-b border-[#8C8C8C] py-[18px] space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[#30313D] font-albert text-sm">Subtotal</span>
                        <span className="text-[#30313D] font-albert text-sm">$5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#30313D] font-albert text-sm">Tax (9.875%)</span>
                        <span className="text-[#8C8C8C] font-albert text-sm">$.96</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#30313D] font-albert text-sm">Shipping</span>
                        <span className="text-[#30313D] font-albert text-sm">Free</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#30313D] font-albert text-sm font-medium">Total</span>
                        <span className="text-[#30313D] font-albert text-sm font-medium">$5.96</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Payment Form */}
                  <div className="flex-1 bg-white rounded-lg shadow-[-4px_0_20px_0_rgba(0,0,0,0.05)] p-11 max-w-[778px]">
                    <div className="max-w-[405px] mx-auto space-y-[14px]">
                      {/* Contact Information */}
                      <div>
                        <h4 className="text-[#24272C] font-inter text-base font-medium mb-1">Contact information</h4>
                        <div className="flex items-center p-3 bg-[#F7F7F7] rounded-[7px] border border-[#E7EAEB]">
                          <span className="text-[#4D4D4D] font-inter text-sm font-medium mr-2">Email</span>
                          <span className="text-[#333] font-inter text-sm">Username@gmail.com</span>
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div className="space-y-[13px]">
                        <h4 className="text-[#333] font-inter text-base font-medium">Payment method</h4>

                        {/* Card Information */}
                        <div className="space-y-1">
                          <label className="text-[#666] font-inter text-sm font-medium">Card information</label>
                          <div className="border border-[#E7EAEB] rounded-[7px] bg-white">
                            {/* Card Number Field */}
                            <div className="flex items-center justify-between p-[9px_15px] border-b border-[#E7EAEB]">
                              <div className="flex items-center">
                                <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                                <span className="text-black/50 font-inter text-sm">Enter text</span>
                              </div>
                              <div className="flex items-center gap-[3px]">
                                <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                                  <path d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z" fill="#252525"/>
                                  <path d="M9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13Z" fill="#EB001B"/>
                                  <path d="M15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3C12.2386 3 10 5.23858 10 8C10 10.7614 12.2386 13 15 13Z" fill="#F79E1B"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M12 4C13.2144 4.91221 14 6.36455 14 8.00037C14 9.63618 13.2144 11.0885 12 12.0007C10.7856 11.0885 10 9.63618 10 8.00037C10 6.36455 10.7856 4.91221 12 4Z" fill="#FF5F00"/>
                                </svg>
                                <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                                  <path d="M21.75 0.25H2.25C1.14543 0.25 0.25 1.14543 0.25 2.25V13.75C0.25 14.8546 1.14543 15.75 2.25 15.75H21.75C22.8546 15.75 23.75 14.8546 23.75 13.75V2.25C23.75 1.14543 22.8546 0.25 21.75 0.25Z" fill="white" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"/>
                                  <path d="M2.78773 5.91444C2.26459 5.62751 1.66754 5.39674 1 5.23659L1.028 5.11188H3.76498C4.13596 5.12489 4.43699 5.23651 4.53495 5.63071L5.12977 8.46659L5.31198 9.32073L6.97797 5.11188H8.77679L6.10288 11.2775H4.30397L2.78773 5.91444ZM10.1 11.2841H8.39883L9.46285 5.11188H11.1639L10.1 11.2841ZM16.2668 5.26277L16.0354 6.59559L15.8816 6.53004C15.5737 6.40525 15.1674 6.28054 14.6144 6.29371C13.9427 6.29371 13.6415 6.56277 13.6345 6.82546C13.6345 7.11441 13.9989 7.30484 14.5939 7.58725C15.574 8.02719 16.0286 8.56557 16.0218 9.26819C16.0081 10.5486 14.846 11.3761 13.0611 11.3761C12.2979 11.3694 11.5628 11.2181 11.1638 11.0476L11.4019 9.66205L11.6259 9.76066C12.1789 9.99071 12.5428 10.089 13.222 10.089C13.7118 10.089 14.2369 9.89838 14.2436 9.48488C14.2436 9.21565 14.0199 9.01851 13.3617 8.71646C12.7178 8.42087 11.8568 7.92848 11.8708 7.04198C11.8781 5.84042 13.0611 5 14.741 5C15.399 5 15.9312 5.13789 16.2668 5.26277ZM18.5278 9.09749H19.9417C19.8718 8.78889 19.5496 7.31147 19.5496 7.31147L19.4307 6.77964C19.3467 7.00943 19.1999 7.38373 19.2069 7.37056C19.2069 7.37056 18.6678 8.7429 18.5278 9.09749ZM20.6276 5.11188L22 11.284H20.4249C20.4249 11.284 20.2708 10.5748 20.2219 10.3581H18.0378C17.9746 10.5222 17.6808 11.284 17.6808 11.284H15.8958L18.4226 5.62399C18.5977 5.22342 18.906 5.11188 19.3118 5.11188H20.6276Z" fill="#1434CB"/>
                                </svg>
                                <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                                  <path d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z" fill="#016FD0"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M13.764 13.3928V7.69141L23.9116 7.70051V9.27541L22.7387 10.5288L23.9116 11.7937V13.402H22.039L21.0438 12.3038L20.0557 13.4061L13.764 13.3928Z" fill="#FFFFFE"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.4418 12.7692V8.32031H18.2141V9.3452H15.6632V10.0409H18.1532V11.0487H15.6632V11.732H18.2141V12.7692H14.4418Z" fill="#016FD0"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M18.1953 12.7691L20.2826 10.5421L18.1952 8.32031H19.8108L21.0863 9.73035L22.3654 8.32031H23.9116V8.35532L21.8687 10.5421L23.9116 12.706V12.7691H22.3499L21.0518 11.3449L19.767 12.7691H18.1953Z" fill="#016FD0"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.2374 2.63281H16.6834L17.5426 4.58366V2.63281H20.5624L21.0832 4.09438L21.6057 2.63281H23.9116V8.3342H11.7251L14.2374 2.63281Z" fill="#FFFFFE"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.7005 3.25L12.7264 7.69517H14.0803L14.4528 6.80501H16.4707L16.8429 7.69517H18.2304L16.2647 3.25H14.7005ZM14.8701 5.80744L15.4621 4.39236L16.0536 5.80744H14.8701Z" fill="#016FD0"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M18.2119 7.69508V3.25L20.115 3.25654L21.0943 5.98927L22.0799 3.25H23.9115V7.69508L22.7329 7.70551V4.65217L21.6204 7.69508H20.5446L19.4089 4.64174V7.69508H18.2119Z" fill="#016FD0"/>
                                </svg>
                                <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                                  <path d="M21.9972 15.7499L21.9994 15.7499C22.9545 15.7581 23.7381 14.9773 23.75 14.0042L23.75 2.0063C23.7462 1.53569 23.5589 1.08617 23.2297 0.756802C22.9014 0.428269 22.4589 0.246149 21.9972 0.250071L2.00064 0.250062C1.54109 0.246149 1.09858 0.428269 0.770279 0.756802C0.441145 1.08617 0.253838 1.53569 0.250008 2.00426L0.25 13.9937C0.253838 14.4643 0.441145 14.9138 0.770279 15.2432C1.09858 15.5717 1.54109 15.7538 2.00277 15.7499H21.9972ZM21.9962 16.2499C21.9958 16.2499 21.9955 16.2499 21.9951 16.2499L21.9972 16.2499H21.9962Z" fill="white" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"/>
                                  <path d="M12.6124 16.0002H21.9973C22.524 16.0046 23.031 15.7995 23.4066 15.4301C23.7822 15.0607 23.9956 14.5573 24 14.0305V11.6719C20.4562 13.7062 16.6128 15.167 12.6124 16.0002Z" fill="#F27712"/>
                                  <path d="M23.1725 9.2979H22.32L21.3601 8.03169H21.269V9.2979H20.5738V6.15307H21.6C22.4028 6.15307 22.8663 6.48411 22.8663 7.07997C22.8663 7.56824 22.5766 7.88273 22.0552 7.98204L23.1725 9.2979ZM22.1463 7.10479C22.1463 6.79859 21.9145 6.64135 21.4842 6.64135H21.269V7.59307H21.4676C21.9145 7.59307 22.1463 7.42755 22.1463 7.10479ZM18.1407 6.15307H20.1104V6.68273H18.8359V7.38617H20.0607V7.92411H18.8359V8.77652H20.1104V9.30617H18.1407V6.15307ZM15.9063 9.38066L14.4001 6.14479H15.1614L16.1132 8.26342L17.0732 6.14479H17.818L16.2952 9.38066H15.9228H15.9063ZM9.60833 9.37238C8.54902 9.37238 7.72143 8.65238 7.72143 7.71721C7.72143 6.80686 8.56557 6.07031 9.62488 6.07031C9.92281 6.07031 10.1711 6.12824 10.4773 6.26066V6.98893C10.2454 6.76111 9.9334 6.63334 9.60833 6.63307C8.94626 6.63307 8.44143 7.11307 8.44143 7.71721C8.44143 8.35445 8.93798 8.80962 9.64143 8.80962C9.95591 8.80962 10.1959 8.71031 10.4773 8.46204V9.19031C10.1628 9.32273 9.89798 9.37238 9.60833 9.37238ZM7.50626 8.3379C7.50626 8.95031 7.00143 9.37238 6.27315 9.37238C5.7435 9.37238 5.36281 9.19031 5.04005 8.77652L5.49522 8.38755C5.65246 8.66893 5.91729 8.80962 6.24833 8.80962C6.56281 8.80962 6.78626 8.61928 6.78626 8.371C6.78626 8.23031 6.72005 8.12273 6.57936 8.03997C6.4251 7.96511 6.26446 7.90418 6.09936 7.8579C5.44557 7.651 5.22212 7.42755 5.22212 6.98893C5.22212 6.47583 5.70212 6.08686 6.33109 6.08686C6.72833 6.08686 7.08419 6.211 7.38212 6.44273L7.01798 6.85652C6.87366 6.6983 6.66938 6.60817 6.45522 6.60824C6.15729 6.60824 5.94212 6.75721 5.94212 6.95583C5.94212 7.12135 6.06626 7.21238 6.48005 7.35307C7.27453 7.60135 7.50626 7.83307 7.50626 8.34617V8.3379ZM4.08833 6.15307H4.7835V9.30617H4.08833V6.15307ZM1.85384 9.30617H0.827637V6.15307H1.85384C2.97936 6.15307 3.75729 6.79859 3.75729 7.72548C3.75729 8.19721 3.52557 8.64411 3.12005 8.94204C2.77246 9.19031 2.3835 9.30617 1.84557 9.30617H1.85384ZM2.66488 6.93928C2.43315 6.75721 2.16833 6.691 1.71315 6.691H1.52281V8.77652H1.71315C2.16005 8.77652 2.44143 8.69376 2.66488 8.52824C2.90488 8.32962 3.04557 8.03169 3.04557 7.72548C3.04557 7.41928 2.90488 7.12962 2.66488 6.93928Z" fill="black"/>
                                  <path d="M12.4138 6.07031C11.5035 6.07031 10.7587 6.79859 10.7587 7.70066C10.7587 8.66066 11.4704 9.38066 12.4138 9.38066C13.3407 9.38066 14.069 8.65238 14.069 7.72548C14.069 6.79859 13.349 6.07031 12.4138 6.07031Z" fill="#F27712"/>
                                </svg>
                              </div>
                            </div>
                            {/* Expiry and CVC */}
                            <div className="flex">
                              <div className="flex-1 flex items-center p-[9px_15px] border-r border-[#E7EAEB]">
                                <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                                <span className="text-black/50 font-inter text-sm">MM / YY</span>
                              </div>
                              <div className="flex-1 flex items-center justify-between p-[9px_15px]">
                                <div className="flex items-center">
                                  <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                                  <span className="text-black/50 font-inter text-sm">CVC</span>
                                </div>
                                <svg className="w-6 h-6" viewBox="0 0 23 17" fill="none">
                                  <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M14.337 1C13.6146 1.50713 13.025 2.18088 12.6182 2.9642C12.2114 3.74753 11.9993 4.61734 12 5.5C12 6.83 12.472 8.05 13.257 9H3C2.73478 9 2.48043 9.10536 2.29289 9.29289C2.10536 9.48043 2 9.73478 2 10V11C2 11.2652 2.10536 11.5196 2.29289 11.7071C2.48043 11.8946 2.73478 12 3 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11V10.4C20.7976 9.99172 21.484 9.39559 22 8.663V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H2C1.46957 17 0.960859 16.7893 0.585786 16.4142C0.210714 16.0391 0 15.5304 0 15V3C0 2.46957 0.210714 1.96086 0.585786 1.58579C0.960859 1.21071 1.46957 1 2 1H14.337ZM21.044 1.293C21.283 1.495 21.504 1.717 21.706 1.956C21.5406 1.68594 21.3138 1.45877 21.044 1.293Z" fill="#77787D"/>
                                  <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M12.6 3C12.1267 3.92493 11.9262 4.96542 12.022 6H0V3H12.6Z" fill="#77787D"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M17.5 11C16.0413 11 14.6424 10.4205 13.6109 9.38909C12.5795 8.35764 12 6.95869 12 5.5C12 4.04131 12.5795 2.64236 13.6109 1.61091C14.6424 0.579463 16.0413 0 17.5 0C18.9587 0 20.3576 0.579463 21.3891 1.61091C22.4205 2.64236 23 4.04131 23 5.5C23 6.95869 22.4205 8.35764 21.3891 9.38909C20.3576 10.4205 18.9587 11 17.5 11ZM15.316 3.221H14.695L13.179 3.991V4.777L14.381 4.149V7.779H15.324V3.22H15.316V3.221ZM17.123 3.85C17.571 3.85 17.885 4.101 17.885 4.463C17.885 4.856 17.515 5.131 16.981 5.131H16.746V5.799H17.029C17.594 5.799 17.979 6.081 17.979 6.49C17.979 6.883 17.602 7.15 17.068 7.15C16.675 7.15 16.282 7.024 15.874 6.78V7.566C16.314 7.755 16.754 7.857 17.186 7.857C18.215 7.857 18.922 7.331 18.922 6.569C18.922 6.034 18.592 5.602 18.042 5.429C18.514 5.272 18.82 4.856 18.82 4.384C18.82 3.646 18.168 3.143 17.225 3.143C16.7998 3.14762 16.38 3.23845 15.991 3.41V4.18C16.369 3.968 16.754 3.85 17.123 3.85ZM20.517 5.563C21.091 5.563 21.491 5.901 21.491 6.341C21.491 6.804 21.091 7.126 20.517 7.126C20.171 7.126 19.81 7.016 19.441 6.789V7.598C19.826 7.771 20.219 7.858 20.604 7.858C20.808 7.858 20.996 7.826 21.177 7.778C21.5971 7.09822 21.82 6.3151 21.821 5.516L21.806 5.186C21.5138 5.01277 21.1786 4.92543 20.839 4.934C20.6891 4.93346 20.5393 4.94415 20.391 4.966V3.944H21.523C21.4247 3.69245 21.3035 3.45044 21.161 3.221H19.574V5.696C19.8817 5.61331 20.1984 5.56864 20.517 5.563Z" fill="#77787D"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Cardholder Name */}
                        <div className="space-y-1">
                          <label className="text-[#666] font-inter text-sm font-medium">Cardholder name</label>
                          <div className="flex items-center p-[9px_15px] border border-[#E7EAEB] rounded-[7px] bg-white">
                            <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                            <span className="text-black/50 font-inter text-sm">Full name on card</span>
                          </div>
                        </div>

                        {/* Country/Region and Address */}
                        <div className="space-y-1">
                          <label className="text-[#666] font-inter text-sm font-medium">Country or region</label>
                          <div className="border border-black/10 rounded-[7px] bg-white">
                            {/* Country Dropdown */}
                            <div className="flex items-center justify-between p-[7px_15px] border-b border-black/10">
                              <span className="text-[#333] font-inter text-sm">USA</span>
                              <svg className="w-[14px] h-[14px] rotate-180" viewBox="0 0 14 14" fill="none">
                                <path d="M1.74547 4.30488C1.67757 4.37261 1.62369 4.45307 1.58693 4.54166C1.55017 4.63025 1.53125 4.72522 1.53125 4.82113C1.53125 4.91704 1.55017 5.01201 1.58693 5.10059C1.62369 5.18918 1.67757 5.26964 1.74547 5.33738L6.59297 10.1849C6.64694 10.239 6.71104 10.2819 6.78161 10.3111C6.85217 10.3404 6.92782 10.3555 7.00422 10.3555C7.08062 10.3555 7.15627 10.3404 7.22683 10.3111C7.2974 10.2819 7.3615 10.239 7.41547 10.1849L12.263 5.33738C12.5488 5.05154 12.5488 4.59071 12.263 4.30488C11.9771 4.01904 11.5163 4.01904 11.2305 4.30488L7.0013 8.52821L2.77214 4.29904C2.49214 4.01904 2.02547 4.01904 1.74547 4.30488Z" fill="#666666"/>
                              </svg>
                            </div>

                            {/* Address Fields */}
                            <div className="space-y-0">
                              <div className="flex items-center p-[9px_15px] border-b border-[#E7EAEB]">
                                <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                                <span className="text-black/50 font-inter text-sm">Address line 1</span>
                              </div>
                              <div className="flex items-center p-[9px_15px] border-b border-[#E7EAEB]">
                                <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                                <span className="text-black/50 font-inter text-sm">Address line 2</span>
                              </div>
                              <div className="flex items-center p-[9px_15px] border-b border-[#E7EAEB]">
                                <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                                <span className="text-black/50 font-inter text-sm">Suburb</span>
                              </div>
                              <div className="flex">
                                <div className="flex-1 flex items-center p-[9px_15px] border-r border-[#E7EAEB]">
                                  <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                                  <span className="text-black/50 font-inter text-sm">City</span>
                                </div>
                                <div className="flex-1 flex items-center p-[9px_15px] border-r border-[#E7EAEB]">
                                  <div className="w-px h-[17px] bg-black/80 mr-2"></div>
                                  <span className="text-black/50 font-inter text-sm">Postal code</span>
                                </div>
                              </div>

                              {/* State Dropdown */}
                              <div className="flex items-center justify-between p-[7px_15px]">
                                <span className="text-black/50 font-inter text-sm">State</span>
                                <svg className="w-[14px] h-[14px] rotate-180" viewBox="0 0 14 14" fill="none">
                                  <path d="M1.74547 4.30488C1.67757 4.37261 1.62369 4.45307 1.58693 4.54166C1.55017 4.63025 1.53125 4.72522 1.53125 4.82113C1.53125 4.91704 1.55017 5.01201 1.58693 5.10059C1.62369 5.18918 1.67757 5.26964 1.74547 5.33738L6.59297 10.1849C6.64694 10.239 6.71104 10.2819 6.78161 10.3111C6.85217 10.3404 6.92782 10.3555 7.00422 10.3555C7.08062 10.3555 7.15627 10.3404 7.22683 10.3111C7.2974 10.2819 7.3615 10.239 7.41547 10.1849L12.263 5.33738C12.5488 5.05154 12.5488 4.59071 12.263 4.30488C11.9771 4.01904 11.5163 4.01904 11.2305 4.30488L7.0013 8.52821L2.77214 4.29904C2.49214 4.01904 2.02547 4.01904 1.74547 4.30488Z" fill="#666666"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pay Button */}
                      <button onClick={() => setShowStripeModal(true)} className="w-full bg-[#E82121] text-white font-inter text-base font-semibold py-[7px] px-[15px] rounded-[7px] h-10 flex items-center justify-center">
                        Pay
                      </button>

                      {/* Footer */}
                      <div className="bg-white rounded-md shadow-[0_1px_1.5px_0_rgba(0,0,0,0.05)] p-4 space-y-3">
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-[#A3A3A3] font-albert text-xs">Powered by</span>
                          <svg className="w-12 h-[22px]" viewBox="0 0 48 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M47.9361 11.6236C47.9361 8.23119 46.307 5.55452 43.1928 5.55452C40.0655 5.55452 38.1731 8.23119 38.1731 11.5972C38.1731 15.5851 40.4059 17.5988 43.6131 17.5988C45.1768 17.5988 46.3593 17.2409 47.2524 16.7379V14.0876C46.3593 14.5379 45.3339 14.8165 44.0335 14.8165C42.7593 14.8165 41.6291 14.3663 41.4837 12.8028H47.9099C47.9099 12.6297 47.9361 11.9404 47.9361 11.6236ZM41.4444 10.3637C41.4444 8.86772 42.3521 8.24439 43.1797 8.24439C43.9797 8.24439 44.835 8.86625 44.835 10.3637H41.4444ZM33.0997 5.55452C31.8124 5.55452 30.9848 6.16319 30.5251 6.58705L30.3535 5.76572H27.4619V21.2171L30.7477 20.5131L30.7608 16.7643C31.2335 17.1089 31.9302 17.6003 33.0881 17.6003C35.4386 17.6003 37.5811 15.6907 37.5811 11.4901C37.5666 7.64745 35.3979 5.55452 33.0997 5.55452ZM32.3113 14.6845C31.5361 14.6845 31.075 14.4059 30.7608 14.0612L30.7477 9.14492C31.0895 8.76065 31.5622 8.49519 32.3113 8.49519C33.507 8.49519 34.3346 9.84745 34.3346 11.5825C34.3346 13.3587 33.5186 14.6845 32.3113 14.6845ZM26.2401 4.05705V1.36719L22.9411 2.06972V4.77279L26.2401 4.05705ZM22.9411 5.77892H26.2401V17.3729H22.9411V5.77892ZM19.4066 6.76012L19.1971 5.77892H16.3579V17.3744H19.6437V9.51599C20.419 8.49519 21.7324 8.67999 22.1397 8.82665V5.77892C21.7193 5.62052 20.1819 5.32865 19.4066 6.76012ZM12.8364 2.90425L9.62915 3.59359L9.61605 14.2064C9.61605 16.1673 11.075 17.612 13.0197 17.612C14.0975 17.612 14.8859 17.414 15.3193 17.1749V14.4851C14.899 14.6567 12.8233 15.2668 12.8233 13.3059V8.60225H15.3193V5.77892H12.8233L12.8364 2.90425ZM3.95351 9.14492C3.95351 8.62865 4.37387 8.42919 5.06915 8.42919C6.06842 8.42919 7.32951 8.73425 8.32878 9.27692V6.16319C7.29166 5.75087 6.18538 5.54421 5.0706 5.55452C2.40151 5.55452 0.628418 6.95812 0.628418 9.30479C0.628418 12.9612 5.62187 12.3789 5.62187 13.9541C5.62187 14.5643 5.09678 14.7637 4.36078 14.7637C3.26987 14.7637 1.87642 14.3135 0.772418 13.7033V16.8567C1.99424 17.3876 3.2306 17.612 4.36078 17.612C7.09387 17.612 8.97169 16.248 8.97169 13.8749C8.96005 9.92665 3.95351 10.6292 3.95351 9.14492Z" fill="#E91212"/>
                          </svg>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <span className="text-[#A3A3A3] font-albert text-xs">Legal</span>
                          <span className="text-[#A3A3A3] font-albert text-xs">Returns</span>
                          <span className="text-[#A3A3A3] font-albert text-xs">Contact</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E1E1E1] rounded-2xl p-6 mb-6">
                <h3 className="font-dm text-[16px] font-medium mb-4">Payment Methods</h3>

                <div className="space-y-4">
                  {methods.length === 0 ? (
                    <div className="text-[#6B7280]">No saved payment methods</div>
                  ) : (
                    methods.map((m) => (
                      <div key={m.id} className="flex items-center justify-between border rounded-lg p-3">
                        <div>
                          <div className="font-dm text-[15px] text-[#050B20] font-medium">{m.brand} •••• {m.last4}</div>
                          <div className="text-[13px] text-[#6B7280]">{m.name} • Exp {m.exp}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => removeMethod(m.id)} className="px-3 py-2 bg-[#F9FBFC] border border-[#E1E1E1] rounded-md text-[#050B20]">Remove</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <form onSubmit={handleAdd} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[13px] text-[#050B20] mb-2">Name on card</label>
                    <input name="name" value={form.name} onChange={handleChange} className="w-full border border-[#E1E1E1] rounded-lg p-3" />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[13px] text-[#050B20] mb-2">Card number</label>
                    <input name="card" value={form.card} onChange={handleChange} placeholder="4242 4242 4242 4242" className="w-full border border-[#E1E1E1] rounded-lg p-3" />
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#050B20] mb-2">Expiry</label>
                    <input name="exp" value={form.exp} onChange={handleChange} placeholder="MM/YY" className="w-full border border-[#E1E1E1] rounded-lg p-3" />
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#050B20] mb-2">CVC</label>
                    <input name="cvc" value={form.cvc} onChange={handleChange} placeholder="123" className="w-full border border-[#E1E1E1] rounded-lg p-3" />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[13px] text-[#050B20] mb-2">Billing address</label>
                    <textarea name="address" value={form.address} onChange={handleChange} className="w-full border border-[#E1E1E1] rounded-lg p-3 h-20" />
                  </div>

                  <div className="col-span-2 flex items-center gap-3">
                    <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl font-dm text-[15px] font-medium">Add payment method</button>
                    <div className="text-sm text-[#6B7280]">Your card will be securely stored.</div>
                  </div>
                </form>
              </div>

              <div className="bg-white border border-[#E1E1E1] rounded-2xl p-6">
                <h3 className="font-dm text-[16px] font-medium mb-4">Recent invoices</h3>
                <div className="space-y-3">
                  {invoices.map((inv) => (
                    <div key={inv.id} className="flex items-center justify-between border rounded-lg p-3">
                      <div>
                        <div className="font-dm text-[15px] text-[#050B20] font-medium">{inv.id}</div>
                        <div className="text-[13px] text-[#6B7280]">{inv.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-dm text-[15px] text-[#050B20] font-medium">${inv.amount}</div>
                        <div className={`text-[13px] ${inv.status === 'Paid' ? 'text-green-600' : inv.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>{inv.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[380px]">
              <div className="bg-white border border-[#E1E1E1] rounded-2xl p-[30px]">
                <h3 className="text-[#050B20] font-albert text-xl font-medium mb-[24px]">Billing summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#050B20] font-dm text-[15px]">Outstanding</span>
                    <span className="text-[#050B20] font-dm text-[15px] font-medium">$45</span>
                  </div>
                  <div className="h-px bg-[#E1E1E1]"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#050B20] font-dm text-[15px]">Balance</span>
                    <span className="text-[#050B20] font-dm text-[15px] font-medium">$0</span>
                  </div>
                </div>

                <button onClick={() => setShowStripeModal(true)} className="w-full bg-[#CF0D0D] text-white px-[26px] py-[14px] rounded-xl font-dm text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">Pay outstanding</button>
              </div>
            </div>
          </div>

          {showStripeModal && (<Modal onClose={() => setShowStripeModal(false)}>
              <div className="bg-white rounded-lg w-full max-w-4xl mx-4 lg:mx-0 shadow-lg p-6 relative">
                <button onClick={() => setShowStripeModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 8.586L15.95 2.636a1 1 0 111.414 1.414L11.414 10l5.95 5.95a1 1 0 01-1.414 1.414L10 11.414l-5.95 5.95a1 1 0 01-1.414-1.414L8.586 10 2.636 4.05A1 1 0 014.05 2.636L10 8.586z" clipRule="evenodd" /></svg>
                </button>

                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full lg:w-1/2 border-r lg:border-r p-4">
                    <h4 className="text-[#30313D] font-albert text-sm font-bold mb-4">Order Summary</h4>
                    <div className="flex items-start gap-4 mb-4">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/384e5dac0ee88ede163b487c4cb19f549aa2765a?width=132" alt="Featured Ad Credit" className="w-[66px] h-[66px] rounded-md object-cover" />
                      <div className="flex-1">
                        <div className="text-[#30313D] font-albert text-sm font-semibold">Featured Ad Credit</div>
                        <div className="text-[#30313D] font-albert text-xs">1 Featured Credit</div>
                      </div>
                      <div className="text-[#30313D] font-albert text-sm">$5</div>
                    </div>
                    <div className="border-t border-[#E7EAEB] pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>$5</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#8C8C8C]">
                        <span>Tax (9.875%)</span>
                        <span>$.96</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium">
                        <span>Total</span>
                        <span>$5.96</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 p-4">
                    <h4 className="text-[#24272C] font-inter text-base font-medium mb-3">Complete payment</h4>

                    <div className="space-y-3">
                      <div className="border border-[#E7EAEB] rounded-[7px] p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-px h-[17px] bg-black/80"></div>
                          <div className="text-black/50">Card number</div>
                        </div>
                        <input name="card" value={form.card} onChange={handleChange} placeholder="4242 4242 4242 4242" className="mt-3 w-full border-none outline-none" />

                        <div className="flex gap-2 mt-3">
                          <input name="exp" value={form.exp} onChange={handleChange} placeholder="MM/YY" className="flex-1 border border-[#E7EAEB] rounded-[6px] p-2" />
                          <input name="cvc" value={form.cvc} onChange={handleChange} placeholder="CVC" className="w-24 border border-[#E7EAEB] rounded-[6px] p-2" />
                        </div>

                        <input name="name" value={form.name} onChange={handleChange} placeholder="Full name on card" className="mt-3 w-full border border-[#E7EAEB] rounded-[6px] p-2" />

                        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Billing address" className="mt-3 w-full border border-[#E7EAEB] rounded-[6px] p-2" />
                      </div>

                      <div className="flex gap-3">
                        <button onClick={handleStripePay} className="flex-1 bg-[#E82121] text-white py-2 rounded-md">Pay now</button>
                        <button onClick={() => setShowStripeModal(false)} className="flex-1 border border-[#E7EAEB] py-2 rounded-md">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}

        </div>
      </div>
    </DashboardLayout>
  );
}
