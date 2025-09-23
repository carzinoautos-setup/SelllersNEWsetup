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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <aside className="lg:col-span-1 bg-white rounded-2xl border border-[#EDEDED] p-4">
              <div className="text-sm font-medium mb-3">Filters</div>
              <div className="flex flex-col gap-2 text-sm">
                <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-50">All</button>
                <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-50">Unread</button>
                <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-50">Archived</button>
              </div>
            </aside>

            <main className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[#EDEDED] p-4">
                {messages.length === 0 ? (
                  <div className="p-6 text-center text-sm text-[#6B6B6B]">No messages yet</div>
                ) : (
                  <ul className="divide-y">
                    {messages.map((m) => (
                      <li key={m.id} className="flex items-start p-4 hover:bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-[#24272C]">{m.from}</div>
                            <div className="text-sm text-[#6B6B6B]">2h</div>
                          </div>
                          <div className="text-sm text-[#696665] mt-1">{m.subject}</div>
                          <div className="text-xs text-[#9CA3AF] mt-1">{m.preview}</div>
                        </div>
                        <div className="ml-4">
                          <button className="px-3 py-2 rounded-lg bg-[#E82121] text-white text-sm">Reply</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
