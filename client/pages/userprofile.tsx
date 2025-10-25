import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { EditProfileForm } from "../components/EditProfileForm";
import { VehicleDetailsForm } from "../components/VehicleDetailsForm";
import { useToast } from "@/hooks/use-toast";

export default function UserProfile() {
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const handleSaveAll = async () => {
    try {
      setSaving(true);
      // Simulate save delay; replace with real API call when available
      await new Promise((res) => setTimeout(res, 700));
      toast({
        title: "Profile saved",
        description: "Your profile and vehicle details were saved.",
        duration: 4000,
      });
    } catch (err) {
      toast({
        title: "Save failed",
        description: "Unable to save changes.",
        duration: 4000,
      });
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    // Reset to last persisted state by reloading the page. Replace with controlled form reset when integrated with an API.
    if (typeof window !== "undefined") window.location.reload();
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto">
        <div className="py-6 md:py-10 lg:px-[50px] px-4 sm:px-6">
          <div className="max-w-[1480px] mx-auto mb-6 flex items-center justify-end gap-3">
            <button
              onClick={handleReset}
              className="h-11 px-4 rounded-xl border border-[#D9D9D9] bg-white text-[15px] font-dm"
              type="button"
            >
              Reset
            </button>
            <button
              onClick={handleSaveAll}
              disabled={saving}
              className="h-11 px-5 rounded-xl bg-[#E82121] text-white text-[15px] font-dm disabled:opacity-60"
              type="button"
            >
              {saving ? "Saving..." : "Save All"}
            </button>
          </div>

          <EditProfileForm />
          <VehicleDetailsForm />
        </div>
      </div>
    </DashboardLayout>
  );
}
