import React from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  className?: string;
}

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className={cn("relative", className && "w-full")}>
        <input
          ref={ref}
          {...props}
          placeholder={props.placeholder ?? " "}
          className={cn(
            "peer w-full bg-white border border-[#E1E1E1] rounded-xl px-4 py-3 text-[15px] text-[#050B20] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#E82121]",
            className
          )}
        />
        <label
          className="absolute left-4 top-[-10px] text-[13px] text-[#818181] transition-all peer-placeholder-shown:top-[20px] peer-placeholder-shown:text-[13px] peer-placeholder-shown:text-[#818181] peer-focus:top-[-10px] peer-focus:text-[13px] peer-focus:text-[#818181] bg-white px-1"
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
