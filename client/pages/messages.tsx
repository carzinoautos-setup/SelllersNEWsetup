import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function MessagesPage() {
  const messages = [
    { id: 1, from: "John Doe", subject: "Interested in your listing", preview: "Hi, is the 2017 BMW still available?" },
    { id: 2, from: "Jane Smith", subject: "Question about mileage", preview: "Can you confirm the mileage on the Toyota?" },
  ];

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#24272C]">Messages</h1>
            <p className="text-sm text-[#6B6B6B] mt-2">View and respond to messages from buyers.</p>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
