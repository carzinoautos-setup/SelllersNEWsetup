import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

export default function ResetPage() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { toast } = useToast();

  // Password validation
  const hasNumber = /\d/.test(newPassword);
  const hasLowercase = /[a-z]/.test(newPassword);
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasMinLength = newPassword.length >= 8;

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] py-8">
          <div className="mb-6">
            <div className="text-[24px] font-semibold text-[#24272C]">
              Change your password
            </div>
            <div className="text-[14px] text-[#6B6B6B] mt-2">
              Manage and edit your vehicle listings here.
            </div>
          </div>
          <main>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {/* Form column (spans 2 on desktop) */}
              <div className="lg:col-span-2">
                <div className="-mt-[3px] w-full border border-[#E6E6E6] rounded-lg p-10 bg-white shadow-md">
                  <div className="flex flex-col gap-[10px] w-full py-2">
                    {/* Old password */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#24272C] font-albert">
                        Old password
                      </label>
                      <div className="relative">
                        <input
                          type={showOldPassword ? "text" : "password"}
                          placeholder="Old password"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                          className="w-full h-[56px] px-5 border border-[#D1D1D1] rounded-[12px] bg-white text-sm text-[#333333] font-albert outline-none focus:ring-2 focus:ring-[#E82121] focus:border-transparent transition"
                        />
                        <button
                          type="button"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B]"
                          aria-label="Toggle old password visibility"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5271 9.2415C1.47534 9.08594 1.47534 8.91781 1.5271 8.76225C2.56735 5.6325 5.5201 3.375 9.0001 3.375C12.4786 3.375 15.4298 5.63025 16.4723 8.7585C16.5248 8.91375 16.5248 9.08175 16.4723 9.23775C15.4328 12.3675 12.4801 14.625 9.0001 14.625C5.5216 14.625 2.5696 12.3697 1.5271 9.2415Z"
                              stroke="#B6B6B6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z"
                              stroke="#B6B6B6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* New password */}
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-medium text-[#24272C] font-albert">
                        New password
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="New password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full h-[56px] px-5 border border-[#D1D1D1] rounded-[12px] bg-white text-sm text-[#333333] font-albert outline-none focus:ring-2 focus:ring-[#E82121] focus:border-transparent transition"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B]"
                          aria-label="Toggle new password visibility"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5271 9.2415C1.47534 9.08594 1.47534 8.91781 1.5271 8.76225C2.56735 5.6325 5.5201 3.375 9.0001 3.375C12.4786 3.375 15.4298 5.63025 16.4723 8.7585C16.5248 8.91375 16.5248 9.08175 16.4723 9.23775C15.4328 12.3675 12.4801 14.625 9.0001 14.625C5.5216 14.625 2.5696 12.3697 1.5271 9.2415Z"
                              stroke="#B6B6B6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z"
                              stroke="#B6B6B6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
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
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full h-[56px] px-5 border border-[#D1D1D1] rounded-[12px] bg-white text-sm text-[#333333] font-albert outline-none focus:ring-2 focus:ring-[#E82121] focus:border-transparent transition"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B]"
                          aria-label="Toggle confirm password visibility"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.98567 6.16725C2.28401 6.99538 1.76153 7.9599 1.45117 9C2.42017 12.2535 5.43367 14.625 9.00067 14.625C9.74542 14.625 10.4654 14.5215 11.1479 14.3287M4.67167 4.671C5.95616 3.8234 7.46173 3.37266 9.00067 3.375C12.5677 3.375 15.5804 5.7465 16.5494 8.9985C16.0184 10.7755 14.8785 12.3087 13.3297 13.329M4.67167 4.671L2.25067 2.25M4.67167 4.671L7.40917 7.4085M13.3297 13.329L15.7507 15.75M13.3297 13.329L10.5922 10.5915C10.8011 10.3826 10.9669 10.1345 11.08 9.86149C11.193 9.58848 11.2512 9.29587 11.2512 9.00037C11.2512 8.70488 11.193 8.41227 11.08 8.13926C10.9669 7.86626 10.8011 7.6182 10.5922 7.40925C10.3832 7.2003 10.1352 7.03455 9.86216 6.92147C9.58915 6.80839 9.29655 6.75018 9.00105 6.75018C8.70555 6.75018 8.41294 6.80839 8.13994 6.92147C7.86693 7.03455 7.61887 7.2003 7.40992 7.40925M10.5914 10.5908L7.41067 7.41"
                              stroke="#B6B6B6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      {error && (
                        <div className="text-sm text-red-600 mb-2">{error}</div>
                      )}
                      <button
                        type="button"
                        onClick={async () => {
                          // client-side validations
                          setError(null);
                          if (!oldPassword) {
                            setError('Please enter your old password.');
                            toast({ title: 'Missing current password', description: 'Please enter your current password.' });
                            return;
                          }
                          if (newPassword !== confirmPassword) {
                            setError('New password and confirmation do not match.');
                            toast({ title: 'Passwords do not match', description: 'Please ensure the new password and confirmation match.' });
                            return;
                          }
                          if (!(hasNumber && hasLowercase && hasUppercase && hasMinLength)) {
                            setError('Your new password does not meet the requirements.');
                            toast({ title: 'Weak password', description: 'Please ensure your password meets all requirements.' });
                            return;
                          }

                          setLoading(true);
                          try {
                            // TODO: replace with actual API call to change password
                            await new Promise((res) => setTimeout(res, 800));
                            toast({ title: 'Password changed', description: 'Your password has been reset, please log in again.' });
                            setTimeout(() => navigate('/logout'), 800);
                          } catch (err) {
                            console.error(err);
                            setError('An unexpected error occurred. Please try again.');
                            toast({ title: 'Failed to change password', description: 'An error occurred while changing your password. Please try again.' });
                          } finally {
                            setLoading(false);
                          }
                        }}
                        disabled={loading}
                        className={`w-[220px] h-[52px] px-[10px] py-[10px] rounded-[12px] text-base font-medium font-albert transition-colors ${loading ? 'bg-gray-300 text-gray-700' : 'bg-[#E82121] text-white hover:bg-[#d11e1e]'}`}
                      >
                        {loading ? 'Changing...' : 'Change password'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column: password requirements / tips */}
              <aside className="order-first lg:order-none block lg:col-span-1 mb-4 lg:mb-0">
                <div className="sticky top-28 p-6 bg-white border border-[#E6E6E6] rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#24272C]">
                    Password requirements
                  </h3>
                  <p className="text-sm text-[#6B6B6B] mt-2">
                    Use a strong password to protect your account. The password
                    must meet the following:
                  </p>

                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-3 h-3 rounded-full mt-1 ${hasNumber ? "bg-[#7ED321]" : "bg-[#B6B6B6]"}`}
                      />
                      <div>
                        <div
                          className={`text-sm font-albert ${hasNumber ? "text-[#7ED321]" : "text-[#6B6B6B]"}`}
                        >
                          One number
                        </div>
                        <div className="text-xs text-[#9A9A9A]">e.g. 0-9</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className={`w-3 h-3 rounded-full mt-1 ${hasLowercase ? "bg-[#7ED321]" : "bg-[#B6B6B6]"}`}
                      />
                      <div>
                        <div
                          className={`text-sm font-albert ${hasLowercase ? "text-[#7ED321]" : "text-[#6B6B6B]"}`}
                        >
                          One lowercase character
                        </div>
                        <div className="text-xs text-[#9A9A9A]">a-z</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className={`w-3 h-3 rounded-full mt-1 ${hasUppercase ? "bg-[#7ED321]" : "bg-[#B6B6B6]"}`}
                      />
                      <div>
                        <div
                          className={`text-sm font-albert ${hasUppercase ? "text-[#7ED321]" : "text-[#6B6B6B]"}`}
                        >
                          One uppercase character
                        </div>
                        <div className="text-xs text-[#9A9A9A]">A-Z</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className={`w-3 h-3 rounded-full mt-1 ${hasMinLength ? "bg-[#7ED321]" : "bg-[#B6B6B6]"}`}
                      />
                      <div>
                        <div
                          className={`text-sm font-albert ${hasMinLength ? "text-[#7ED321]" : "text-[#6B6B6B]"}`}
                        >
                          8 characters minimum
                        </div>
                        <div className="text-xs text-[#9A9A9A]">
                          Use 8 or more characters
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
}
