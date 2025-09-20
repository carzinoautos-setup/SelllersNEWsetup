import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { FloatingInput } from "@/components/ui/floating-input";
import { useState } from "react";

interface EditProfileFormProps {
  className?: string;
}

export function EditProfileForm({ className }: EditProfileFormProps) {
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasNumber: false,
    hasLowercase: false,
    hasUppercase: false,
    hasMinLength: false,
  });

  const handlePasswordChange = (password: string) => {
    setPasswordRequirements({
      hasNumber: /\d/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasMinLength: password.length >= 8,
    });
  };

  return (
    <div className={cn("w-full max-w-[1480px] mx-auto space-y-8", className)}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-black font-albert mb-2">
          Edit profile
        </h1>
        <div className="w-[121px] h-0.5 bg-[#E82121]"></div>
      </div>

      {/* Profile Photo Section */}
      <div className="border border-[#EDEDED] rounded-2xl p-4 lg:p-6 flex flex-row">
        <div className="mb-6 flex flex-row flex-wrap">
          <h2 className="text-base font-medium text-[#050B20] font-dm mb-6">
            Profile Photo
          </h2>
          
          <div className="flex flex-row flex-wrap gap-8 items-start justify-start">
            {/* Existing Photo */}
            <div className="relative w-[122px] h-[107px] flex-shrink-0">
              <div className="w-full h-full rounded-lg bg-[#C4C4C4] overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f126bef54aa0eaeef95ddcaab70a998ff8cf97c8?width=279"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
                  <TrashIcon className="w-[18px] h-[18px] text-[#050B20]" />
                </button>
                <button className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
                  <EditIcon className="w-[18px] h-[18px] text-[#050B20]" />
                </button>
              </div>
            </div>

            {/* Upload Area */}
            <div className="w-[122px] h-[107px] flex-shrink-0 border border-dashed border-[#E4E4E4] bg-[#E9F2FF] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#E9F2FF]/80 transition-colors">
              <UploadIcon className="w-[22px] h-[22px] text-[#050B20] mb-3" />
              <span className="text-[15px] font-medium text-[#050B20] font-dm">
                Upload
              </span>
            </div>

            {/* Account Info */}
            <div className="flex-1 w-full lg:w-auto space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Account Type */}
                <div className="space-y-2">
                  <Label className="text-[13px] text-[#818181] font-dm">
                    Select your Account type
                  </Label>
                  <div className="h-[56px] border border-[#E1E1E1] rounded-xl bg-white px-4 py-3 flex flex-col justify-center">
                    <span className="text-[15px] text-[#050B20] font-dm">
                      Private Seller
                    </span>
                  </div>
                </div>

                {/* Account Number */}
                <div className="space-y-2">
                  <Label className="text-[13px] text-[#818181] font-dm">
                    Account Number
                  </Label>
                  <div className="h-[56px] border border-[#E1E1E1] rounded-xl bg-white px-4 py-3 flex flex-col justify-center">
                    <span className="text-[15px] text-[#050B20] font-dm">
                      Account Number here
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full max-w-[598px] h-[1px] bg-[#E1E1E1] mt-8"></div>
          
          {/* File Info */}
          <p className="text-[15px] text-[#050B20] font-dm mt-4 leading-relaxed max-w-[577px]">
            Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
          </p>
        </div>
      </div>

      {/* Enter your Details Section */}
      <div className="space-y-5">
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium text-[#24272C] font-albert">
            Enter your Details
          </h2>
          <div className="w-[194px] h-0.5 bg-[#E82121] mt-1"></div>
        </div>

        <div className="border border-[#B2B2B2] rounded-2xl p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Seller Name */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Seller name or Dealer Name
              </Label>
              <Input 
                placeholder="Enter your full name"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                City
              </Label>
              <Input 
                placeholder="Enter your city"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* State */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                State
              </Label>
              <Input 
                placeholder="Enter your state"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Zip Code */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Zip code
              </Label>
              <Input 
                placeholder="Enter your zip code"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Email Alert Address */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Email Alert address
              </Label>
              <Input 
                placeholder="Enter your email address"
                type="email"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Account Holder Email */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Account holder email Address
              </Label>
              <Input 
                placeholder="Enter your email address"
                type="email"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* List Phone on Ads */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                List phone on ads
              </Label>
              <div className="relative">
                <select className="w-full h-12 border border-[#D9D9D9] rounded-xl px-4 text-[15px] font-dm bg-white appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#E82121] transition">
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#050B20]" />
              </div>
            </div>

            {/* Seller Phone */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Seller Phone
              </Label>
              <Input 
                placeholder="(206)"
                type="tel"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Address - Full Width */}
            <div className="space-y-2 lg:col-span-3">
              <Label className="text-[13px] text-[#818181] font-dm">
                Enter your full address here and then select it from the choices.
              </Label>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Input 
                  placeholder="Enter address"
                  className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
                />
                <Input 
                  placeholder="Auto populates from google maps"
                  className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
                  disabled
                />
                <Input 
                  placeholder="Auto populates from google maps"
                  className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dealership Information Section */}
      <div className="space-y-5">
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium text-[#24272C] font-albert">
            Dealership Information
          </h2>
          <div className="w-[250px] h-0.5 bg-[#E82121] mt-1"></div>
        </div>
        
        <div className="border border-[#B2B2B2] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vehicle Type */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Do you sell new or used vehicles?
              </Label>
              <Input 
                placeholder="Select new, used or both"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Email Lead Alerts User 1 */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Email lead alerts user 1
              </Label>
              <Input 
                placeholder="Enter an additional alert email address"
                type="email"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Dealerships CRM Provider */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Dealerships CRM provider
              </Label>
              <Input 
                placeholder="Enter your Crm provider"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Dealership Website */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Dealership website
              </Label>
              <Input 
                placeholder=""
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Email Lead Alerts User 2 */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Email lead alerts user 2
              </Label>
              <Input 
                placeholder="Enter an additional alert email address"
                type="email"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* CRM Account Number */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                CRM Account #:
              </Label>
              <Input 
                placeholder="Enter your Crm account #"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* XML or CSV Vehicle Feed URL */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                XML or CSV vehicle Feed url
              </Label>
              <Input 
                placeholder="Enter an additional alert email address"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Email Lead Alerts User 3 */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Email lead alerts user 3
              </Label>
              <Input 
                placeholder="Enter an additional alert email address"
                type="email"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Dealerships CRM Email */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Dealerships CRM email
              </Label>
              <Input 
                placeholder="Enter your Crm alert email address"
                type="email"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Website Provider Information */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm">
                Website provider information
              </Label>
              <Input 
                placeholder="Enter your inventory provider"
                className="h-12 border-[#E1E1E1] rounded-xl text-[15px] font-dm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Billing Information Section */}
      <div className="space-y-5">
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium text-[#24272C] font-albert">
            Billing Information
          </h2>
          <div className="w-[202px] h-0.5 bg-[#E82121] mt-1"></div>
        </div>
        
        <div className="border border-[#B2B2B2] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Billing Contact */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm font-bold">
                Billing contact
              </Label>
              <Input 
                placeholder="Enter your full name"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Street Address */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm font-bold">
                Street address
              </Label>
              <Input 
                placeholder="+77"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Zip Code */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm font-bold">
                Zip code
              </Label>
              <Input 
                placeholder="Enter your zip code"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Billing Phone */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm font-bold">
                Billing phone
              </Label>
              <Input 
                placeholder="+77"
                type="tel"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm font-bold">
                City
              </Label>
              <Input 
                placeholder="Enter your city"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm font-bold">
                Country
              </Label>
              <Input 
                value="USA"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* Billing Email Address */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm font-bold">
                Billing email address
              </Label>
              <Input 
                placeholder="+77"
                type="email"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>

            {/* State */}
            <div className="space-y-2">
              <Label className="text-[13px] text-[#818181] font-dm font-bold">
                State
              </Label>
              <Input 
                placeholder="Enter your state"
                className="h-12 border-[#B2B2B2] rounded-xl text-[15px] font-dm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="space-y-5">
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium text-[#24272C] font-albert">
            Change password
          </h2>
          <div className="w-[194px] h-0.5 bg-[#E82121] mt-1"></div>
        </div>
        
        <div className="border border-[#B2B2B2] rounded-2xl p-8">
          <div className="space-y-8">
            {/* Old Password */}
            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">
                Old password
              </Label>
              <div className="relative">
                <Input 
                  type="password"
                  placeholder="Old password"
                  className="h-12 border-[#B2B2B2] rounded-xl text-[14px] font-albert pr-12"
                />
                <EyeIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] text-[#B6B6B6]" />
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-3">
              <div className="space-y-2">
                <Label className="text-[14px] text-[#24272C] font-albert font-medium">
                  New password
                </Label>
                <div className="relative">
                  <Input 
                    type="password"
                    placeholder="New password"
                    className="h-12 border-[#B2B2B2] rounded-xl text-[14px] font-albert pr-12"
                    onChange={(e) => handlePasswordChange(e.target.value)}
                  />
                  <EyeIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] text-[#B6B6B6]" />
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${passwordRequirements.hasNumber ? 'bg-[#7ED321]' : 'bg-[#B6B6B6]'}`} />
                  <span className={`text-xs font-albert ${passwordRequirements.hasNumber ? 'text-[#7ED321]' : 'text-[#B6B6B6]'}`}>
                    One number
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${passwordRequirements.hasLowercase ? 'bg-[#7ED321]' : 'bg-[#B6B6B6]'}`} />
                  <span className={`text-xs font-albert ${passwordRequirements.hasLowercase ? 'text-[#7ED321]' : 'text-[#B6B6B6]'}`}>
                    One lowercase character
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${passwordRequirements.hasUppercase ? 'bg-[#7ED321]' : 'bg-[#B6B6B6]'}`} />
                  <span className={`text-xs font-albert ${passwordRequirements.hasUppercase ? 'text-[#7ED321]' : 'text-[#B6B6B6]'}`}>
                    One uppercase character
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${passwordRequirements.hasMinLength ? 'bg-[#7ED321]' : 'bg-[#B6B6B6]'}`} />
                  <span className={`text-xs font-albert ${passwordRequirements.hasMinLength ? 'text-[#7ED321]' : 'text-[#B6B6B6]'}`}>
                    8 characters minimum
                  </span>
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">
                Confirm password
              </Label>
              <div className="relative">
                <Input 
                  type="password"
                  placeholder="Confirm password"
                  className="h-12 border-[#B2B2B2] rounded-xl text-[14px] font-albert pr-12"
                />
                <EyeOffIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] text-[#B6B6B6]" />
              </div>
            </div>

            {/* Change Password Button */}
            <Button className="w-[180px] h-[50px] bg-[#E82121] hover:bg-[#E82121]/90 text-white rounded-xl font-albert text-base font-medium">
              Change passwords
            </Button>
          </div>
        </div>
      </div>

      {/* Car Details Section */}
      <div className="border border-[#EDEDED] rounded-2xl p-4 lg:p-8">
        <h2 className="text-2xl font-medium text-[#24272C] font-albert mb-5">
          Car details
        </h2>

        <div className="space-y-3">
          {/* Title */}
          <div className="space-y-2">
            <Label className="text-[14px] text-[#24272C] font-albert font-medium">
              Title *
            </Label>
            <Input
              placeholder="Title"
              className="h-[54px] border-[#EDEDED] rounded-xl px-4 text-[14px] font-albert text-[#696665]"
            />
          </div>

          {/* Row 1: Model, Type, Years */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Model *</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[37px] rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">Type *</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[37px] rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">Years *</Label>
              <Input placeholder="Years" className="h-[37px] border-[#767676] rounded-lg px-4 text-[14px] font-albert text-[#696665]" />
            </div>
          </div>

          {/* Row 2: Stock Number, VIN Number, Transmission */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Stock Number</Label>
              <Input placeholder="Enter number" className="h-[37px] border-[#767676] rounded-lg px-4 text-[14px] font-albert text-[#696665]" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">VIN Number</Label>
              <Input placeholder="Enter VIN" className="h-[37px] border-[#757575] rounded-lg px-4 text-[14px] font-albert text-[#696665]" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Transmission</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[37px] rounded-xl" />
            </div>
          </div>

          {/* Row 3: Driver Type Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-1">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Driver Type</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[39px] rounded-md" />
            </div>

            <div className="space-y-1">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Driver Type</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[39px] rounded-md" />
            </div>

            <div className="space-y-1">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Driver Type</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[39px] rounded-md" />
            </div>
          </div>

          {/* Row 4: More Driver Type Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-1">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Driver Type</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[39px] rounded-md" />
            </div>

            <div className="space-y-1">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Driver Type</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[39px] rounded-md" />
            </div>

            <div className="space-y-1">
              <Label className="text-[14px] text-[#24272C] font-albert font-bold">Driver Type</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[39px] rounded-md" />
            </div>
          </div>

          {/* Row 5: Doors, Color, Seats, City MPG (54px height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">Doors</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[54px] rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">Color</Label>
              <Input placeholder="Enter engine" className="h-[54px] border-[#EDEDED] rounded-xl px-4 text-[14px] font-albert text-[#696665]" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">Seats</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[54px] rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">City MPG</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[54px] rounded-xl" />
            </div>
          </div>

          {/* Row 6: Doors, Color, Seats, City MPG (45px height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">Doors</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[45px] rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">Color</Label>
              <Input placeholder="Enter engine" className="h-[45px] border-[#EDEDED] rounded-xl px-4 text-[14px] font-albert text-[#696665]" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">Seats</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[45px] rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label className="text-[14px] text-[#24272C] font-albert font-medium">City MPG</Label>
              <Select options={["Select"]} placeholder="Select" className="h-[45px] rounded-xl" />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label className="text-[14px] text-[#24272C] font-albert font-medium">Description</Label>
            <textarea placeholder="Your description" className="w-full h-[174px] border border-[#EDEDED] rounded-xl px-4 py-4 text-[14px] font-albert text-[#696665] resize-none" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <Button className="w-[161px] h-[51px] bg-[#CF0D0D] hover:bg-[#CF0D0D]/90 text-white rounded-xl font-dm text-[15px] font-medium">
          Save Profile
        </Button>
        <Button className="w-[162px] h-[51px] bg-[#24272C] hover:bg-[#24272C]/90 text-white rounded-xl font-dm text-[15px] font-medium">
          Delete account
        </Button>
      </div>
    </div>
  );
}

// Icon Components
function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 19" fill="none">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M7.06907 8.59658C7.37819 8.56568 7.65382 8.79121 7.68472 9.10036L8.05972 12.8504C8.0907 13.1594 7.8651 13.4351 7.55602 13.466C7.2469 13.4969 6.97124 13.2714 6.94033 12.9623L6.56533 9.21226C6.53442 8.90318 6.75995 8.62748 7.06907 8.59658Z" 
        fill="currentColor"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M10.931 8.59658C11.2401 8.62748 11.4656 8.90318 11.4347 9.21226L11.0597 12.9623C11.0288 13.2714 10.7532 13.4969 10.444 13.466C10.135 13.4351 9.90943 13.1594 9.94033 12.8504L10.3153 9.10036C10.3462 8.79121 10.6219 8.56568 10.931 8.59658Z" 
        fill="currentColor"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M7.59334 1.84376H10.1295C10.2918 1.84366 10.4331 1.84357 10.5666 1.86489C11.0941 1.94912 11.5506 2.27811 11.7972 2.75188C11.8597 2.8718 11.9043 3.00596 11.9556 3.15995L12.0393 3.41113C12.0534 3.45365 12.0575 3.46568 12.0609 3.47516C12.1923 3.83825 12.5328 4.08369 12.9188 4.09348C12.9289 4.09373 12.9414 4.09378 12.9864 4.09378H15.2364C15.5471 4.09378 15.7989 4.34561 15.7989 4.65628C15.7989 4.96694 15.5471 5.21878 15.2364 5.21878H2.48633C2.17567 5.21878 1.92383 4.96694 1.92383 4.65628C1.92383 4.34561 2.17567 4.09378 2.48633 4.09378H4.7364C4.78143 4.09378 4.79385 4.09373 4.80401 4.09348C5.19 4.08369 5.53051 3.83827 5.66185 3.47518C5.6653 3.46563 5.66928 3.45386 5.68352 3.41113L5.76722 3.15997C5.81844 3.00598 5.86308 2.8718 5.92552 2.75188C6.17223 2.27811 6.62868 1.94912 7.15615 1.86489C7.28967 1.84357 7.43106 1.84366 7.59334 1.84376ZM6.61744 4.09378C6.65607 4.01801 6.69031 3.93928 6.71976 3.85786C6.7287 3.83313 6.73748 3.80681 6.74874 3.773L6.8236 3.54844C6.89198 3.34331 6.90772 3.30147 6.92334 3.27148C7.00557 3.11355 7.15773 3.00389 7.33355 2.97581C7.36695 2.97048 7.4116 2.96878 7.62784 2.96878H10.095C10.3112 2.96878 10.3558 2.97048 10.3893 2.97581C10.5651 3.00389 10.7172 3.11355 10.7994 3.27148C10.815 3.30147 10.8308 3.3433 10.8992 3.54844L10.974 3.77287L11.0031 3.85787C11.0325 3.93929 11.0667 4.01801 11.1054 4.09378H6.61744Z" 
        fill="currentColor"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M3.83761 6.72002C4.14757 6.69935 4.41561 6.93388 4.43628 7.24385L4.78123 12.4182C4.84862 13.4291 4.89664 14.1324 5.00207 14.6616C5.10433 15.175 5.24708 15.4467 5.45214 15.6386C5.6572 15.8304 5.93782 15.9548 6.45682 16.0227C6.99187 16.0926 7.6969 16.0938 8.71 16.0938H9.29004C10.3031 16.0938 11.0081 16.0926 11.5432 16.0227C12.0622 15.9548 12.3428 15.8304 12.5479 15.6386C12.7529 15.4467 12.8957 15.175 12.998 14.6616C13.1034 14.1324 13.1514 13.4291 13.2188 12.4182L13.5638 7.24385C13.5844 6.93388 13.8524 6.69935 14.1624 6.72002C14.4724 6.74068 14.7069 7.00871 14.6863 7.31869L14.3387 12.5325C14.2745 13.4946 14.2228 14.2716 14.1013 14.8815C13.975 15.5154 13.7602 16.045 13.3165 16.4601C12.8728 16.8752 12.3301 17.0543 11.6891 17.1381C11.0726 17.2188 10.2938 17.2188 9.32957 17.2188H8.67047C7.70627 17.2188 6.92743 17.2188 6.3109 17.1381C5.66991 17.0543 5.12725 16.8752 4.68356 16.4601C4.23986 16.045 4.02505 15.5154 3.89875 14.8815C3.77727 14.2716 3.72547 13.4946 3.66136 12.5325L3.31377 7.31869C3.2931 7.00871 3.52763 6.74068 3.83761 6.72002Z" 
        fill="currentColor"
      />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 19 19" fill="none">
      <path 
        d="M15.6441 16.0898H10.8613C10.5508 16.0898 10.2988 15.8378 10.2988 15.5273C10.2988 15.2168 10.5508 14.9648 10.8613 14.9648H15.6441C15.9546 14.9648 16.2066 15.2168 16.2066 15.5273C16.2066 15.8378 15.9546 16.0898 15.6441 16.0898Z" 
        fill="currentColor"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12.8881 9.29888L13.8085 8.0727C14.2645 7.4652 14.4565 6.71671 14.3493 5.96445C14.242 5.2122 13.849 4.5477 13.2415 4.0917C11.9883 3.1512 10.2018 3.40395 9.2605 4.6587L4.19649 11.405C2.68749 13.4172 4.02999 15.8142 4.08774 15.9155C4.16574 16.0512 4.29699 16.148 4.44999 16.1832C4.49349 16.1937 4.91349 16.2867 5.49924 16.2867C6.44649 16.2867 7.825 16.0445 8.7445 14.819L12.771 9.45496C12.7944 9.43291 12.8162 9.40861 12.8361 9.38206C12.8562 9.35543 12.8735 9.32761 12.8881 9.29888ZM4.95249 15.1265C5.53824 15.1977 7.01574 15.248 7.84449 14.1432L11.5916 9.15136L8.84305 7.08775L5.09574 12.08C4.25049 13.208 4.71549 14.5887 4.95249 15.1265ZM9.5182 6.1884L12.2671 8.25139L12.9085 7.39695C13.4778 6.63946 13.324 5.5602 12.5665 4.99095C11.8083 4.4232 10.7283 4.57696 10.1598 5.3337L9.5182 6.1884Z" 
        fill="currentColor"
      />
    </svg>
  );
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 23 22" fill="none">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M11.4732 13.5806C11.0954 13.5806 10.7891 13.2766 10.7891 12.9015V1.99938C10.7891 1.62434 11.0954 1.32031 11.4732 1.32031C11.851 1.32031 12.1574 1.62434 12.1574 1.99938V12.9015C12.1574 13.2766 11.851 13.5806 11.4732 13.5806Z" 
        fill="currentColor"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M8.33223 5.1316C8.06451 4.86696 8.06362 4.437 8.33025 4.17126L10.9902 1.52019C11.1186 1.39224 11.293 1.32031 11.475 1.32031C11.6569 1.32031 11.8314 1.39224 11.9597 1.52019L14.6197 4.17126C14.8863 4.437 14.8854 4.86696 14.6177 5.1316C14.3499 5.39625 13.9168 5.39537 13.6502 5.12963L11.475 2.9617L9.29976 5.12963C9.03314 5.39537 8.59995 5.39625 8.33223 5.1316Z" 
        fill="currentColor"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M4.47715 8.79299C5.00216 8.08973 5.86045 7.73817 7.44064 7.59359C7.81689 7.55917 8.09378 7.22852 8.0591 6.85506C8.02442 6.48161 7.69129 6.20677 7.31505 6.24119C5.62958 6.3954 4.26211 6.79986 3.37779 7.98441C2.52995 9.12011 2.24219 10.8312 2.24219 13.2553C2.24219 16.4694 2.74986 18.4456 4.41316 19.4596C5.20591 19.943 6.1877 20.1566 7.31161 20.2604C8.43111 20.3638 9.776 20.3638 11.3353 20.3638H11.393C12.9523 20.3638 14.2972 20.3638 15.4166 20.2604C16.5406 20.1566 17.5224 19.943 18.3151 19.4596C19.9784 18.4456 20.4861 16.4694 20.4861 13.2553C20.4861 10.8312 20.1983 9.12011 19.3505 7.98441C18.4661 6.79986 17.0987 6.3954 15.4132 6.24119C15.037 6.20677 14.7039 6.48161 14.6692 6.85506C14.6344 7.22852 14.9114 7.55917 15.2877 7.59359C16.8678 7.73817 17.7261 8.08973 18.2511 8.79299C18.8127 9.54511 19.1178 10.8536 19.1178 13.2553C19.1178 16.4707 18.5718 17.7092 17.5989 18.3024C17.0736 18.6228 16.3415 18.811 15.2899 18.9081C14.2407 19.005 12.9579 19.0057 11.3641 19.0057C9.77035 19.0057 8.48756 19.005 7.43838 18.9081C6.3867 18.811 5.65471 18.6228 5.12934 18.3024C4.15639 17.7092 3.61048 16.4707 3.61048 13.2553C3.61048 10.8536 3.91564 9.54511 4.47715 8.79299Z" 
        fill="currentColor"
      />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none">
      <path d="M1.5271 9.2415C1.47534 9.08594 1.47534 8.91781 1.5271 8.76225C2.56735 5.6325 5.5201 3.375 9.0001 3.375C12.4786 3.375 15.4298 5.63025 16.4723 8.7585C16.5248 8.91375 16.5248 9.08175 16.4723 9.23775C15.4328 12.3675 12.4801 14.625 9.0001 14.625C5.5216 14.625 2.5696 12.3697 1.5271 9.2415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none">
      <path d="M2.98567 6.16725C2.28401 6.99538 1.76153 7.9599 1.45117 9C2.42017 12.2535 5.43367 14.625 9.00067 14.625C9.74542 14.625 10.4654 14.5215 11.1479 14.3287M4.67167 4.671C5.95616 3.8234 7.46173 3.37266 9.00067 3.375C12.5677 3.375 15.5804 5.7465 16.5494 8.9985C16.0184 10.7755 14.8785 12.3087 13.3297 13.329M4.67167 4.671L2.25067 2.25M4.67167 4.671L7.40917 7.4085M13.3297 13.329L15.7507 15.75M13.3297 13.329L10.5922 10.5915C10.8011 10.3826 10.9669 10.1345 11.08 9.86149C11.193 9.58848 11.2512 9.29587 11.2512 9.00037C11.2512 8.70488 11.193 8.41227 11.08 8.13926C10.9669 7.86626 10.8011 7.6182 10.5922 7.40925C10.3832 7.2003 10.1352 7.03455 9.86216 6.92147C9.58915 6.80839 9.29655 6.75018 9.00105 6.75018C8.70555 6.75018 8.41294 6.80839 8.13994 6.92147C7.86693 7.03455 7.61887 7.2003 7.40992 7.40925M10.5914 10.5908L7.41067 7.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 10" fill="none">
      <path d="M9.87722 2.52782C9.69674 2.33638 9.39483 2.32925 9.20434 2.50924L5.00757 6.48505L0.81128 2.50926C0.620796 2.32878 0.319357 2.3364 0.138405 2.52784C-0.0425481 2.71879 -0.0344624 3.02023 0.15651 3.20118L4.68043 7.487C4.77185 7.57368 4.88995 7.61748 5.00757 7.61748C5.12518 7.61748 5.24375 7.57368 5.3352 7.487L9.85911 3.20118C10.0501 3.02021 10.0582 2.71879 9.87722 2.52782Z" fill="currentColor"/>
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 17 16" fill="none">
      <path d="M13.25 5.5L8.25 10.5L3.25 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
