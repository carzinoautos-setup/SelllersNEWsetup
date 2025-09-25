import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function EnterVehicleDetails2() {
  const [vin, setVin] = useState("");
  const [trim, setTrim] = useState("");
  const [color, setColor] = useState("");
  const [mileage, setMileage] = useState("");

  return (
    <DashboardLayout>
      <div className="flex-1" />
    </DashboardLayout>
  );
}
