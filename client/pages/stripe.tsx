import React, { useState } from "react";

export default function Stripe() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [email, setEmail] = useState("Username@gmail.com");
  const [country, setCountry] = useState("USA");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [suburb, setSuburb] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-[20px] shadow-[0_0_100px_0_rgba(0,0,0,0.10)] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[800px]">
          {/* Left Side - Order Summary */}
          <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/bdd594a8273ea652a65ec70473aae8323f59f0a2?width=361" 
                alt="Carzino Logo" 
                className="h-4 w-auto"
              />
            </div>

            {/* Back Button */}
            <div className="flex items-center gap-2 mb-8 cursor-pointer">
              <svg className="w-3 h-3 text-[#E82121]" viewBox="0 0 12 13" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.56259 6.20139H11.2498C11.4488 6.20139 11.6395 6.2804 11.7802 6.42106C11.9208 6.56171 11.9998 6.75247 11.9998 6.95139C11.9998 7.1503 11.9208 7.34106 11.7802 7.48172C11.6395 7.62237 11.4488 7.70139 11.2498 7.70139H2.56259L6.00584 11.1446C6.14667 11.2854 6.22583 11.4763 6.2259 11.6754C6.22597 11.8745 6.14695 12.0654 6.00621 12.2063C5.86548 12.3471 5.67457 12.4262 5.47548 12.4263C5.27639 12.4264 5.08542 12.3474 4.94459 12.2066L0.21959 7.48164C0.0789866 7.34099 0 7.15026 0 6.95139C0 6.75251 0.0789866 6.56178 0.21959 6.42114L4.94459 1.69614C5.08552 1.5554 5.27658 1.47642 5.47575 1.47656C5.67491 1.4767 5.86586 1.55596 6.00659 1.69689C6.14732 1.83781 6.2263 2.02888 6.22616 2.22804C6.22602 2.4272 6.14677 2.61815 6.00584 2.75889L2.56259 6.20139Z" fill="#E82121"/>
              </svg>
              <span className="text-[#E82121] text-sm font-medium font-['Albert_Sans']">Back</span>
            </div>

            {/* Order Summary Title */}
            <h1 className="text-base font-bold text-[#30313D] mb-6 font-['Albert_Sans']">Order Summary</h1>

            {/* Product Item */}
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/361e24b312e6c5bc16917e8ecd882327d15e8c2d?width=132" 
                alt="Featured Ad Credit" 
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#30313D] mb-3 font-['Albert_Sans']">Featured Ad Credit</h3>
                <p className="text-xs text-[#30313D] font-['Albert_Sans']">1 Featured Credit</p>
              </div>
              <span className="text-sm text-[#30313D] font-['Albert_Sans']">$5</span>
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-b border-[#8C8C8C] py-5 space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-[#30313D] font-['Albert_Sans']">Subtotal</span>
                <span className="text-sm text-[#30313D] font-['Albert_Sans']">$5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#30313D] font-['Albert_Sans']">Tax (9.875%)</span>
                <span className="text-sm text-[#8C8C8C] font-['Albert_Sans']">$.96</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#30313D] font-['Albert_Sans']">Shipping</span>
                <span className="text-sm text-[#30313D] font-['Albert_Sans']">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#30313D] font-['Albert_Sans']">Total</span>
                <span className="text-sm text-[#30313D] font-['Albert_Sans']">$5.96</span>
              </div>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <div className="w-full lg:w-1/2 bg-white border-l-0 lg:border-l lg:shadow-[-4px_0_20px_0_rgba(0,0,0,0.05)] p-6 lg:p-12">
            <div className="max-w-md mx-auto">
              {/* Contact Information */}
              <div className="mb-6">
                <h2 className="text-base font-medium text-[#24272C] mb-4 font-['Albert_Sans']">Contact information</h2>
                <div className="flex items-center p-3 bg-[#F7F7F7] border border-[#E7EAEB] rounded-md">
                  <span className="text-sm text-[#4D4D4D] mr-2 font-['Albert_Sans']">Email</span>
                  <span className="text-sm text-[#333] font-['Albert_Sans']">{email}</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h2 className="text-base font-medium text-[#333] mb-4 font-['Albert_Sans']">Payment method</h2>
                
                {/* Card Information */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#666] mb-1 font-['Albert_Sans']">Card information</label>
                  <div className="border border-[#E7EAEB] rounded-md overflow-hidden">
                    <div className="flex items-center p-3 bg-white border-b border-[#E7EAEB]">
                      <input
                        type="text"
                        placeholder="Enter text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="flex-1 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border-none outline-none font-['Albert_Sans']"
                      />
                      <div className="flex items-center gap-1 ml-2">
                        {/* Credit Card Icons */}
                        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                          <path d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z" fill="#252525"/>
                          <path d="M9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13Z" fill="#EB001B"/>
                          <path d="M15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3C12.2386 3 10 5.23858 10 8C10 10.7614 12.2386 13 15 13Z" fill="#F79E1B"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 4C13.2144 4.91221 14 6.36455 14 8.00037C14 9.63618 13.2144 11.0885 12 12.0007C10.7856 11.0885 10 9.63618 10 8.00037C10 6.36455 10.7856 4.91221 12 4V4Z" fill="#FF5F00"/>
                        </svg>
                        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                          <path d="M21.75 0.25H2.25C1.14543 0.25 0.25 1.14543 0.25 2.25V13.75C0.25 14.8546 1.14543 15.75 2.25 15.75H21.75C22.8546 15.75 23.75 14.8546 23.75 13.75V2.25C23.75 1.14543 22.8546 0.25 21.75 0.25Z" fill="white" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"/>
                          <path d="M2.78773 5.91444C2.26459 5.62751 1.66754 5.39674 1 5.23659L1.028 5.11188H3.76498C4.13596 5.12489 4.43699 5.23651 4.53495 5.63071L5.12977 8.46659L5.31198 9.32073L6.97797 5.11188H8.77679L6.10288 11.2775H4.30397L2.78773 5.91444ZM10.1 11.2841H8.39883L9.46285 5.11188H11.1639L10.1 11.2841ZM16.2668 5.26277L16.0354 6.59559L15.8816 6.53004C15.5737 6.40525 15.1674 6.28054 14.6144 6.29371C13.9427 6.29371 13.6415 6.56277 13.6345 6.82546C13.6345 7.11441 13.9989 7.30484 14.5939 7.58725C15.574 8.02719 16.0286 8.56557 16.0218 9.26819C16.0081 10.5486 14.846 11.3761 13.0611 11.3761C12.2979 11.3694 11.5628 11.2181 11.1638 11.0476L11.4019 9.66205L11.6259 9.76066C12.1789 9.99071 12.5428 10.089 13.222 10.089C13.7118 10.089 14.2369 9.89838 14.2436 9.48488C14.2436 9.21565 14.0199 9.01851 13.3617 8.71646C12.7178 8.42087 11.8568 7.92848 11.8708 7.04198C11.8781 5.84042 13.0611 5 14.741 5C15.399 5 15.9312 5.13789 16.2668 5.26277ZM18.5278 9.09749H19.9417C19.8718 8.78889 19.5496 7.31147 19.5496 7.31147L19.4307 6.77964C19.3467 7.00943 19.1999 7.38373 19.2069 7.37056C19.2069 7.37056 18.6678 8.7429 18.5278 9.09749ZM20.6276 5.11188L22 11.284H20.4249C20.4249 11.284 20.2708 10.5748 20.2219 10.3581H18.0378C17.9746 10.5222 17.6808 11.284 17.6808 11.284H15.8958L18.4226 5.62399C18.5977 5.22342 18.906 5.11188 19.3118 5.11188H20.6276Z" fill="#1434CB"/>
                        </svg>
                        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                          <path d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z" fill="#016FD0"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.7637 13.3928V7.69141L23.9112 7.70051V9.27541L22.7383 10.5288L23.9112 11.7937V13.402H22.0386L21.0434 12.3038L20.0553 13.4061L13.7637 13.3928Z" fill="#FFFFFE"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.4414 12.7692V8.32031H18.2137V9.3452H15.6628V10.0409H18.1529V11.0487H15.6628V11.732H18.2137V12.7692H14.4414Z" fill="#016FD0"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M18.1954 12.7691L20.2827 10.5421L18.1953 8.32031H19.811L21.0865 9.73035L22.3656 8.32031H23.9117V8.35532L21.8689 10.5421L23.9117 12.706V12.7691H22.35L21.0519 11.3449L19.7671 12.7691H18.1954Z" fill="#016FD0"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.2369 2.63281H16.6829L17.5421 4.58366V2.63281H20.5619L21.0827 4.09438L21.6052 2.63281H23.9111V8.3342H11.7246L14.2369 2.63281Z" fill="#FFFFFE"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.7006 3.25L12.7266 7.69517H14.0805L14.4529 6.80501H16.4708L16.843 7.69517H18.2306L16.2648 3.25H14.7006ZM14.8702 5.80744L15.4622 4.39236L16.0538 5.80744H14.8702Z" fill="#016FD0"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M18.2119 7.69508V3.25L20.115 3.25654L21.0943 5.98927L22.0799 3.25H23.9115V7.69508L22.7329 7.70551V4.65217L21.6204 7.69508H20.5446L19.4089 4.64174V7.69508H18.2119Z" fill="#016FD0"/>
                        </svg>
                        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                          <path d="M21.9972 15.7499L21.9994 15.7499C22.9545 15.7581 23.7381 14.9773 23.75 14.0042L23.75 2.0063C23.7462 1.53569 23.5589 1.08617 23.2297 0.756802C22.9014 0.428269 22.4589 0.246149 21.9972 0.250071L2.00064 0.250062C1.54109 0.246149 1.09858 0.428269 0.770279 0.756802C0.441145 1.08617 0.253838 1.53569 0.250008 2.00426L0.25 13.9937C0.253838 14.4643 0.441145 14.9138 0.770279 15.2432C1.09858 15.5717 1.54109 15.7538 2.00277 15.7499H21.9972ZM21.9962 16.2499C21.9958 16.2499 21.9955 16.2499 21.9951 16.2499L21.9972 16.2499H21.9962Z" fill="white" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"/>
                          <path d="M12.6123 16.0002H21.9971C22.5239 16.0046 23.0309 15.7995 23.4065 15.4301C23.7821 15.0607 23.9955 14.5573 23.9999 14.0305V11.6719C20.4561 13.7062 16.6127 15.167 12.6123 16.0002Z" fill="#F27712"/>
                          <path d="M12.414 6.07031C11.5036 6.07031 10.7588 6.79859 10.7588 7.70066C10.7588 8.66066 11.4705 9.38066 12.414 9.38066C13.3409 9.38066 14.0691 8.65238 14.0691 7.72548C14.0691 6.79859 13.3491 6.07031 12.414 6.07031Z" fill="#F27712"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="flex-1 p-3 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border-none border-r border-[#E7EAEB] outline-none font-['Albert_Sans']"
                      />
                      <div className="flex items-center flex-1 p-3 border-none outline-none">
                        <input
                          type="text"
                          placeholder="CVC"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          className="flex-1 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border-none outline-none font-['Albert_Sans']"
                        />
                        <svg className="w-6 h-6 ml-2" viewBox="0 0 23 17" fill="none">
                          <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M14.337 1C13.6146 1.50713 13.025 2.18088 12.6182 2.9642C12.2114 3.74753 11.9993 4.61734 12 5.5C12 6.83 12.472 8.05 13.257 9H3C2.73478 9 2.48043 9.10536 2.29289 9.29289C2.10536 9.48043 2 9.73478 2 10V11C2 11.2652 2.10536 11.5196 2.29289 11.7071C2.48043 11.8946 2.73478 12 3 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11V10.4C20.7976 9.99172 21.484 9.39559 22 8.663V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H2C1.46957 17 0.960859 16.7893 0.585786 16.4142C0.210714 16.0391 0 15.5304 0 15V3C0 2.46957 0.210714 1.96086 0.585786 1.58579C0.960859 1.21071 1.46957 1 2 1H14.337ZM21.044 1.293C21.283 1.495 21.504 1.717 21.706 1.956C21.5406 1.68594 21.3138 1.45877 21.044 1.293Z" fill="#77787D"/>
                          <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M12.6 3C12.1267 3.92493 11.9262 4.96542 12.022 6H0V3H12.6Z" fill="#77787D"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M17.5 11C16.0413 11 14.6424 10.4205 13.6109 9.38909C12.5795 8.35764 12 6.95869 12 5.5C12 4.04131 12.5795 2.64236 13.6109 1.61091C14.6424 0.579463 16.0413 0 17.5 0C18.9587 0 20.3576 0.579463 21.3891 1.61091C22.4205 2.64236 23 4.04131 23 5.5C23 6.95869 22.4205 8.35764 21.3891 9.38909C20.3576 10.4205 18.9587 11 17.5 11ZM15.316 3.221H14.695L13.179 3.991V4.777L14.381 4.149V7.779H15.324V3.22H15.316V3.221ZM17.123 3.85C17.571 3.85 17.885 4.101 17.885 4.463C17.885 4.856 17.515 5.131 16.981 5.131H16.746V5.799H17.029C17.594 5.799 17.979 6.081 17.979 6.49C17.979 6.883 17.602 7.15 17.068 7.15C16.675 7.15 16.282 7.024 15.874 6.78V7.566C16.314 7.755 16.754 7.857 17.186 7.857C18.215 7.857 18.922 7.331 18.922 6.569C18.922 6.034 18.592 5.602 18.042 5.429C18.514 5.272 18.82 4.856 18.82 4.384C18.82 3.646 18.168 3.143 17.225 3.143C16.7998 3.14762 16.38 3.23845 15.991 3.41V4.18C16.369 3.968 16.754 3.85 17.123 3.85V3.85ZM20.517 5.563C21.091 5.563 21.491 5.901 21.491 6.341C21.491 6.804 21.091 7.126 20.517 7.126C20.171 7.126 19.81 7.016 19.441 6.789V7.598C19.826 7.771 20.219 7.858 20.604 7.858C20.808 7.858 20.996 7.826 21.177 7.778C21.5971 7.09822 21.82 6.3151 21.821 5.516L21.806 5.186C21.5138 5.01277 21.1786 4.92543 20.839 4.934C20.6891 4.93346 20.5393 4.94415 20.391 4.966V3.944H21.523C21.4247 3.69245 21.3035 3.45044 21.161 3.221H19.574V5.696C19.8817 5.61331 20.1984 5.56864 20.517 5.563V5.563Z" fill="#77787D"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cardholder Name */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#666] mb-1 font-['Albert_Sans']">Cardholder name</label>
                  <input
                    type="text"
                    placeholder="Full name on card"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    className="w-full p-3 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border border-[#E7EAEB] rounded-md outline-none focus:border-[#E82121] font-['Albert_Sans']"
                  />
                </div>

                {/* Billing Address */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#666] mb-1 font-['Albert_Sans']">Country or region</label>
                  <div className="border border-[#E7EAEB] rounded-md overflow-hidden">
                    <div className="flex items-center justify-between p-3 bg-white border-b border-[rgba(0,0,0,0.1)]">
                      <span className="text-sm text-[#333] font-['Albert_Sans']">{country}</span>
                      <svg className="w-3.5 h-3.5 text-[#666] transform rotate-180" viewBox="0 0 14 14" fill="none">
                        <path d="M1.74547 4.30488C1.67757 4.37261 1.62369 4.45307 1.58693 4.54166C1.55017 4.63025 1.53125 4.72522 1.53125 4.82113C1.53125 4.91704 1.55017 5.01201 1.58693 5.10059C1.62369 5.18918 1.67757 5.26964 1.74547 5.33738L6.59297 10.1849C6.64694 10.239 6.71104 10.2819 6.78161 10.3111C6.85217 10.3404 6.92782 10.3555 7.00422 10.3555C7.08062 10.3555 7.15627 10.3404 7.22683 10.3111C7.2974 10.2819 7.3615 10.239 7.41547 10.1849L12.263 5.33738C12.5488 5.05154 12.5488 4.59071 12.263 4.30488C11.9771 4.01904 11.5163 4.01904 11.2305 4.30488L7.0013 8.52821L2.77214 4.29904C2.49214 4.01904 2.02547 4.01904 1.74547 4.30488Z" fill="#666666"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Address line 1"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      className="w-full p-3 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border-none border-b border-[#E7EAEB] outline-none font-['Albert_Sans']"
                    />
                    <input
                      type="text"
                      placeholder="Address line 2"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      className="w-full p-3 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border-none border-b border-[#E7EAEB] outline-none font-['Albert_Sans']"
                    />
                    <input
                      type="text"
                      placeholder="Suburb"
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      className="w-full p-3 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border-none border-b border-[#E7EAEB] outline-none font-['Albert_Sans']"
                    />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="flex-1 p-3 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border-none border-r border-[#E7EAEB] outline-none font-['Albert_Sans']"
                      />
                      <input
                        type="text"
                        placeholder="Postal code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="flex-1 p-3 text-sm text-[#000] placeholder-[rgba(0,0,0,0.5)] border-none outline-none font-['Albert_Sans']"
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border-[rgba(0,0,0,0.1)]">
                      <span className="text-sm text-[rgba(0,0,0,0.5)] font-['Albert_Sans']">State</span>
                      <svg className="w-3.5 h-3.5 text-[#666] transform rotate-180" viewBox="0 0 14 14" fill="none">
                        <path d="M1.74547 4.30488C1.67757 4.37261 1.62369 4.45307 1.58693 4.54166C1.55017 4.63025 1.53125 4.72522 1.53125 4.82113C1.53125 4.91704 1.55017 5.01201 1.58693 5.10059C1.62369 5.18918 1.67757 5.26964 1.74547 5.33738L6.59297 10.1849C6.64694 10.239 6.71104 10.2819 6.78161 10.3111C6.85217 10.3404 6.92782 10.3555 7.00422 10.3555C7.08062 10.3555 7.15627 10.3404 7.22683 10.3111C7.2974 10.2819 7.3615 10.239 7.41547 10.1849L12.263 5.33738C12.5488 5.05154 12.5488 4.59071 12.263 4.30488C11.9771 4.01904 11.5163 4.01904 11.2305 4.30488L7.0013 8.52821L2.77214 4.29904C2.49214 4.01904 2.02547 4.01904 1.74547 4.30488Z" fill="#666666"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pay Button */}
              <button className="w-full bg-[#E82121] hover:bg-[#d41d1d] text-white text-base font-semibold py-3 px-4 rounded-md transition-colors font-['Albert_Sans']">
                Pay
              </button>

              {/* Powered by Stripe */}
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className="text-xs text-[#A3A3A3] font-['Albert_Sans']">Powered by</span>
                  <svg className="w-12 h-6" viewBox="0 0 48 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M47.9356 11.6236C47.9356 8.23119 46.3065 5.55452 43.1923 5.55452C40.065 5.55452 38.1727 8.23119 38.1727 11.5972C38.1727 15.5851 40.4054 17.5988 43.6127 17.5988C45.1763 17.5988 46.3588 17.2409 47.2519 16.7379V14.0876C46.3588 14.5379 45.3334 14.8165 44.033 14.8165C42.7588 14.8165 41.6287 14.3663 41.4832 12.8028H47.9094C47.9094 12.6297 47.9356 11.9404 47.9356 11.6236ZM41.4439 10.3637C41.4439 8.86772 42.3516 8.24439 43.1792 8.24439C43.9792 8.24439 44.8345 8.86625 44.8345 10.3637H41.4439ZM33.0992 5.55452C31.8119 5.55452 30.9843 6.16319 30.5247 6.58705L30.353 5.76572H27.4614V21.2171L30.7472 20.5131L30.7603 16.7643C31.233 17.1089 31.9297 17.6003 33.0876 17.6003C35.4381 17.6003 37.5807 15.6907 37.5807 11.4901C37.5661 7.64745 35.3974 5.55452 33.0992 5.55452ZM32.3108 14.6845C31.5356 14.6845 31.0745 14.4059 30.7603 14.0612L30.7472 9.14492C31.089 8.76065 31.5618 8.49519 32.3108 8.49519C33.5065 8.49519 34.3341 9.84745 34.3341 11.5825C34.3341 13.3587 33.5181 14.6845 32.3108 14.6845ZM26.2396 4.05705V1.36719L22.9407 2.06972V4.77279L26.2396 4.05705ZM22.9407 5.77892H26.2396V17.3729H22.9407V5.77892ZM19.4061 6.76012L19.1967 5.77892H16.3574V17.3744H19.6432V9.51599C20.4185 8.49519 21.7319 8.67999 22.1392 8.82665V5.77892C21.7188 5.62052 20.1814 5.32865 19.4061 6.76012ZM12.8359 2.90425L9.62866 3.59359L9.61557 14.2064C9.61557 16.1673 11.0745 17.612 13.0192 17.612C14.097 17.612 14.8854 17.414 15.3188 17.1749V14.4851C14.8985 14.6567 12.8228 15.2668 12.8228 13.3059V8.60225H15.3188V5.77892H12.8228L12.8359 2.90425ZM3.95302 9.14492C3.95302 8.62865 4.37338 8.42919 5.06866 8.42919C6.06793 8.42919 7.32902 8.73425 8.32829 9.27692V6.16319C7.29117 5.75087 6.18489 5.54421 5.07011 5.55452C2.40102 5.55452 0.62793 6.95812 0.62793 9.30479C0.62793 12.9612 5.62138 12.3789 5.62138 13.9541C5.62138 14.5643 5.09629 14.7637 4.36029 14.7637C3.26938 14.7637 1.87593 14.3135 0.77193 13.7033V16.8567C1.99375 17.3876 3.23011 17.612 4.36029 17.612C7.09338 17.612 8.9712 16.248 8.9712 13.8749C8.95957 9.92665 3.95302 10.6292 3.95302 9.14492Z" fill="#E91212"/>
                  </svg>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-xs text-[#A3A3A3] font-['Albert_Sans'] cursor-pointer hover:text-[#666]">Legal</span>
                  <span className="text-xs text-[#A3A3A3] font-['Albert_Sans'] cursor-pointer hover:text-[#666]">Returns</span>
                  <span className="text-xs text-[#A3A3A3] font-['Albert_Sans'] cursor-pointer hover:text-[#666]">Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
