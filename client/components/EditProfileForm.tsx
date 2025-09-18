import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditProfileFormProps {
  className?: string;
}

export function EditProfileForm({ className }: EditProfileFormProps) {
  return (
    <div className={cn("w-full max-w-[1480px] mx-auto space-y-[50px]", className)}>
      {/* Profile Photo Section */}
      <div className="space-y-5">
        <div className="border border-line rounded-16 p-[30px]">
          <div className="space-y-5">
            <div className="text-color-primary text-base font-dm font-medium">Profile Photo</div>
            
            <div className="flex items-start gap-6">
              {/* Existing photo */}
              <div className="relative w-[191px] h-[167px] rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/48ae84d3148c5e03705522982a1b07c6b4c2a73b?width=437"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="w-10 h-10 bg-white rounded-16 flex items-center justify-center">
                    <TrashIcon className="w-[18px] h-[18px] text-color-primary" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-16 flex items-center justify-center">
                    <EditIcon className="w-[18px] h-[18px] text-color-primary" />
                  </button>
                </div>
              </div>

              {/* Upload area */}
              <div className="w-[191px] h-[167px] border border-dashed border-color-secondary rounded-lg bg-bg-3 flex flex-col items-center justify-center cursor-pointer hover:bg-bg-3/80 transition-colors">
                <UploadIcon className="w-[34px] h-[34px] text-color-primary mb-3" />
                <span className="text-color-primary text-[15px] font-dm">Upload</span>
              </div>

              {/* Account info */}
              <div className="space-y-6 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[13px] text-icon font-dm">Account Number</Label>
                    <div className="text-color-primary text-[15px] font-dm">auto generated</div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[13px] text-icon font-dm">Seller type</Label>
                    <div className="text-color-primary text-[15px] font-dm">Private Seller</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-color-primary text-[15px] font-dm">
              Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
            </div>
          </div>
        </div>
      </div>

      {/* Enter your Details Section */}
      <div className="space-y-5">
        <h3 className="text-heading text-2xl font-albert font-medium">Enter your Details</h3>
        <div className="border border-line rounded-16 p-[30px]">
          <div className="grid grid-cols-3 gap-6">
            <FormField label="Seller name or Dealer Name" placeholder="Enter your full name" />
            <FormField label="City" placeholder="Enter your city" />
            <FormField label="State" placeholder="Enter your state" />
            <FormField label="Zip code" placeholder="Enter your zip code" />
            <FormField label="Email Alert address" placeholder="Enter your email address" />
            <FormField label="Account holder email Address" placeholder="Enter your email address" />
            <FormField label="List phone on ads" placeholder="Select Yes or No" type="select" />
            <FormField label="Seller Phone" placeholder="+77" />
            <div></div>
            <FormField label="Enter your full address here and then select" placeholder="Enter address" className="col-span-1" />
            <FormField label="Longitude" placeholder="Auto populates from google maps" />
            <FormField label="Latitude" placeholder="Auto populates from google maps" />
          </div>
        </div>
      </div>

      {/* Dealer Ship Information Section */}
      <div className="space-y-5">
        <h3 className="text-heading text-2xl font-albert font-medium">Dealer Ship Information</h3>
        <div className="border border-line rounded-16 p-[30px]">
          <div className="grid grid-cols-3 gap-6">
            <FormField label="Do you sell new or used vehicles?" placeholder="Select new, used or both" />
            <FormField label="Dealership website" placeholder="Enter your website address" />
            <FormField label="XML or CSV vehicle Feed url" placeholder="Enter an additional alert email address" />
            <FormField label="Email lead alerts user 1" placeholder="Enter an additional alert email address" />
            <FormField label="Email lead alerts user 2" placeholder="Enter an additional alert email address" />
            <FormField label="Email lead alerts user 3" placeholder="Enter an additional alert email address" />
            <FormField label="Dealerships CRM provider" placeholder="Enter your Crm provider" />
            <FormField label="CRM Account #" placeholder="Enter your Crm account #" />
            <FormField label="Dealerships CRM email" placeholder="Enter your Crm alert email address" />
            <FormField label="Website provider information" placeholder="Enter your inventory provider" className="col-span-1" />
          </div>
        </div>
      </div>

      {/* Billing Information Section */}
      <div className="space-y-5">
        <h3 className="text-heading text-2xl font-albert font-medium">Billing Information</h3>
        <div className="border border-line rounded-16 p-[30px]">
          <div className="grid grid-cols-3 gap-6">
            <FormField label="Billing contact" placeholder="Enter your full name" />
            <FormField label="Street address" placeholder="+77" />
            <FormField label="Zip code" placeholder="Enter your zip code" />
            <FormField label="Billing phone" placeholder="+77" />
            <FormField label="City" placeholder="Enter your city" />
            <FormField label="Country" placeholder="USA" />
            <FormField label="Billing email" placeholder="+77" />
            <FormField label="State" placeholder="Enter your state" />
            <div></div>
          </div>
        </div>
      </div>

      {/* Change password Section */}
      <div className="space-y-5">
        <h3 className="text-heading text-2xl font-albert font-medium">Change password</h3>
        <div className="border border-line rounded-16 p-[30px] space-y-[30px]">
          {/* Old password */}
          <div className="space-y-2">
            <Label className="text-heading text-sm font-albert font-medium">Old password</Label>
            <div className="relative">
              <Input 
                type="password"
                placeholder="Old password"
                className="h-[54px] px-[18px] border-line rounded-14 text-text-muted font-albert"
              />
              <EyeIcon className="absolute right-[18px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-icon" />
            </div>
          </div>

          {/* New password */}
          <div className="space-y-3">
            <div className="space-y-2">
              <Label className="text-heading text-sm font-albert font-medium">New password</Label>
              <div className="relative">
                <Input 
                  type="password"
                  placeholder="New password"
                  className="h-[54px] px-[18px] border-line rounded-14 text-text-muted font-albert"
                />
                <EyeIcon className="absolute right-[18px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-icon" />
              </div>
            </div>
            
            {/* Password requirements */}
            <div className="space-y-[6px]">
              <div className="flex items-center gap-[6px]">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span className="text-success text-xs font-albert">One number</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="w-2 h-2 rounded-full bg-icon"></div>
                <span className="text-icon text-xs font-albert">One lowercase character</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="w-2 h-2 rounded-full bg-icon"></div>
                <span className="text-icon text-xs font-albert">One uppercase character</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="w-2 h-2 rounded-full bg-icon"></div>
                <span className="text-icon text-xs font-albert">8 characters minimum</span>
              </div>
            </div>
          </div>

          {/* Confirm password */}
          <div className="space-y-2">
            <Label className="text-heading text-sm font-albert font-medium">Confirm password</Label>
            <div className="relative">
              <Input 
                type="password"
                placeholder="Confirm password"
                className="h-[54px] px-[18px] border-line rounded-14 text-text-muted font-albert"
              />
              <EyeOffIcon className="absolute right-[18px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-icon" />
            </div>
          </div>

          <Button className="bg-main-color hover:bg-main-color/90 text-white h-[50px] px-[10px] rounded-14 font-albert font-medium">
            Change passwords
          </Button>
        </div>
      </div>

      {/* Save Profile Button */}
      <div className="flex justify-center">
        <Button className="bg-color-secondary hover:bg-color-secondary/90 text-white h-[51px] px-[26px] rounded-12 font-dm font-medium">
          Save Profile
        </Button>
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: "text" | "select";
  className?: string;
}

function FormField({ label, placeholder, type = "text", className }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label className="text-[13px] text-icon font-dm font-bold">{label}</Label>
      {type === "select" ? (
        <div className="relative">
          <Input 
            placeholder={placeholder}
            className="h-[60px] px-[15px] border-border-color rounded-12 text-color-primary font-dm font-bold text-[15px]"
            readOnly
          />
          <ChevronDownIcon className="absolute right-[15px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] text-color-primary" />
        </div>
      ) : (
        <Input 
          placeholder={placeholder}
          className="h-[60px] px-[15px] border-border-color rounded-12 text-color-primary font-dm font-bold text-[15px]"
        />
      )}
    </div>
  );
}

