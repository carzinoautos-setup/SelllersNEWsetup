import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function RemoveListing() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Empty editable canvas - intentionally no visible elements so you can design in Builder.io */}
          <div className="min-h-[240px] bg-transparent" />
        </div>
      </div>
    </DashboardLayout>
  );
}
