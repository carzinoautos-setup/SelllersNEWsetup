import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Link } from "react-router-dom";

export default function SuccessUploaded() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm" />
        </div>
      </div>
    </DashboardLayout>
  );
}
