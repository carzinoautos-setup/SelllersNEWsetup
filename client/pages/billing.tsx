import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

interface PaymentMethod {
  id: string;
  brand: string;
  last4: string;
  exp: string;
  name: string;
}

interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed";
}

export default function BillingPage() {
  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [invoices] = useState<Invoice[]>([
    { id: "INV-1001", date: "2025-08-01", amount: 120, status: "Paid" },
    { id: "INV-1002", date: "2025-08-15", amount: 75, status: "Paid" },
    { id: "INV-1003", date: "2025-09-05", amount: 45, status: "Pending" },
  ]);

  const [form, setForm] = useState({
    name: "",
    card: "",
    exp: "",
    cvc: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.card || !form.name) return;
    const last4 = form.card.replace(/\s+/g, "").slice(-4);
    const brand = form.card.startsWith("4")
      ? "Visa"
      : form.card.startsWith("5")
      ? "Mastercard"
      : "Card";
    const id = `pm_${Date.now()}`;
    setMethods((m) => [
      ...m,
      { id, brand, last4, exp: form.exp || "", name: form.name },
    ]);
    setForm({ name: "", card: "", exp: "", cvc: "", address: "" });
  };

  const removeMethod = (id: string) => setMethods((m) => m.filter((x) => x.id !== id));

  const handleStripePay = () => {
    // placeholder integration
    window.alert("Payment processed (simulation)");
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-visible">
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="flex-1">
              {/* Removed large Stripe checkout visual; keeping payment methods and invoices below */}

              <div className="bg-white border border-[#E1E1E1] rounded-2xl p-6 mb-6">
                <h3 className="font-dm text-[16px] font-medium mb-4">Payment Methods</h3>

                <div className="space-y-4">
                  {methods.length === 0 ? (
                    <div className="text-[#6B7280]">No saved payment methods</div>
                  ) : (
                    methods.map((m) => (
                      <div key={m.id} className="flex items-center justify-between border rounded-lg p-3">
                        <div>
                          <div className="font-dm text-[15px] text-[#050B20] font-medium">{m.brand} •••• {m.last4}</div>
                          <div className="text-[13px] text-[#6B7280]">{m.name} • Exp {m.exp}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => removeMethod(m.id)} className="px-3 py-2 bg-[#F9FBFC] border border-[#E1E1E1] rounded-md text-[#050B20]">Remove</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <form onSubmit={handleAdd} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[13px] text-[#050B20] mb-2">Name on card</label>
                    <input name="name" value={form.name} onChange={handleChange} className="w-full border border-[#E1E1E1] rounded-lg p-3" />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[13px] text-[#050B20] mb-2">Card number</label>
                    <input name="card" value={form.card} onChange={handleChange} placeholder="4242 4242 4242 4242" className="w-full border border-[#E1E1E1] rounded-lg p-3" />
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#050B20] mb-2">Expiry</label>
                    <input name="exp" value={form.exp} onChange={handleChange} placeholder="MM/YY" className="w-full border border-[#E1E1E1] rounded-lg p-3" />
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#050B20] mb-2">CVC</label>
                    <input name="cvc" value={form.cvc} onChange={handleChange} placeholder="123" className="w-full border border-[#E1E1E1] rounded-lg p-3" />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[13px] text-[#050B20] mb-2">Billing address</label>
                    <textarea name="address" value={form.address} onChange={handleChange} className="w-full border border-[#E1E1E1] rounded-lg p-3 h-20" />
                  </div>

                  <div className="col-span-2 flex items-center gap-3">
                    <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl font-dm text-[15px] font-medium">Add payment method</button>
                    <div className="text-sm text-[#6B7280]">Your card will be securely stored.</div>
                  </div>
                </form>
              </div>

              <div className="bg-white border border-[#E1E1E1] rounded-2xl p-6">
                <h3 className="font-dm text-[16px] font-medium mb-4">Recent invoices</h3>
                <div className="space-y-3">
                  {invoices.map((inv) => (
                    <div key={inv.id} className="flex items-center justify-between border rounded-lg p-3">
                      <div>
                        <div className="font-dm text-[15px] text-[#050B20] font-medium">{inv.id}</div>
                        <div className="text-[13px] text-[#6B7280]">{inv.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-dm text-[15px] text-[#050B20] font-medium">${inv.amount}</div>
                        <div className={`text-[13px] ${inv.status === "Paid" ? "text-green-600" : inv.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>{inv.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[380px]">
              <div className="bg-white border border-[#E1E1E1] rounded-2xl p-[30px]">
                <h3 className="text-[#050B20] font-albert text-xl font-medium mb-[24px]">Billing summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#050B20] font-dm text-[15px]">Outstanding</span>
                    <span className="text-[#050B20] font-dm text-[15px] font-medium">$45</span>
                  </div>
                  <div className="h-px bg-[#E1E1E1]"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#050B20] font-dm text-[15px]">Balance</span>
                    <span className="text-[#050B20] font-dm text-[15px] font-medium">$0</span>
                  </div>
                </div>

                <button onClick={handleStripePay} className="w-full bg-[#CF0D0D] text-white px-[26px] py-[14px] rounded-xl font-dm text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">Pay outstanding</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
