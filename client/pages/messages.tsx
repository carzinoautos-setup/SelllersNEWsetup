import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function MessagesPage() {
  const messages = [
    {
      id: 1,
      from: "John Doe",
      subject: "Interested in your listing",
      preview: "Hi, is the 2017 BMW still available?",
    },
    {
      id: 2,
      from: "Jane Smith",
      subject: "Question about mileage",
      preview: "Can you confirm the mileage on the Toyota?",
    },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden box-border">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#24272C]">Messages</h1>
            <p className="text-sm text-[#6B6B6B] mt-2">
              View and respond to messages from buyers.
            </p>
            <button
              onClick={() => setShowSidebar(true)}
              className="md:hidden mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#F3F3F3] text-sm"
            >
              Open list
            </button>
          </div>

          {/* Message Portal Interface */}
          <div className="flex bg-white rounded-2xl border border-[#EDEDED] overflow-hidden overflow-x-hidden min-h-[500px] md:h-[700px] min-w-0 box-border">
            {/* Left Sidebar - User List */}
            <div
              className={`lg:w-[444px] w-full max-w-full md:flex md:flex-col flex flex-col md:border-r md:border-[#EDEDED] border-none bg-white md:static fixed md:top-auto top-0 left-0 h-full md:h-auto z-40 transform transition-transform min-w-0 box-border ${showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
              {/* Search */}
              <div className="p-4 md:p-[30px] pb-[10px]">
                <div className="flex items-center gap-3 w-full h-[54px] px-4 md:px-[18px] border border-[#EDEDED] rounded-xl bg-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7506 15.7506L11.8528 11.8528M11.8528 11.8528C12.9078 10.7979 13.5004 9.36711 13.5004 7.87521C13.5004 6.38331 12.9078 4.95252 11.8528 3.89759C10.7979 2.84265 9.36711 2.25 7.87521 2.25C6.38331 2.25 4.95252 2.84265 3.89759 3.89759C2.84265 4.95252 2.25 6.38331 2.25 7.87521C2.25 9.36711 2.84265 10.7979 3.89759 11.8528C4.95252 12.9078 6.38331 13.5004 7.87521 13.5004C9.36711 13.5004 10.7979 12.9078 11.8528 11.8528Z"
                      stroke="#B6B6B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 text-sm text-[#696665] font-albert bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* User List */}
              <div className="flex-1 px-4 md:px-[30px] pb-[10px] border-t border-[#EDEDED] overflow-y-auto">
                <div className="space-y-0">
                  {/* Leslie Alexander */}
                  <div className="flex items-start gap-5 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c041dc35be8bc315c45d97e5809f850ae3d3e137?width=120"
                      alt="Leslie Alexander"
                      className="hidden sm:block w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-[#24272C] font-albert">
                          Leslie Alexander
                        </h3>
                        <span className="text-xs text-[#B6B6B6] font-dm-sans">
                          August 13, 2023
                        </span>
                      </div>
                      <p className="text-sm text-[#696665] font-albert truncate">
                        Lorem ipsum dolor sit amet, consectetur...
                      </p>
                    </div>
                  </div>

                  {/* Arlene McCoy - Active */}
                  <div className="flex items-start gap-5 p-4 bg-[#F9FCFF] rounded-2xl cursor-pointer">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fde1001b4c04e3ac145ecdfa13d70215d8daa73b?width=120"
                      alt="Arlene McCoy"
                      className="hidden sm:block w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-[#24272C] font-albert">
                          Arlene McCoy
                        </h3>
                        <span className="text-xs text-[#B6B6B6] font-dm-sans">
                          August 13, 2023
                        </span>
                      </div>
                      <p className="text-sm text-[#696665] font-albert truncate">
                        Proin at massa suscipit sem iaculis dignissim...
                      </p>
                    </div>
                  </div>

                  {/* Kristin Watson */}
                  <div className="flex items-start gap-5 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f12eb2aeb8e6b90f247254903de54e5826193f01?width=120"
                      alt="Kristin Watson"
                      className="hidden sm:block w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-[#24272C] font-albert">
                          Kristin Watson
                        </h3>
                        <span className="text-xs text-[#B6B6B6] font-dm-sans">
                          August 13, 2023
                        </span>
                      </div>
                      <p className="text-sm text-[#696665] font-albert truncate">
                        Sed imperdiet tortor sed magna tempus, in...
                      </p>
                    </div>
                  </div>

                  {/* Cody Fisher */}
                  <div className="flex items-start gap-5 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1cd22edc30b21b3a800653867a9c9791ebe8d27b?width=120"
                      alt="Cody Fisher"
                      className="hidden sm:block w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-[#24272C] font-albert">
                          Cody Fisher
                        </h3>
                        <span className="text-xs text-[#B6B6B6] font-dm-sans">
                          August 13, 2023
                        </span>
                      </div>
                      <p className="text-sm text-[#696665] font-albert truncate">
                        Proin a augue ut leo elementum tincidunt et...
                      </p>
                    </div>
                  </div>

                  {/* Arlene McCoy (duplicate) */}
                  <div className="flex items-start gap-5 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/cdc8db175de79ce744da76369ab664cb9ad77b8c?width=120"
                      alt="Arlene McCoy"
                      className="hidden sm:block w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-[#24272C] font-albert">
                          Arlene McCoy
                        </h3>
                        <span className="text-xs text-[#B6B6B6] font-dm-sans">
                          August 13, 2023
                        </span>
                      </div>
                      <p className="text-sm text-[#696665] font-albert truncate">
                        Fusce tempor urna dictum ante porta pretium...
                      </p>
                    </div>
                  </div>

                  {/* Bessie Cooper */}
                  <div className="flex items-start gap-5 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/88524a91e17f572cfa76d84a10d99234f4c15b70?width=120"
                      alt="Bessie Cooper"
                      className="hidden sm:block w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-[#24272C] font-albert">
                          Bessie Cooper
                        </h3>
                        <span className="text-xs text-[#B6B6B6] font-dm-sans">
                          August 13, 2023
                        </span>
                      </div>
                      <p className="text-sm text-[#696665] font-albert truncate">
                        Mauris facilisis ipsum elementum nulla iaculis...
                      </p>
                    </div>
                  </div>

                  {/* Savannah Nguyen */}
                  <div className="flex items-start gap-5 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b878046b247eb0edd91adbacb82197e1cf7286d3?width=120"
                      alt="Savannah Nguyen"
                      className="hidden sm:block w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-[#24272C] font-albert">
                          Savannah Nguyen
                        </h3>
                        <span className="text-xs text-[#B6B6B6] font-dm-sans">
                          August 13, 2023
                        </span>
                      </div>
                      <p className="text-sm text-[#696665] font-albert truncate">
                        Lorem ipsum dolor sit amet, consectetur...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showSidebar && (
              <div
                className="fixed inset-0 bg-black/40 z-30 md:hidden"
                onClick={() => setShowSidebar(false)}
              />
            )}

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 box-border">
              {/* Chat Header */}
              <div className="flex items-center gap-5 h-[114px] px-4 md:px-[50px] py-[10px] border-b border-[#EDEDED]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fde1001b4c04e3ac145ecdfa13d70215d8daa73b?width=120"
                  alt="Arlene McCoy"
                  className="hidden sm:block w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-[#24272C] font-albert mb-1">
                    Arlene McCoy
                  </h2>
                  <div className="flex items-center gap-[6px]">
                    <div className="w-2 h-2 bg-[#7ED321] rounded-full"></div>
                    <span className="text-xs text-[#7ED321] font-albert">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 md:p-[50px] space-y-[30px] overflow-y-auto w-full box-border">
                {/* Outgoing Message 1 */}
                <div className="flex flex-col items-end gap-[6px] ml-0">
                  <div className="bg-[rgba(195,219,243,0.06)] rounded-2xl rounded-br-none p-[14px] max-w-[80%] md:max-w-[60%] lg:max-w-[50%] ml-auto break-words">
                    <p className="text-sm text-[#24272C] font-albert leading-relaxed">
                      Dear Mr Williamson,
                      <br />
                      I would like to send you the quotation for the Toyota
                      Fortuner
                      <br />
                      Srp:
                      <br />
                      Downpayment:
                      <br />
                      Monthly payment:
                      <br />
                      If you have more questions, don't hesitate to contact me
                      via this number: 09012345678.
                      <br />
                      I'm happy to assist!
                    </p>
                  </div>
                  <span className="text-xs text-[#B6B6B6] font-dm-sans">
                    2:55 PM - Aug 17, 2024
                  </span>
                </div>

                {/* Incoming Message */}
                <div className="flex flex-col gap-[6px]">
                  <div className="flex items-end gap-3">
                    <div className="w-[42px] h-[42px] rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="bg-[#F3F3F3] rounded-2xl rounded-bl-none p-[14px] max-w-[80%] md:max-w-[240px] break-words">
                      <p className="text-sm text-[#696665] font-albert">Yes</p>
                    </div>
                  </div>
                  <div className="lg:ml-[54px] ml-0">
                    <span className="text-xs text-[#B6B6B6] font-dm-sans">
                      2:55 PM - Aug 17, 2024
                    </span>
                  </div>
                </div>

                {/* Outgoing Message 2 */}
                <div className="flex flex-col items-end gap-[6px] ml-0">
                  <div className="bg-[rgba(195,219,243,0.06)] rounded-2xl rounded-br-none p-[14px] max-w-[80%] md:max-w-[60%] lg:max-w-[50%] ml-auto break-words">
                    <p className="text-sm text-[#24272C] font-albert leading-relaxed">
                      Dear Mr Williamson,
                      <br />
                      Thank you for inquiring Toyota Fortuner. My name is Adam,
                      Sales Consultant at Toyota Cubao. If you are still
                      interested in Toyota Fortuner, kindly answer "Yes" for the
                      quotation. For any further assistance, please do not
                      hesitate to contact me via 09012345678 or
                      dvg.ap.ngantt1@gmail.com.
                      <br />
                      Have a great day ahead!
                    </p>
                  </div>
                  <span className="text-xs text-[#B6B6B6] font-dm-sans">
                    2:55 PM - Aug 17, 2024
                  </span>
                </div>
              </div>

              {/* Message Input */}
              <div className="flex items-center gap-[10px] p-4 md:p-[30px] pt-0">
                <div className="flex-1 flex items-center h-[52px] px-3 md:px-[18px] py-3 md:py-[12px] border border-[#EDEDED] rounded-xl bg-white">
                  <input
                    type="text"
                    placeholder="Aa"
                    className="flex-1 text-sm text-[#696665] font-albert bg-transparent outline-none"
                  />
                  <button className="ml-2 bg-[#E82121] text-white px-3 md:px-[18px] py-2 md:py-[12px] rounded-[10px] text-base font-medium font-albert hover:bg-[#d41d1d] transition-colors">
                    Send
                  </button>
                </div>

                {/* Attachment Buttons */}
                <button className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] bg-[#F3F3F3] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.375 13.2393L10.682 20.9323C9.83811 21.7762 8.69351 22.2503 7.50003 22.2503C6.30655 22.2503 5.16195 21.7762 4.31803 20.9323C3.47411 20.0883 3 18.9437 3 17.7503C3 16.5568 3.47411 15.4122 4.31803 14.5683L15.258 3.62825C15.5367 3.34972 15.8675 3.1288 16.2315 2.97811C16.5956 2.82742 16.9857 2.74991 17.3797 2.75C17.7737 2.75009 18.1639 2.82779 18.5278 2.97865C18.8918 3.12951 19.2225 3.35059 19.501 3.62925C19.7796 3.90792 20.0005 4.23872 20.1512 4.60276C20.3019 4.9668 20.3794 5.35696 20.3793 5.75096C20.3792 6.14496 20.3015 6.53508 20.1506 6.89906C19.9998 7.26303 19.7787 7.59372 19.5 7.87225L8.55203 18.8203C8.26801 19.0925 7.88839 19.2413 7.49497 19.2363C7.10156 19.2313 6.72585 19.072 6.44883 18.7926C6.1718 18.5132 6.01564 18.1362 6.01399 17.7427C6.01234 17.3493 6.16535 16.9709 6.44003 16.6893L14.25 8.87925M8.56103 18.8103L8.55103 18.8203"
                      stroke="#B6B6B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] bg-[#F3F3F3] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 16.25L7.409 11.091C7.61793 10.8821 7.86597 10.7163 8.13896 10.6033C8.41194 10.4902 8.70452 10.432 9 10.432C9.29548 10.432 9.58806 10.4902 9.86104 10.6033C10.134 10.7163 10.3821 10.8821 10.591 11.091L15.75 16.25M14.25 14.75L15.659 13.341C15.8679 13.1321 16.116 12.9663 16.389 12.8533C16.6619 12.7402 16.9545 12.682 17.25 12.682C17.5455 12.682 17.8381 12.7402 18.111 12.8533C18.384 12.9663 18.6321 13.1321 18.841 13.341L21.75 16.25M3.75 20H20.25C20.6478 20 21.0294 19.842 21.3107 19.5607C21.592 19.2794 21.75 18.8978 21.75 18.5V6.5C21.75 6.10218 21.592 5.72064 21.3107 5.43934C21.0294 5.15804 20.6478 5 20.25 5H3.75C3.35218 5 2.97064 5.15804 2.68934 5.43934C2.40804 5.72064 2.25 6.10218 2.25 6.5V18.5C2.25 18.8978 2.40804 19.2794 2.68934 19.5607C2.97064 19.842 3.35218 20 3.75 20ZM14.25 8.75H14.258V8.758H14.25V8.75ZM14.625 8.75C14.625 8.84946 14.5855 8.94484 14.5152 9.01517C14.4448 9.08549 14.3495 9.125 14.25 9.125C14.1505 9.125 14.0552 9.08549 13.9848 9.01517C13.9145 8.94484 13.875 8.84946 13.875 8.75C13.875 8.65054 13.9145 8.55516 13.9848 8.48484C14.0552 8.41451 14.1505 8.375 14.25 8.375C14.3495 8.375 14.4448 8.41451 14.5152 8.48484C14.5855 8.55516 14.625 8.65054 14.625 8.75Z"
                      stroke="#B6B6B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
