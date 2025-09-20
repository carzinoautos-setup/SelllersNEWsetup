import { useEffect, useRef, useState } from "react";

interface SelectProps {
  options: string[];
  value?: string | null;
  onChange?: (val: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({ options, value: valueProp = null, onChange, placeholder = "Select", className = "" }: SelectProps) {
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
    <div ref={ref} className={`relative w-full`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className={`w-full text-left flex items-center justify-between px-4 bg-white border border-[#D9D9D9] rounded-xl ${className} focus:outline-none`}
      >
        <span className={`truncate text-[14px] text-[#24272C]`}>{value ?? placeholder}</span>
        <svg className="ml-2 w-4 h-4 text-[#9CA3AF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

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
