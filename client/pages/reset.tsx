import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function ResetPage() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  // Password validation
  const hasNumber = /\d/.test(newPassword);
  const hasLowercase = /[a-z]/.test(newPassword);
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasMinLength = newPassword.length >= 8;

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="flex flex-col items-start gap-2 mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#24272C] font-albert">Reset</h1>
            <p className="text-sm text-[#696665]">Design canvas for the Reset page. Add components or content here.</p>
          </header>

          <main>
            {/* Change Password Form (using Enter your Details styling) */}
            <div className="flex flex-col items-start gap-5 w-full max-w-[1484px] mx-auto mt-8">
              <div className="-mt-[3px] w-full border border-[#E6E6E6] rounded-lg p-[30px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.225),0_1px_3px_1px_rgba(0,0,0,0.1125)]">
                <div className="text-[20px] font-semibold text-[#24272C] mb-3">
                  Change password
                </div>

                <div className="flex flex-col gap-[30px] w-full py-[20px]">

                  {/* Old password */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#24272C] font-albert">
                      Old password
                    </label>
                    <div className="relative">
                      <input
                        type={showOldPassword ? "text" : "password"}
                        placeholder="Old password"
                        className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-[14px] bg-white text-sm text-[#696665] font-albert outline-none focus:border-[#E82121] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                        className="absolute right-[18px] top-1/2 transform -translate-y-1/2"
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5271 9.2415C1.47534 9.08594 1.47534 8.91781 1.5271 8.76225C2.56735 5.6325 5.5201 3.375 9.0001 3.375C12.4786 3.375 15.4298 5.63025 16.4723 8.7585C16.5248 8.91375 16.5248 9.08175 16.4723 9.23775C15.4328 12.3675 12.4801 14.625 9.0001 14.625C5.5216 14.625 2.5696 12.3697 1.5271 9.2415Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* New password */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#24272C] font-albert">
                        New password
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="New password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-[14px] bg-white text-sm text-[#696665] font-albert outline-none focus:border-[#E82121] transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-[18px] top-1/2 transform -translate-y-1/2"
                        >
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5271 9.2415C1.47534 9.08594 1.47534 8.91781 1.5271 8.76225C2.56735 5.6325 5.5201 3.375 9.0001 3.375C12.4786 3.375 15.4298 5.63025 16.4723 8.7585C16.5248 8.91375 16.5248 9.08175 16.4723 9.23775C15.4328 12.3675 12.4801 14.625 9.0001 14.625C5.5216 14.625 2.5696 12.3697 1.5271 9.2415Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Password validation indicators */}
                    <div className="flex flex-col gap-[6px]">
                      <div className="flex items-center gap-[6px]">
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4.5" r="4" fill={hasNumber ? "#7ED321" : "#B6B6B6"}/>
                        </svg>
                        <span className={`text-xs font-albert ${hasNumber ? "text-[#7ED321]" : "text-[#B6B6B6]"}`}>
                          One number
                        </span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4.5" r="4" fill={hasLowercase ? "#7ED321" : "#B6B6B6"}/>
                        </svg>
                        <span className={`text-xs font-albert ${hasLowercase ? "text-[#7ED321]" : "text-[#B6B6B6]"}`}>
                          One lowercase character
                        </span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4.5" r="4" fill={hasUppercase ? "#7ED321" : "#B6B6B6"}/>
                        </svg>
                        <span className={`text-xs font-albert ${hasUppercase ? "text-[#7ED321]" : "text-[#B6B6B6]"}`}>
                          One uppercase character
                        </span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4.5" r="4" fill={hasMinLength ? "#7ED321" : "#B6B6B6"}/>
                        </svg>
                        <span className={`text-xs font-albert ${hasMinLength ? "text-[#7ED321]" : "text-[#B6B6B6]"}`}>
                          8 characters minimum
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Confirm password */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#24272C] font-albert">
                      Confirm password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-[14px] bg-white text-sm text-[#696665] font-albert outline-none focus:border-[#E82121] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-[18px] top-1/2 transform -translate-y-1/2"
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.98567 6.16725C2.28401 6.99538 1.76153 7.9599 1.45117 9C2.42017 12.2535 5.43367 14.625 9.00067 14.625C9.74542 14.625 10.4654 14.5215 11.1479 14.3287M4.67167 4.671C5.95616 3.8234 7.46173 3.37266 9.00067 3.375C12.5677 3.375 15.5804 5.7465 16.5494 8.9985C16.0184 10.7755 14.8785 12.3087 13.3297 13.329M4.67167 4.671L2.25067 2.25M4.67167 4.671L7.40917 7.4085M13.3297 13.329L15.7507 15.75M13.3297 13.329L10.5922 10.5915C10.8011 10.3826 10.9669 10.1345 11.08 9.86149C11.193 9.58848 11.2512 9.29587 11.2512 9.00037C11.2512 8.70488 11.193 8.41227 11.08 8.13926C10.9669 7.86626 10.8011 7.6182 10.5922 7.40925C10.3832 7.2003 10.1352 7.03455 9.86216 6.92147C9.58915 6.80839 9.29655 6.75018 9.00105 6.75018C8.70555 6.75018 8.41294 6.80839 8.13994 6.92147C7.86693 7.03455 7.61887 7.2003 7.40992 7.40925M10.5914 10.5908L7.41067 7.41" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="pt-[10px]">
                    <button
                      type="button"
                      className="w-[180px] h-[50px] px-[10px] py-[10px] bg-[#E82121] text-white rounded-[14px] text-base font-medium font-albert hover:bg-[#d11e1e] transition-colors"
                    >
                      Change passwords
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
}
