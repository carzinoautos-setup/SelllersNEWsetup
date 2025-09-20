import { FloatingInput } from "@/components/ui/floating-input";
import { Select } from "@/components/ui/select";

function FloatingSelect({ label, options, placeholder, className }: { label: string; options: string[]; placeholder: string; className?: string }) {
  return (
    <div className="relative">
      <Select
        options={options}
        placeholder={placeholder}
        className={`${className} pr-10`}
      />
      <label className="absolute left-4 top-[-10px] text-[13px] text-[#818181] font-dm bg-white px-1">
        {label}
      </label>
    </div>
  );
}

export function VehicleDetailsForm() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-medium text-[#24272C] font-albert mb-5">
        Enter vehicle details
      </h2>

      <div className="border border-[#B2B2B2] rounded-2xl p-8 opacity-95">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Row 1: Year, Body Type, Cylinders */}
          <div>
            <FloatingInput
              label="Year"
              placeholder="Select Year"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Body Type"
              options={["Cars", "Trucks", "SUVs", "Motorcycles"]}
              placeholder="Cars"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingInput
              label="Cylinders"
              placeholder="Select Cylinders"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 2: Vin#, Doors, Transmission */}
          <div>
            <FloatingInput
              label="Vin#"
              placeholder="Enter Vin#"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Doors"
              options={["2 Doors", "4 Doors", "5 Doors"]}
              placeholder="Select doors"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Transmission"
              options={["Manual", "Automatic", "CVT"]}
              placeholder="Select Transmission"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 3: Make, Fuel Type, Exterior Color */}
          <div>
            <FloatingSelect
              label="Make"
              options={["Toyota", "Honda", "Ford", "BMW", "Mercedes"]}
              placeholder="Select Make"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Fuel Type"
              options={["Gasoline", "Diesel", "Electric", "Hybrid"]}
              placeholder="Select Fuel Type"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Exterior Color"
              options={["Black", "White", "Silver", "Red", "Blue"]}
              placeholder="Select Exterior Color"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 4: Model, MPG City, Interior Color */}
          <div>
            <FloatingSelect
              label="Model"
              options={["Camry", "Accord", "F-150", "3 Series"]}
              placeholder="Select Model"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="MPG Gallon City"
              options={["20-25", "25-30", "30-35", "35+"]}
              placeholder="Select MPG City"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Interior Color"
              options={["Black", "Gray", "Tan", "White"]}
              placeholder="Select Interior Color"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 5: Trim, MPG HWY, Title Status */}
          <div>
            <FloatingInput
              label="Trim"
              placeholder="Select Trim"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="MPG Gallon HWY"
              options={["25-30", "30-35", "35-40", "40+"]}
              placeholder="Select MPG HWY"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Title Status"
              options={["Clean", "Salvage", "Rebuilt", "Lemon"]}
              placeholder="Select Title Status"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 6: Condition, Drive Train, Stock # */}
          <div>
            <FloatingSelect
              label="Condition"
              options={["Excellent", "Good", "Fair", "Poor"]}
              placeholder="Select Condition"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Drive Train"
              options={["FWD", "RWD", "AWD", "4WD"]}
              placeholder="Select Drive Train"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingInput
              label="Stock #"
              placeholder="Enter Stock #"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 7: Is certified, Engine Type, Listing Status */}
          <div>
            <FloatingInput
              label="Is certified"
              placeholder="Select one"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingInput
              label="Engine Type"
              placeholder="Enter engine type"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingSelect
              label="Listing Status"
              options={["Active", "Sold", "Pending", "Draft"]}
              placeholder="Select Listing status"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 8: Mileage, Engine Size */}
          <div>
            <FloatingInput
              label="Mileage"
              placeholder="Enter Miles"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div>
            <FloatingInput
              label="Engine Size (Liters)"
              placeholder="Enter engine size"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Empty third column */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
