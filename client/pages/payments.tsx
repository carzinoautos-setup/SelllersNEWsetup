import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function PaymentsPage() {
  const [cards, setCards] = useState(
    [
      { id: 1, brand: "Visa", last4: "4242", exp: "12/24" },
      { id: 2, brand: "Mastercard", last4: "3185", exp: "09/25" },
    ] as { id: number; brand: string; last4: string; exp: string }[],
  );

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [exp, setExp] = useState("");

  const addCard = () => {
    if (!cardNumber || !cardName || !exp) return;
    const newCard = {
      id: Date.now(),
      brand: cardNumber.startsWith("4") ? "Visa" : "Card",
      last4: cardNumber.slice(-4),
      exp,
    };
    setCards((s) => [newCard, ...s]);
    setCardNumber("");
    setCardName("");
    setExp("");
  };

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] py-8">
          <div className="mb-6">
            <h1 className="text-[24px] font-semibold text-[#24272C]">Payments</h1>
            <p className="text-[14px] text-[#6B6B6B] mt-2">Manage saved payment methods and add a new card.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Form and saved cards */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#E6E6E6] rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-medium text-[#24272C] mb-4">Add a payment method</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#24272C] mb-2">Cardholder name</label>
                    <input
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#E82121] outline-none"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#24272C] mb-2">Card number</label>
                    <input
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#E82121] outline-none"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#24272C] mb-2">Expiration</label>
                      <input
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}
                        className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#E82121] outline-none"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#24272C] mb-2">CVV</label>
                      <input
                        className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#E82121] outline-none"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={addCard}
                      className="inline-flex items-center justify-center h-[48px] px-5 bg-[#E82121] text-white rounded-md hover:bg-[#d11e1e] transition"
                    >
                      Save card
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white border border-[#E6E6E6] rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-[#24272C] mb-4">Saved payment methods</h3>
                <div className="space-y-3">
                  {cards.map((c) => (
                    <div key={c.id} className="flex items-center justify-between p-3 border border-[#F1F1F1] rounded-md">
                      <div>
                        <div className="text-sm font-medium">{c.brand} •••• {c.last4}</div>
                        <div className="text-xs text-[#6B6B6B]">Expires {c.exp}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-[#E82121]">Remove</button>
                        <button className="text-sm text-[#6B6B6B]">Set as default</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: billing summary */}
            <aside className="">
              <div className="bg-white border border-[#E6E6E6] rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-[#24272C] mb-2">Billing</h3>
                <p className="text-sm text-[#6B6B6B]">Default billing method and recent invoices.</p>

                <div className="mt-4">
                  <div className="text-sm text-[#24272C] font-medium">Default: {cards[0]?.brand} •••• {cards[0]?.last4}</div>
                  <div className="text-xs text-[#6B6B6B] mt-2">No recent invoices</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
