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
                      <div className="hidden md:flex justify-center">
                        <button onClick={() => removeItem(item.id)} className="w-[40px] h-[40px] bg-[#F9FBFC] border border-[#E1E1E1] rounded-2xl flex items-center justify-center hover:bg-gray-100">
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Update Cart Button (now Proceed button) */}
              <div className="mt-8 px-[35px]">
                <button className="bg-black text-white px-[26px] py-[20px] rounded-xl font-dm text-[15px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  <p>Proceed to Checkout</p>
                  <ArrowIcon />
                </button>
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
    <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.79637 7.69033C8.10549 7.65943 8.38112 7.88496 8.41202 8.19411L8.78702 11.9441C8.81799 12.2532 8.59239 12.5289 8.28332 12.5598C7.97419 12.5907 7.69854 12.3652 7.66763 12.056L7.29263 8.30601C7.26171 7.99693 7.48725 7.72123 7.79637 7.69033Z" fill="#050B20"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6583 7.69033C11.9674 7.72123 12.1929 7.99693 12.162 8.30601L11.787 12.056C11.7561 12.3652 11.4805 12.5907 11.1713 12.5598C10.8623 12.5289 10.6367 12.2532 10.6676 11.9441L11.0426 8.19411C11.0735 7.88496 11.3492 7.65943 11.6583 7.69033Z" fill="#050B20"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.32015 0.937514H10.8563C11.0186 0.937409 11.1599 0.937319 11.2934 0.958642C11.8209 1.04287 12.2774 1.37186 12.524 1.84563C12.5865 1.96555 12.6311 2.09971 12.6824 2.2537L12.7661 2.50488C12.7802 2.5474 12.7843 2.55943 12.7877 2.56891C12.9191 2.932 13.2596 3.17744 13.6456 3.18723C13.6557 3.18748 13.6682 3.18753 13.7132 3.18753H15.9632C16.2739 3.18753 16.5257 3.43936 16.5257 3.75003C16.5257 4.06069 16.2739 4.31253 15.9632 4.31253H3.21313C2.90248 4.31253 2.65063 4.06069 2.65063 3.75003C2.65063 3.43936 2.90248 3.18753 3.21313 3.18753H5.4632C5.50823 3.18753 5.52066 3.18748 5.53081 3.18723C5.9168 3.17744 6.25732 2.93202 6.38866 2.56893C6.39211 2.55938 6.39608 2.54761 6.41033 2.50488L6.49402 2.25372C6.54525 2.09973 6.58988 1.96555 6.65233 1.84563C6.89903 1.37186 7.35548 1.04287 7.88296 0.958642C8.01647 0.937319 8.15786 0.937409 8.32015 0.937514ZM7.34425 3.18753C7.38288 3.11176 7.41712 3.03303 7.44657 2.95161C7.45551 2.92688 7.46428 2.90056 7.47555 2.86675L7.55041 2.64219C7.61878 2.43706 7.63453 2.39522 7.65014 2.36523C7.73238 2.2073 7.88453 2.09764 8.06035 2.06956C8.09375 2.06423 8.13841 2.06253 8.35465 2.06253H10.8218C11.038 2.06253 11.0826 2.06423 11.1161 2.06956C11.2919 2.09764 11.444 2.2073 11.5262 2.36523C11.5418 2.39522 11.5576 2.43705 11.626 2.64219L11.7008 2.86662L11.7299 2.95162C11.7593 3.03304 11.7935 3.11176 11.8322 3.18753H7.34425Z" fill="#050B20"/>
    </svg>
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
