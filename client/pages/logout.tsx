import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import Link from "next/link";

export default function Logout() {
  return (
    <DashboardLayout>
      <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-transparent">
        <div className="bg-white border border-[#E1E1E1] rounded-2xl p-8 w-full max-w-lg text-center">
          <h1 className="text-2xl font-albert font-semibold text-[#050B20] mb-4">
            You are logged out
          </h1>
          <p className="text-sm text-[#6B7280] mb-6">
            You have successfully logged out of your account.
          </p>

          <div className="flex justify-center gap-3">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium"
            >
              Return home
            </Link>
            <Link
              to="/profile"
              className="inline-block px-6 py-3 border border-[#E1E1E1] rounded-lg font-medium text-[#050B20]"
            >
              Sign in
            </Link>
          </div>

          <div className="mt-6 text-xs text-[#9CA3AF]">
            This page is editable in the Design tab when Builder.io is
            connected.
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
