import React, { useEffect, useRef, useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";

export function UsersProfileCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState<"Select" | "Private Seller" | "Dealer">("Select");

  const [profileImage, setProfileImage] = useState<string>("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  // load draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem("profile.draft");
      if (raw) {
        const data = JSON.parse(raw);
        setName(data.name || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setAccountType(data.accountType || "Select");
        setProfileImage(data.profileImage || "");
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  // persist draft
  useEffect(() => {
    const payload = { name, email, phone, accountType, profileImage };
    localStorage.setItem("profile.draft", JSON.stringify(payload));
  }, [name, email, phone, accountType, profileImage]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfileImage(url);
  }

  function clearDraft() {
    localStorage.removeItem("profile.draft");
    setName("");
    setEmail("");
    setPhone("");
    setAccountType("Select");
    setProfileImage("");
  }

  return (
    <div className="w-full max-w-[960px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>

      <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <label className="block">
            <div className="text-sm font-medium text-gray-700 mb-1">Full name</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Your full name"
            />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-gray-700 mb-1">Email</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-gray-700 mb-1">Phone</div>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="(555) 555-5555"
            />
          </label>

          <label className="block">
            <div className="text-sm font-medium text-gray-700 mb-1">Account type</div>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value as any)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="Select">Select</option>
              <option value="Private Seller">Private Seller</option>
              <option value="Dealer">Dealer</option>
            </select>
          </label>

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={() => alert("Profile saved")}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Save Profile
            </button>
            <button
              type="button"
              onClick={clearDraft}
              className="px-4 py-2 border rounded"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-4">
          <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100">
            {profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
            )}
          </div>

          <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <button
            type="button"
            onClick={() => fileRef.current && fileRef.current.click()}
            className="px-3 py-2 border rounded"
          >
            {profileImage ? "Change Image" : "Choose Image"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UsersProfilePage() {
  return (
    <DashboardLayout>
      <UsersProfileCard />
    </DashboardLayout>
  );
}
