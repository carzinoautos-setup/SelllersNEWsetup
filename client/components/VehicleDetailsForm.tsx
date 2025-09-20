import { FloatingInput } from "@/components/ui/floating-input";
import { Select } from "@/components/ui/select";

export function VehicleDetailsForm() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-medium text-[#24272C] font-albert mb-5">
        Enter vehicle details
      </h2>

      <div className="border border-[#B2B2B2] rounded-2xl p-8 opacity-95">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Row 1: Year, Body Type, Cylinders */}
          <div className="space-y-2">
            <FloatingInput
              label="Year"
              placeholder="Select Year"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div className="space-y-2">
            <Select 
              options={["Cars", "Trucks", "SUVs", "Motorcycles"]} 
              placeholder="Cars" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Body Type
            </div>
          </div>

          <div className="space-y-2">
            <FloatingInput
              label="Cylinders"
              placeholder="Select Cylinders"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 2: Vin#, Doors, Transmission */}
          <div className="space-y-2">
            <FloatingInput
              label="Vin#"
              placeholder="Enter Vin#"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div className="space-y-2">
            <Select 
              options={["2 Doors", "4 Doors", "5 Doors"]} 
              placeholder="Select doors" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Doors
            </div>
          </div>

          <div className="space-y-2">
            <Select 
              options={["Manual", "Automatic", "CVT"]} 
              placeholder="Select Transmission" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Transmission
            </div>
          </div>

          {/* Row 3: Make, Fuel Type, Exterior Color */}
          <div className="space-y-2">
            <Select 
              options={["Toyota", "Honda", "Ford", "BMW", "Mercedes"]} 
              placeholder="Select Make" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Make
            </div>
          </div>

          <div className="space-y-2">
            <Select 
              options={["Gasoline", "Diesel", "Electric", "Hybrid"]} 
              placeholder="Select Fuel Type" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Fuel Type
            </div>
          </div>

          <div className="space-y-2">
            <Select 
              options={["Black", "White", "Silver", "Red", "Blue"]} 
              placeholder="Select Exterior Color" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Exterior Color
            </div>
          </div>

          {/* Row 4: Model, MPG City, Interior Color */}
          <div className="space-y-2">
            <Select 
              options={["Camry", "Accord", "F-150", "3 Series"]} 
              placeholder="Select Model" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Model
            </div>
          </div>

          <div className="space-y-2">
            <Select 
              options={["20-25", "25-30", "30-35", "35+"]} 
              placeholder="Select MPG City" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              MPG Gallon City
            </div>
          </div>

          <div className="space-y-2">
            <Select 
              options={["Black", "Gray", "Tan", "White"]} 
              placeholder="Select Interior Color" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Interior Color
            </div>
          </div>

          {/* Row 5: Trim, MPG HWY, Title Status */}
          <div className="space-y-2">
            <FloatingInput
              label="Trim"
              placeholder="Select Trim"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div className="space-y-2">
            <Select 
              options={["25-30", "30-35", "35-40", "40+"]} 
              placeholder="Select MPG HWY" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              MPG Gallon HWY
            </div>
          </div>

          <div className="space-y-2">
            <Select 
              options={["Clean", "Salvage", "Rebuilt", "Lemon"]} 
              placeholder="Select Title Status" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Title Status
            </div>
          </div>

          {/* Row 6: Condition, Drive Train, Stock # */}
          <div className="space-y-2">
            <Select 
              options={["Excellent", "Good", "Fair", "Poor"]} 
              placeholder="Select Condition" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Condition
            </div>
          </div>

          <div className="space-y-2">
            <Select 
              options={["FWD", "RWD", "AWD", "4WD"]} 
              placeholder="Select Drive Train" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Drive Train
            </div>
          </div>

          <div className="space-y-2">
            <FloatingInput
              label="Stock #"
              placeholder="Enter Stock #"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          {/* Row 7: Is certified, Engine Type, Listing Status */}
          <div className="space-y-2">
            <FloatingInput
              label="Is certified"
              placeholder="Select one"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div className="space-y-2">
            <FloatingInput
              label="Engine Type"
              placeholder="Enter engine type"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div className="space-y-2">
            <Select 
              options={["Active", "Sold", "Pending", "Draft"]} 
              placeholder="Select Listing status" 
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
            <div className="absolute top-3 left-4 text-[13px] text-[#818181] font-dm bg-white px-1">
              Listing Status
            </div>
          </div>

          {/* Row 8: Mileage, Engine Size */}
          <div className="space-y-2">
            <FloatingInput
              label="Mileage"
              placeholder="Enter Miles"
              className="h-[60px] rounded-xl border-[#E1E1E1] text-[15px] font-dm"
            />
          </div>

          <div className="space-y-2">
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
