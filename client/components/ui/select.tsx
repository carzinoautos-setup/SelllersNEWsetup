import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface SelectProps {
  options: string[];
  value?: string | null;
  onChange?: (val: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({
  options,
  value: valueProp = null,
  onChange,
  placeholder = "Select",
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(valueProp);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const handleSelect = (opt: string) => {
    setValue(opt);
    onChange?.(opt);
    setOpen(false);
  };

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
          if (e.key === "Enter" || e.key === " ") setOpen((s) => !s);
        }}
        className={`w-full h-full text-left flex items-center justify-between bg-transparent rounded-xl focus:outline-none text-[15px] font-normal leading-[22.5px] cursor-pointer`}
      >
        {/* Ensure we show placeholder when value is empty */}
        {(() => {
          const display = value && value.length ? value : placeholder;
          const isPlaceholder = !(value && value.length);
          return (
            <span
              className={`inline-flex items-center h-full basis-0 flex-grow text-[14px] ${isPlaceholder ? "text-[#9CA3AF]" : "text-[#24272C]"} truncate leading-[21px]`}
            >
              {display}
            </span>
          );
        })()}

        {/* Clear button when a value is selected */}
        {value && value.length ? (
          <button
            type="button"
            aria-label="Clear"
            onClick={(e) => {
              e.stopPropagation();
              setValue(null);
              onChange?.("");
            }}
            className="ml-2 mr-1 w-4 h-4 text-[#9CA3AF] hover:text-[#6B7280] flex-shrink-0"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : null}

        {/* Chevron aligned to center */}
        <svg
          className="w-4 h-4 text-[#E82121] flex-shrink-0 self-center"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 mt-2 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50 max-h-56 overflow-auto"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              onClick={() => handleSelect(opt)}
              className={`px-4 py-2 cursor-pointer hover:bg-[#F3F4F6] ${value === opt ? "bg-[#EEF2FF] font-medium" : ""}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
