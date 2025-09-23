import React from 'react';

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

  const baseClasses = `
    w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white px-4 
    text-[15px] font-['Albert_Sans'] text-[#050B20] 
    outline-none focus:border-[#E82121] focus:ring-0 
    transition-colors duration-200
  `.trim();

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {type === 'select' ? (
          <>
            <select
              id={fieldId}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className={`${baseClasses} appearance-none cursor-pointer`}
              required={required}
              aria-label={label}
            >
              <option value="" disabled>
                {placeholder || `Select ${label}`}
              </option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {/* Dropdown arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z"
                  fill="#050B20"
                />
              </svg>
            </div>
          </>
        ) : (
          <input
            id={fieldId}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || `Enter ${label}`}
            className={baseClasses}
            required={required}
            aria-label={label}
          />
        )}
        
        {/* Floating label */}
        <label
          htmlFor={fieldId}
          className="absolute left-4 top-[10px] text-[13px] text-[#818181] font-['Albert_Sans'] pointer-events-none"
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
