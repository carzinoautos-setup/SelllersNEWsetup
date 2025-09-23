import React, { useState, useRef, useEffect } from 'react';
import { Select } from '../ui/select';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'select';
  options?: string[];
  className?: string;
  required?: boolean;
}

export function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  options = [],
  className = '',
  required = false,
}: FormFieldProps) {
  const fieldId = `field-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const inputClasses = `w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent`.trim();

  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
        {type === 'select' ? (
          <>
            <Select
              options={options}
              value={value || ''}
              onChange={(v) => onChange(v)}
              placeholder={placeholder || `Select ${label}`}
              className={`w-full h-full bg-transparent text-[15px] ${inputClasses} pr-10`}
            />
          </>
        ) : (
          <input
            id={fieldId}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || `Enter ${label}`}
            className={inputClasses}
            required={required}
            aria-label={label}
          />
        )}

        {/* Floating label */}
        <label
          htmlFor={fieldId}
          className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black font-['Albert_Sans']"
        >
          {label}
        </label>
      </div>
    </div>
  );
}

// Example usage:
/*
import { FormField } from '../components/ui/FormField';

function MyForm() {
  const [vinNumber, setVinNumber] = useState('');
  const [make, setMake] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormField
        label="Vin#"
        value={vinNumber}
        onChange={setVinNumber}
        placeholder="Enter Vin#"
      />
      <FormField
        label="Make"
        value={make}
        onChange={setMake}
        type="select"
        options={['Toyota', 'Honda', 'Ford', 'BMW']}
      />
    </div>
  );
}
*/