// Icons
function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 19 18" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.43431 7.69033C7.74343 7.65943 8.01906 7.88496 8.04996 8.19411L8.42496 11.9441C8.45593 12.2532 8.23033 12.5289 7.92126 12.5598C7.61213 12.5907 7.33648 12.3652 7.30557 12.056L6.93057 8.30601C6.89965 7.99693 7.12519 7.72123 7.43431 7.69033Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2962 7.69033C11.6053 7.72123 11.8308 7.99693 11.7999 8.30601L11.4249 12.056C11.394 12.3652 11.1184 12.5907 10.8093 12.5598C10.5002 12.5289 10.2747 12.2532 10.3056 11.9441L10.6806 8.19411C10.7115 7.88496 10.9871 7.65943 11.2962 7.69033Z" fill="currentColor"/>
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 19 18" fill="none">
      <path d="M15.5542 15.1836H10.7715C10.461 15.1836 10.209 14.9316 10.209 14.6211C10.209 14.3106 10.461 14.0586 10.7715 14.0586H15.5542C15.8647 14.0586 16.1167 14.3106 16.1167 14.6211C16.1167 14.9316 15.8647 15.1836 15.5542 15.1836Z" fill="currentColor"/>
    </svg>
  );
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 35 34" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5285 21.2495C16.9373 21.2495 16.458 20.7738 16.458 20.187V3.12891C16.458 2.54211 16.9373 2.06641 17.5285 2.06641C18.1196 2.06641 18.5989 2.54211 18.5989 3.12891V20.187C18.5989 20.7738 18.1196 21.2495 17.5285 21.2495Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.612 8.02975C12.1931 7.61567 12.1917 6.94294 12.6088 6.52715L16.7708 2.37915C16.9716 2.17895 17.2445 2.06641 17.5292 2.06641C17.8138 2.06641 18.0869 2.17895 18.2877 2.37915L22.4496 6.52715C22.8668 6.94294 22.8654 7.61567 22.4465 8.02975C22.0276 8.44383 21.3499 8.44245 20.9327 8.02666L17.5292 4.63461L14.1258 8.02666C13.7086 8.44245 13.0308 8.44383 12.612 8.02975Z" fill="currentColor"/>
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
      <path d="M2.9847 6.16725C2.28304 6.99538 1.76056 7.9599 1.4502 9C2.4192 12.2535 5.4327 14.625 8.9997 14.625C9.74445 14.625 10.4644 14.5215 11.1469 14.3287M4.6707 4.671C5.95518 3.8234 7.46076 3.37266 8.9997 3.375C12.5667 3.375 15.5794 5.7465 16.5484 8.9985C16.0174 10.7755 14.8775 12.3087 13.3287 13.329M4.6707 4.671L2.2497 2.25M4.6707 4.671L7.4082 7.4085M13.3287 13.329L15.7497 15.75M13.3287 13.329L10.5912 10.5915" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
