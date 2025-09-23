import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "1 Featured Car Credit",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3e80e5981827d1131a6b7b2b4177344d1b8ac40e?width=188",
      price: 5,
      quantity: 2,
    },
    {
      id: "2",
      name: "5 pack Featured Credits",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3e80e5981827d1131a6b7b2b4177344d1b8ac40e?width=188",
      price: 25,
      quantity: 1,
    },
    {
      id: "3",
      name: "10 Pack Featured Credits",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3e80e5981827d1131a6b7b2b4177344d1b8ac40e?width=188",
      price: 50,
      quantity: 2,
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal; // extend with taxes/shipping if needed

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-visible">
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full max-w-[1550px] mx-auto">
          <h1 className="text-[40px] font-bold text-black font-albert leading-[48px] mb-[72px]">Check out</h1>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* Cart Table Section */}
            <div className="flex-1">
              {/* Table Header */}
              <div className="bg-[#E9F2FF] rounded-2xl h-[70px] flex items-center px-[35px] mb-0">
                <div className="flex-1 text-[#050B20] font-dm text-base font-medium">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-5">Product</div>
                    <div className="hidden md:block md:col-span-2 text-center">Price</div>
                    <div className="hidden md:block md:col-span-3 text-center">Quantity</div>
                    <div className="hidden md:block md:col-span-2 text-center">Subtotal</div>
                  </div>
                </div>
              </div>

              {/* Cart Items */}
              <div className="space-y-0">
                {cartItems.map((item) => (
                  <div key={item.id} className="border-b border-[#ECEDF2] py-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-[35px]">
                      {/* Product Info */}
                      <div className="md:col-span-5 flex items-center gap-4">
                        <div className="relative">
                          <div className="w-[118px] h-[100px] bg-white border border-[#E1E1E1] rounded-2xl flex items-center justify-center flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-[94px] h-[80px] object-contain" />
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label="Remove item"
                            className="absolute -top-2 -right-2 w-8 h-8 bg-[#F9FBFC] border border-[#E1E1E1] rounded-2xl flex items-center justify-center hover:bg-gray-100"
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                        <div className="font-dm text-base font-medium text-[#050B20]">{item.name}</div>
                      </div>

                      {/* Price - Desktop */}
                      <div className="hidden md:block md:col-span-2 text-center">
                        <span className="text-[#050B20] font-dm text-[15px]">${item.price}</span>
                      </div>

                      {/* Quantity - Desktop */}
                      <div className="hidden md:flex md:col-span-3 justify-center">
                        <div className="flex items-center border border-[#E1E1E1] rounded-2xl bg-white h-[54px] w-[165px]">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-12 h-full flex items-center justify-center text-[#050B20] font-dm text-[15px] hover:bg-gray-50">-</button>
                          <div className="flex-1 text-center text-[#050B20] font-dm text-[15px]">{item.quantity}</div>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-12 h-full flex items-center justify-center text-[#050B20] font-dm text-[15px] hover:bg-gray-50">+</button>
                        </div>
                      </div>

                      {/* Subtotal - Desktop */}
                      <div className="hidden md:block md:col-span-2 text-center">
                        <span className="text-[#050B20] font-dm text-[15px]">${item.price * item.quantity}</span>
                      </div>

                      {/* Delete Button - Desktop Only */}
                      <div className="hidden md:flex justify-center"></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Cart Totals Section */}
            <div className="w-full xl:w-[400px]">
              <div className="bg-white border border-[#E1E1E1] rounded-2xl p-[30px]">
                <h3 className="text-[#050B20] font-albert text-xl font-medium mb-[44px]">Cart Totals</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#050B20] font-dm text-[15px]">Subtotal</span>
                    <span className="text-[#050B20] font-dm text-[15px] font-medium">${subtotal}</span>
                  </div>
                  <div className="h-px bg-[#E1E1E1]"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#050B20] font-dm text-[15px]">Total</span>
                    <span className="text-[#050B20] font-dm text-[15px] font-medium">${total}</span>
                  </div>
                </div>

                <button className="w-full bg-[#CF0D0D] text-white px-[26px] py-[20px] rounded-xl font-dm text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                  Proceed to Checkout
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function DeleteIcon() {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Ffe1b4952bdf14776bb1e25fe41764b4c?format=webp&width=800"
      alt="Remove item"
      className="w-[18px] h-[18px] object-contain"
    />
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3083_6122)">
        <path d="M13.6106 0H5.05509C4.84013 0 4.66619 0.173943 4.66619 0.388901C4.66619 0.603859 4.84013 0.777802 5.05509 0.777802H12.6719L0.113453 13.3362C-0.0384687 13.4881 -0.0384687 13.7342 0.113453 13.8861C0.189396 13.962 0.288927 14 0.388422 14C0.487917 14 0.587411 13.962 0.663391 13.8861L13.2218 1.3277V8.94447C13.2218 9.15943 13.3957 9.33337 13.6107 9.33337C13.8256 9.33337 13.9996 9.15943 13.9996 8.94447V0.388901C13.9995 0.173943 13.8256 0 13.6106 0Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_3083_6122">
          <rect width="14" height="14" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
