import React, { useState, useEffect, useRef } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Select } from "../components/ui/select";
import { Link } from "react-router-dom";

// dnd-kit
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function VehicleDetailsFormCopy() {
  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [isCertified, setIsCertified] = useState("");
  const [exteriorColorLocal, setExteriorColorLocal] = useState("");
  const [year, setYear] = useState("");
  const [trim, setTrim] = useState("");
  const [mileageLocal, setMileageLocal] = useState("");
  const [titleStatusLocal, setTitleStatusLocal] = useState("");
  const [makeLocal, setMakeLocal] = useState("");
  const [conditionLocal, setConditionLocal] = useState("");
  const [interiorColorLocal2, setInteriorColorLocal2] = useState("");
  const [stock, setStock] = useState("");

  const modelOptions = ["440 xDrive Coupe 2D", "Base", "Premium"];
  const certifiedOptions = ["Yes", "No"];
  const exteriorColorOptionsLocal = ["White", "Black", "Silver", "Red", "Blue"];
  const yearOptionsLocal = ["2023", "2022", "2021", "2020"];
  const titleStatusOptionsLocal = ["Clean", "Salvage", "Lien"];
  const makeOptionsLocal = ["BMW", "Audi", "Toyota", "Ford"];
  const conditionOptionsLocal = ["New", "Used", "Certified"];
  const interiorColorOptionsLocal = ["Black", "Gray", "Beige", "Brown"];

  return (
    <div className="bg-white rounded-2xl pb-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {/* Vin# */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Vin#
            </label>
            <input
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              placeholder="Enter Vin#"
              className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
              style={{ fontFamily: "Albert Sans" }}
            />
          </div>

          {/* Model */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Model
            </label>
            <Select
              options={modelOptions}
              value={model}
              onChange={(v) => setModel(v)}
              placeholder="Select Model"
              className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
            />
          </div>

          {/* Is certified */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Is certified
            </label>
            <Select
              options={certifiedOptions}
              value={isCertified}
              onChange={(v) => setIsCertified(v)}
              placeholder="Select one"
              className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
            />
          </div>

          {/* Exterior Color */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Exterior Color
            </label>
            <Select
              options={exteriorColorOptionsLocal}
              value={exteriorColorLocal}
              onChange={(v) => setExteriorColorLocal(v)}
              placeholder="Select color"
              className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {/* Year */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Year
            </label>
            <Select
              options={yearOptionsLocal}
              value={year}
              onChange={(v) => setYear(v)}
              placeholder="Enter Year"
              className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
            />
          </div>

          {/* Trim */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Trim
            </label>
            <input
              type="text"
              value={trim}
              onChange={(e) => setTrim(e.target.value)}
              placeholder="Enter Trim"
              className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
              style={{ fontFamily: "Albert Sans" }}
            />
          </div>

          {/* Mileage */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Mileage
            </label>
            <input
              type="text"
              value={mileageLocal}
              onChange={(e) => setMileageLocal(e.target.value)}
              placeholder="Enter Miles"
              className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
              style={{ fontFamily: "Albert Sans" }}
            />
          </div>

          {/* Title Status */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Title Status
            </label>
            <Select
              options={titleStatusOptionsLocal}
              value={titleStatusLocal}
              onChange={(v) => setTitleStatusLocal(v)}
              placeholder="Select title status"
              className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {/* Make */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Make
            </label>
            <Select
              options={makeOptionsLocal}
              value={makeLocal}
              onChange={(v) => setMakeLocal(v)}
              placeholder="Select Make"
              className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
            />
          </div>

          {/* Condition */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Condition
            </label>
            <Select
              options={conditionOptionsLocal}
              value={conditionLocal}
              onChange={(v) => setConditionLocal(v)}
              placeholder="Select Condition"
              className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
            />
          </div>

          {/* Interior Color */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Interior Color
            </label>
            <Select
              options={interiorColorOptionsLocal}
              value={interiorColorLocal2}
              onChange={(v) => setInteriorColorLocal2(v)}
              placeholder="Select Color"
              className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
            />
          </div>

          {/* Stock# */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>
              Stock#
            </label>
            <input
              type="text"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Enter Stock Number"
              className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
              style={{ fontFamily: "Albert Sans" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VindecoderRev1() {
  // Step 1: Basic Details
  const [mileage, setMileage] = useState("");
  const [engine, setEngine] = useState("6.7 Liter");
  const [vehicleTrim, setVehicleTrim] = useState("440 xDrive Coupe 2D");
  const [transmission, setTransmission] = useState("");
  const [drivetrain, setDrivetrain] = useState("FWD");
  const [exteriorColor, setExteriorColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [vehicleLocationState, setVehicleLocationState] = useState("");
  const [vehicleLocationCity, setVehicleLocationCity] = useState("");
  const [vehicleLocationZip, setVehicleLocationZip] = useState("");

  // Rev1 additional fields (local to vindecoderrev1)
  const [vinRev, setVinRev] = useState("");
  const [modelRev, setModelRev] = useState("");
  const [isCertifiedRev, setIsCertifiedRev] = useState("");
  const [yearRev, setYearRev] = useState("");
  const [trimRev, setTrimRev] = useState("");
  const [mileageRev, setMileageRev] = useState("");
  const [titleStatusRev, setTitleStatusRev] = useState("");
  const [makeRev, setMakeRev] = useState("");
  const [conditionRev, setConditionRev] = useState("");
  const [interiorColorRev, setInteriorColorRev] = useState("");
  const [stockRev, setStockRev] = useState("");

  // Step 2: Features
  const [selectedFeatures, setSelectedFeatures] = useState({
    // Features
    navigationSystem: false,
    remoteStart: true,
    keylessEntry: false,
    handsFree: false,
    powerFoldingSideMirrors: false,
    rainSensingWipers: false,
    homelink: false,
    splitFoldingRearSeats: false,
    adjustableSteeringColumn: false,

    // Exterior
    alloyWheels: false,
    ledHeadlights: true,
    fogLights: false,
    roofRack: false,
    tintedWindows: false,
    powerTailgate: false,
    towHitch: false,
    runningBoards: false,
    bodyKit: false,
    rearSpoiler: false,

    // Interior
    leatherSeats: false,
    heatedSeats: true,
    sunroof: false,
    heatedSteeringWheel: false,
    touchscreenDisplay: false,
    ventilatedSeats: false,
    memoryDriverSeat: false,
    ambientLighting: false,
    rubberFlooring: false,
    woodTrim: false,

    // Technology
    appleCarPlay: false,
    bluetooth: true,
    touchscreenDisplayTech: false,
    wirelessConnectivity: false,
    rearSeatScreens: false,
    dvdPlayer: false,
    premiumSound: false,
    steeringWheelAudio: false,
    wifiHotspot: false,
    voiceCommand: false,

    // Safety
    airbags: false,
    passengerAirbag: true,
    antiLockBraking: false,
    backupCamera: false,
    laneDeparture: false,
    adaptiveCruise: false,
    parkingSensors: false,
    automaticHighBeams: false,
    tirePressure: false,
    electronicStability: false,
  });

  // Step 3: Price and Description
  const [salePrice, setSalePrice] = useState("");
  const [description, setDescription] = useState("");
  const [aiDescription, setAiDescription] = useState("");
  const [showAiDescription, setShowAiDescription] = useState(true);

  // Step 4: Photos
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>([
    {
      id: "1",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/38c4b622a6c9fb83b718c6460c49dbd9fcf44c44?width=332",
    },
    { id: "2", url: "/placeholder.svg" },
    {
      id: "3",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/38c4b622a6c9fb83b718c6460c49dbd9fcf44c44?width=332",
    },
    {
      id: "4",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/38c4b622a6c9fb83b718c6460c49dbd9fcf44c44?width=332",
    },
    {
      id: "5",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/38c4b622a6c9fb83b718c6460c49dbd9fcf44c44?width=332",
    },
  ]);

  const engineOptions = ["6.7 Liter", "3.5 Liter", "2.0 Liter"];
  const trimOptions = ["440 xDrive Coupe 2D", "Base", "Premium"];
  const transmissionOptions = ["Manual", "Automatic", "CVT"];
  const drivetrainOptions = ["FWD", "RWD", "AWD", "4WD"];
  const exteriorColorOptions = ["White", "Black", "Silver", "Red", "Blue"];
  const vehicleLocationStateOptions = [
    "California",
    "Washington",
    "Texas",
    "Florida",
    "New York",
    "Illinois",
  ];

  const vehicleCityMap: Record<string, string[]> = {
    California: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
    Washington: ["Seattle", "Tacoma", "Bellevue", "Spokane"],
    Texas: ["Houston", "Dallas", "Austin", "San Antonio"],
    Florida: ["Miami", "Orlando", "Tampa", "Jacksonville"],
    "New York": ["New York", "Buffalo", "Rochester", "Syracuse"],
    Illinois: ["Chicago", "Springfield", "Naperville", "Peoria"],
  };

  const allCities = Object.values(vehicleCityMap).flat();
  const vehicleLocationCityOptions = vehicleLocationState
    ? vehicleCityMap[vehicleLocationState]
    : allCities;

  useEffect(() => {
    // reset dependent fields when parent selection changes
    setVehicleLocationCity("");
    setVehicleLocationZip("");
  }, [vehicleLocationState]);

  useEffect(() => {
    // reset zip when city changes
    setVehicleLocationZip("");
  }, [vehicleLocationCity]);

  const vehicleZipMap: Record<string, string[]> = {
    Seattle: ["98101", "98102", "98103"],
    Tacoma: ["98402", "98403", "98404"],
    Bellevue: ["98004", "98005"],
    Spokane: ["99201", "99202"],
    "Los Angeles": ["90001", "90002", "90003"],
    "San Francisco": ["94102", "94103"],
    "San Diego": ["92101", "92102"],
    Sacramento: ["95814", "95815"],
    Houston: ["77001", "77002"],
    Dallas: ["75201", "75202"],
    Austin: ["73301", "78701"],
    "San Antonio": ["78201", "78202"],
    Miami: ["33101", "33102"],
    Orlando: ["32801", "32802"],
    Tampa: ["33601", "33602"],
    Jacksonville: ["32201", "32202"],
    "New York": ["10001", "10002"],
    Buffalo: ["14201"],
    Rochester: ["14602"],
    Syracuse: ["13202"],
    Chicago: ["60601", "60602"],
    Springfield: ["62701"],
    Naperville: ["60540"],
    Peoria: ["61602"],
  };

  const allZips = Object.values(vehicleZipMap).flat();
  const vehicleLocationZipOptions = vehicleLocationCity
    ? vehicleZipMap[vehicleLocationCity] || []
    : allZips.slice(0, 50);
  const interiorColorOptions = ["Black", "Gray", "Beige", "Brown"];

  // Rev1 select options
  const modelOptionsRev = ["440 xDrive Coupe 2D", "Base", "Premium"];
  const certifiedOptionsRev = ["Yes", "No"];
  const yearOptionsRev = ["2023", "2022", "2021", "2020"];
  const titleStatusOptionsRev = ["Clean", "Salvage", "Lien"];
  const makeOptionsRev = ["BMW", "Audi", "Toyota", "Ford"];
  const conditionOptionsRev = ["New", "Used", "Certified"];
  const interiorColorOptionsRev = ["Black", "Gray", "Beige", "Brown"];

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  const [featurePhotoId, setFeaturePhotoId] = useState<string | null>(null);

  // AI input combined string (captures all field labels+values on this page)
  const [aiInput, setAiInput] = useState("");
  // raw AI Get values box content (includes prefixed headline)
  const [aiValues, setAiValues] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Helper to convert camelCase keys to Title Case labels
  function prettyLabel(key: string) {
    const result = key
      // insert space before capital letters
      .replace(/([A-Z])/g, " $1")
      // replace underscores
      .replace(/_/g, " ")
      .trim();
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  useEffect(() => {
    // Build features string
    const featureEntries = Object.entries(selectedFeatures)
      .filter(([, val]) => !!val)
      .map(([k]) => prettyLabel(k));

    const parts: string[] = [];
    if (mileage) parts.push(`Mileage: ${mileage}`);
    if (engine) parts.push(`Engine: ${engine}`);
    if (vehicleTrim) parts.push(`Trim: ${vehicleTrim}`);
    if (transmission) parts.push(`Transmission: ${transmission}`);
    if (drivetrain) parts.push(`Drivetrain: ${drivetrain}`);
    if (exteriorColor) parts.push(`Exterior Color: ${exteriorColor}`);
    if (interiorColor) parts.push(`Interior Color: ${interiorColor}`);
    if (vehicleLocationState)
      parts.push(`Location State: ${vehicleLocationState}`);
    if (vehicleLocationCity)
      parts.push(`Location City: ${vehicleLocationCity}`);
    if (vehicleLocationZip) parts.push(`Location Zip: ${vehicleLocationZip}`);
    if (salePrice) parts.push(`Price: ${salePrice}`);
    if (featureEntries.length)
      parts.push(`Features: ${featureEntries.join("; ")}`);

    const combined = parts.join(", ");
    setAiInput(combined);
    // Mirror into the AI Get values box (include headline prefix)
    const prefix = "2018 BMW 530i xDrive\n\n";
    setAiValues(prefix + combined);
  }, [
    mileage,
    engine,
    vehicleTrim,
    transmission,
    drivetrain,
    exteriorColor,
    interiorColor,
    vehicleLocationState,
    vehicleLocationCity,
    vehicleLocationZip,
    salePrice,
    selectedFeatures,
  ]);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    try {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          ((window as any).DocumentTouch &&
            document instanceof (window as any).DocumentTouch),
      );
    } catch (e) {
      setIsTouchDevice(false);
    }
  }, []);

  // dnd-kit sensors (defined here so hooks follow rules)
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    }),
    useSensor(PointerSensor),
  );

  const onDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", String(index));
  };

  const onDrop = (e: React.DragEvent, dropIndex: number) => {
    const dragIndex = Number(e.dataTransfer.getData("text/plain"));
    if (isNaN(dragIndex)) return;
    setPhotos((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(dragIndex, 1);
      copy.splice(dropIndex, 0, moved);
      return copy;
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newPhotos: { id: string; url: string }[] = Array.from(files).map(
        (file, i) => ({
          id: `${Date.now()}-${i}`,
          url: URL.createObjectURL(file),
        }),
      );
      setPhotos((prev) => [...prev, ...newPhotos].slice(0, 15));
    }
  };

  const deletePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    if (featurePhotoId === id) setFeaturePhotoId(null);
  };

  const renderCheckbox = (key: string, label: string, checked: boolean) => (
    <div key={key} className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={() => toggleFeature(key)}
        className={`w-5 h-5 rounded border flex items-center justify-center ${
          checked
            ? "bg-[#E82121] border-[#E82121]"
            : "bg-white border-[#B2B2B2]"
        }`}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M9.76764 1.63463C9.45824 1.32482 8.95582 1.32501 8.64601 1.63463L3.59787 6.68296L1.35419 4.4393C1.04438 4.12949 0.542174 4.12949 0.23236 4.4393C-0.0774534 4.74912 -0.0774534 5.25132 0.23236 5.56113L3.03684 8.36561C3.19165 8.52042 3.39464 8.59802 3.59765 8.59802C3.80067 8.59802 4.00386 8.52061 4.15867 8.36561L9.76764 2.75644C10.0775 2.44684 10.0775 1.94442 9.76764 1.63463Z"
              fill="white"
            />
          </svg>
        )}
      </button>
      <label
        className="text-[15px] text-[#050B20] leading-[24px] cursor-pointer"
        style={{ fontFamily: "DM Sans" }}
      >
        {label}
      </label>
    </div>
  );

  function SortableThumbnail({
    photo,
    index,
    featurePhotoId,
    setFeaturePhotoId,
    deletePhoto,
  }: {
    photo: { id: string; url: string };
    index: number;
    featurePhotoId: string | null;
    setFeaturePhotoId: (id: string) => void;
    deletePhoto: (id: string) => void;
  }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: photo.id });
    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition,
      touchAction: "none",
      WebkitUserSelect: "none",
      userSelect: "none",
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="relative w-28 sm:w-32 md:w-36 lg:w-44 aspect-square rounded-[12px] overflow-hidden bg-gray-50"
      >
        <img
          src={photo.url}
          alt={`Photo ${index + 1}`}
          className="w-full h-full object-cover"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />

        <div className="absolute top-1 left-1">
          {featurePhotoId === photo.id ? (
            <div className="w-6 h-6 bg-[#E82121] rounded-full flex items-center justify-center text-white shadow">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  fill="currentColor"
                />
              </svg>
            </div>
          ) : (
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onClick={() => setFeaturePhotoId(photo.id)}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center border shadow"
              aria-label="Set as feature"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </button>
          )}
        </div>

        <button
          onPointerDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={() => deletePhoto(photo.id)}
          className="absolute bottom-1 right-1 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white shadow"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9 3h6l1 2h3v2H3V5h3l1-2zM6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7zM9 10v8h2v-8H9zm4 0v8h2v-8h-2z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    );
  }

  const handleSubmit = () => {
    const payload = {
      mileage,
      engine,
      vehicleTrim,
      transmission,
      drivetrain,
      exteriorColor,
      interiorColor,
      salePrice,
      description,
      photos,
      selectedFeatures,
    };

    console.log("Submitting listing:", payload);
    alert("Listing submitted");
  };

  return (
    <DashboardLayout>
      <div className="flex-1">
        {/* Vehicle Info Header */}
        <div className="w-full bg-white border-b border-[#EDEDED]">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <span
                className="text-[16px] font-bold text-[#090909] leading-[140%]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Your listing:
              </span>
              <span
                className="text-[16px] font-normal text-[#090909] leading-[140%]"
                style={{ fontFamily: "Albert Sans" }}
              >
                2018 BMW 530i xDrive
              </span>
              <span
                className="text-[16px] font-normal text-black leading-[140%]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Vin#: VA5768PSJ6789H1222
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-8 overflow-x-hidden">
          {/* Step 1: Basic Details */}
          <div className="mb-12">
            {/* Header */}
            <div className="mb-6">
              <h1
            className="text-[20px] font-semibold"
            style={{ fontFamily: "Albert Sans" }}
          >
            <span className="text-[#090909]">Basic Details- </span>
          </h1>


          {/* Original Step 1 test header content retained */}
              <p
                className="text-[14px] text-black leading-[140%] max-w-[955px]"
                style={{ fontFamily: "Albert Sans" }}
              >
                We've fetched details for your vehicle. Check that the
                selections are correct and add anything missing.
              </p>
              <div className="w-full h-[0.5px] bg-[#EDEDED] my-6"></div>
            </div>

            {/* Form */}
            <div className="bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Column 1 */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Vin#</label>
                  <input
                    type="text"
                    value={vinRev}
                    onChange={(e) => setVinRev(e.target.value)}
                    placeholder="Enter Vin#"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Model</label>
                  <Select
                    options={modelOptionsRev}
                    value={modelRev}
                    onChange={(v) => setModelRev(v)}
                    placeholder="Select Model"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Is certified</label>
                  <Select
                    options={certifiedOptionsRev}
                    value={isCertifiedRev}
                    onChange={(v) => setIsCertifiedRev(v)}
                    placeholder="Select one"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Year</label>
                  <Select
                    options={yearOptionsRev}
                    value={yearRev}
                    onChange={(v) => setYearRev(v)}
                    placeholder="Enter Year"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Trim</label>
                  <input
                    type="text"
                    value={trimRev}
                    onChange={(e) => setTrimRev(e.target.value)}
                    placeholder="Enter Trim"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Mileage</label>
                  <input
                    type="text"
                    value={mileageRev}
                    onChange={(e) => setMileageRev(e.target.value)}
                    placeholder="Enter Miles"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Title Status</label>
                  <Select
                    options={titleStatusOptionsRev}
                    value={titleStatusRev}
                    onChange={(v) => setTitleStatusRev(v)}
                    placeholder="Select title status"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Make</label>
                  <Select
                    options={makeOptionsRev}
                    value={makeRev}
                    onChange={(v) => setMakeRev(v)}
                    placeholder="Select Make"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Condition</label>
                  <Select
                    options={conditionOptionsRev}
                    value={conditionRev}
                    onChange={(v) => setConditionRev(v)}
                    placeholder="Select Condition"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Interior Color</label>
                  <Select
                    options={interiorColorOptionsRev}
                    value={interiorColorRev}
                    onChange={(v) => setInteriorColorRev(v)}
                    placeholder="Select Color"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C]" style={{ fontFamily: "Albert Sans" }}>Stock#</label>
                  <input
                    type="text"
                    value={stockRev}
                    onChange={(e) => setStockRev(e.target.value)}
                    placeholder="Enter Stock Number"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Step 2: Features */}
          <div className="mb-12">
            {/* Header */}
            <div className="mb-6">
              <h1
                className="text-[20px] font-semibold"
                style={{ fontFamily: "Albert Sans" }}
              >
                <span className="text-[#090909]">Basic Details- </span>
                <span className="text-[#E82121]">Step 2</span>
              </h1>
              <p
                className="text-[14px] text-black leading-[140%] max-w-[955px]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Carzino makes it simple—we've pulled in your unit's features
                automatically. All you need to do is confirm or adjust what's
                here.
              </p>
              <div className="w-full h-[0.5px] bg-[#EDEDED] my-6"></div>
            </div>

            <VehicleDetailsFormCopy />

            {/* Features Grid */}
            <div className="bg-white rounded-2xl pl-[2px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 items-start">
                {/* Features Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h3
                      className="text-[19px] font-semibold text-[#050B20] underline mb-4"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Features
                    </h3>
                    <div className="space-y-2">
                      {renderCheckbox(
                        "navigationSystem",
                        "Navigation System",
                        selectedFeatures.navigationSystem,
                      )}
                      {renderCheckbox(
                        "remoteStart",
                        "Remote Start",
                        selectedFeatures.remoteStart,
                      )}
                      {renderCheckbox(
                        "keylessEntry",
                        "Keyless Entry",
                        selectedFeatures.keylessEntry,
                      )}
                      {renderCheckbox(
                        "handsFree",
                        "Hands-Free",
                        selectedFeatures.handsFree,
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="space-y-2">
                      {renderCheckbox(
                        "powerFoldingSideMirrors",
                        "Power Folding Side Mirrors",
                        selectedFeatures.powerFoldingSideMirrors,
                      )}
                      {renderCheckbox(
                        "rainSensingWipers",
                        "Rain-Sensing Wipers",
                        selectedFeatures.rainSensingWipers,
                      )}
                      {renderCheckbox(
                        "homelink",
                        "Homelink",
                        selectedFeatures.homelink,
                      )}
                      {renderCheckbox(
                        "splitFoldingRearSeats",
                        "Split-Folding Rear Seats",
                        selectedFeatures.splitFoldingRearSeats,
                      )}
                      {renderCheckbox(
                        "adjustableSteeringColumn",
                        "Adjustable Steering Column",
                        selectedFeatures.adjustableSteeringColumn,
                      )}
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-[19px] font-semibold text-[#050B20] underline mb-4"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Exterior
                    </h3>
                    <div className="space-y-2">
                      {renderCheckbox(
                        "alloyWheels",
                        "Alloy Wheels",
                        selectedFeatures.alloyWheels,
                      )}
                      {renderCheckbox(
                        "ledHeadlights",
                        "LED Headlights",
                        selectedFeatures.ledHeadlights,
                      )}
                      {renderCheckbox(
                        "fogLights",
                        "Fog Lights",
                        selectedFeatures.fogLights,
                      )}
                      {renderCheckbox(
                        "roofRack",
                        "Roof Rack",
                        selectedFeatures.roofRack,
                      )}
                      {renderCheckbox(
                        "tintedWindows",
                        "Tinted Windows",
                        selectedFeatures.tintedWindows,
                      )}
                      {renderCheckbox(
                        "powerTailgate",
                        "Power Tailgate",
                        selectedFeatures.powerTailgate,
                      )}
                      {renderCheckbox(
                        "towHitch",
                        "Tow Hitch / Towing Package",
                        selectedFeatures.towHitch,
                      )}
                      {renderCheckbox(
                        "runningBoards",
                        "Running Boards",
                        selectedFeatures.runningBoards,
                      )}
                      {renderCheckbox(
                        "bodyKit",
                        "Body Kit/Sport Package",
                        selectedFeatures.bodyKit,
                      )}
                      {renderCheckbox(
                        "rearSpoiler",
                        "Rear Spoiler",
                        selectedFeatures.rearSpoiler,
                      )}
                    </div>
                  </div>
                </div>

                {/* Interior Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h3
                      className="text-[19px] font-semibold text-[#050B20] underline mb-4"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Interior
                    </h3>
                    <div className="space-y-2">
                      {renderCheckbox(
                        "leatherSeats",
                        "Leather Seats",
                        selectedFeatures.leatherSeats,
                      )}
                      {renderCheckbox(
                        "heatedSeats",
                        "Heated Seats",
                        selectedFeatures.heatedSeats,
                      )}
                      {renderCheckbox(
                        "sunroof",
                        "Sunroof /Panoramic Roof",
                        selectedFeatures.sunroof,
                      )}
                      {renderCheckbox(
                        "heatedSteeringWheel",
                        "Heated Steering Wheel",
                        selectedFeatures.heatedSteeringWheel,
                      )}
                      {renderCheckbox(
                        "touchscreenDisplay",
                        "Touchscreen Display",
                        selectedFeatures.touchscreenDisplay,
                      )}
                      {renderCheckbox(
                        "ventilatedSeats",
                        "Ventilated / Cooled Seats",
                        selectedFeatures.ventilatedSeats,
                      )}
                      {renderCheckbox(
                        "memoryDriverSeat",
                        "Memory Driver Seat Settings",
                        selectedFeatures.memoryDriverSeat,
                      )}
                      {renderCheckbox(
                        "ambientLighting",
                        "Ambient Interior Lighting",
                        selectedFeatures.ambientLighting,
                      )}
                      {renderCheckbox(
                        "rubberFlooring",
                        "Rubber Flooring",
                        selectedFeatures.rubberFlooring,
                      )}
                      {renderCheckbox(
                        "woodTrim",
                        "Wood or Aluminum Trim",
                        selectedFeatures.woodTrim,
                      )}
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-[19px] font-semibold text-[#050B20] underline mb-4"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Technology
                    </h3>
                    <div className="space-y-2">
                      {renderCheckbox(
                        "appleCarPlay",
                        "Apple CarPlay/Android Auto",
                        selectedFeatures.appleCarPlay,
                      )}
                      {renderCheckbox(
                        "bluetooth",
                        "Bluetooth",
                        selectedFeatures.bluetooth,
                      )}
                      {renderCheckbox(
                        "touchscreenDisplayTech",
                        "Touchscreen Display",
                        selectedFeatures.touchscreenDisplayTech,
                      )}
                      {renderCheckbox(
                        "wirelessConnectivity",
                        "Wireless Phone Connectivity",
                        selectedFeatures.wirelessConnectivity,
                      )}
                      {renderCheckbox(
                        "rearSeatScreens",
                        "Rear Seat Entertainment Screens",
                        selectedFeatures.rearSeatScreens,
                      )}
                      {renderCheckbox(
                        "dvdPlayer",
                        "DVD Player",
                        selectedFeatures.dvdPlayer,
                      )}
                      {renderCheckbox(
                        "premiumSound",
                        "Premium Sound System",
                        selectedFeatures.premiumSound,
                      )}
                      {renderCheckbox(
                        "steeringWheelAudio",
                        "Steering Wheel Audio Controls",
                        selectedFeatures.steeringWheelAudio,
                      )}
                      {renderCheckbox(
                        "wifiHotspot",
                        "Wi-Fi Hotspot Capability",
                        selectedFeatures.wifiHotspot,
                      )}
                      {renderCheckbox(
                        "voiceCommand",
                        "Voice Command System",
                        selectedFeatures.voiceCommand,
                      )}
                    </div>
                  </div>
                </div>

                {/* Mechanical + Safety Column: Mechanical then Safety stacked */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h3
                      className="text-[19px] font-semibold text-[#050B20] underline mb-4"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Mechanical
                    </h3>
                    <div className="space-y-2">
                      {renderCheckbox(
                        "airbags",
                        "Airbags",
                        selectedFeatures.airbags,
                      )}
                      {renderCheckbox(
                        "passengerAirbag",
                        "Airbag - Passenger",
                        selectedFeatures.passengerAirbag,
                      )}
                      {renderCheckbox(
                        "antiLockBraking",
                        "Anti-lock Braking System",
                        selectedFeatures.antiLockBraking,
                      )}
                      {renderCheckbox(
                        "backupCamera",
                        "Backup Camera",
                        selectedFeatures.backupCamera,
                      )}
                      {renderCheckbox(
                        "laneDeparture",
                        "Lane Departure Warning",
                        selectedFeatures.laneDeparture,
                      )}
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-[19px] font-semibold text-[#050B20] underline mb-4"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Safety Options
                    </h3>
                    <div className="space-y-2">
                      {renderCheckbox(
                        "adaptiveCruise",
                        "Adaptive Cruise Control",
                        selectedFeatures.adaptiveCruise,
                      )}
                      {renderCheckbox(
                        "parkingSensors",
                        "Parking Sensors",
                        selectedFeatures.parkingSensors,
                      )}
                      {renderCheckbox(
                        "automaticHighBeams",
                        "Automatic High Beams",
                        selectedFeatures.automaticHighBeams,
                      )}
                      {renderCheckbox(
                        "tirePressure",
                        "Tire Pressure Monitoring System",
                        selectedFeatures.tirePressure,
                      )}
                      {renderCheckbox(
                        "electronicStability",
                        "Electronic Stability Control",
                        selectedFeatures.electronicStability,
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* AI Suggested Description - Step 3A */}
          {showAiDescription && (
            <div className="mb-12">
              <div className="w-full max-w-[955px]">
                {/* Header Section */}
                <div className="mb-6">
                  <h1 className="text-[20px] font-albert mb-2">
                    <span className="text-[#090909] font-normal">
                      AI suggested Description
                    </span>
                    <span className="text-[#090909] font-bold">- </span>
                    <span className="text-[#E82121] font-bold">Step 3</span>
                  </h1>
                  <p className="text-[14px] text-black font-albert leading-[140%] max-w-[955px]">
                    Check out the AI-generated, SEO-friendly description to help
                    your listing get noticed online. Review, edit if needed,
                    then click "Update Description."
                  </p>
                  <div className="w-full h-px bg-[#B9B9B9] mt-6"></div>
                </div>

                <div className="flex justify-start my-5">
                  <button
                    onClick={async () => {
                      setIsGenerating(true);
                      const inputText = (aiValues ?? "").trim();
                      if (!inputText) {
                        setAiDescription("No input found in 'AI Get values'.");
                        setIsGenerating(false);
                        return;
                      }

                      try {
                        // Call server-side proxy at /api/openai; server will use the OPENAI_API_KEY from environment

                        const resp = await fetch("/api/openai", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ prompt: inputText }),
                        });

                        if (!resp.ok) {
                          const errBody = await resp.json().catch(() => null);
                          setAiDescription(
                            `OpenAI proxy error: ${resp.status} ${resp.statusText}${errBody?.error ? " - " + errBody.error : ""}`,
                          );
                        } else {
                          const data = await resp.json();
                          const text =
                            data?.choices?.[0]?.message?.content?.trim();
                          setAiDescription(text || "No text returned.");
                        }
                      } catch (e) {
                        setAiDescription("Error generating description.");
                      } finally {
                        setIsGenerating(false);
                        setShowAiDescription(true);
                      }
                    }}
                    disabled={isGenerating}
                    className="flex items-center justify-center gap-2 px-6 py-4 h-[50px] bg-[#E82121] text-white rounded-[14px] font-albert font-medium text-[16px] w-[211px] disabled:opacity-60"
                  >
                    {isGenerating ? "Generating..." : "Get Ai Description"}
                  </button>
                </div>

                {/* AI Description Content */}
                <div className="relative">
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(178,178,178,1)",
                      borderRadius: 12,
                      minHeight: 289,
                      width: "100%",
                      position: "relative",
                      marginBottom: "20px",
                      padding: 20,
                      fontWeight: 400,
                    }}
                  >
                    <label
                      style={{
                        color: "#818181",
                        display: "block",
                        fontFamily: "DM Sans",
                        fontSize: 13,
                        lineHeight: "19.5px",
                      }}
                    >
                      AI Get values
                    </label>

                    <div
                      style={{
                        color: "#050B20",
                        marginTop: 12,
                        fontFamily: "DM Sans",
                        fontSize: 14,
                        lineHeight: "20px",
                      }}
                    >
                      <p>
                        Write a description of this car for sale that reads like
                        it comes from the owner — informal, conversational, and
                        not overly polished. Avoid AI-sounding phrases and
                        marketing fluff. Use the keywords: "car for sale", the
                        year, make, model, and trim, plus city, state, and
                        location. Include the condition "Used". Focus on the
                        actual features (navigation, leather seats, sunroof,
                        towing package, etc.) rather than long storytelling.
                        Produce a unique description of ~700–900 characters,
                        keep the tone casual and engaging, and do not include
                        any HTML formatting or the sale price in the text.
                      </p>
                    </div>

                    {/* Prefix the textarea with the provided vehicle headline but keep aiInput as the editable body */}
                    <textarea
                      value={aiValues}
                      onChange={(e) => {
                        const val = e.target.value;
                        const prefix = "2018 BMW 530i xDrive\n\n";
                        if (val.startsWith(prefix)) {
                          setAiValues(val);
                          setAiInput(val.slice(prefix.length));
                        } else {
                          // allow editing without prefix; keep aiValues synced
                          setAiValues(val);
                          setAiInput(val);
                        }
                      }}
                      rows={8}
                      style={{
                        color: "#050B20",
                        fontFamily: "DM Sans",
                        fontSize: 15,
                        fontWeight: 400,
                        lineHeight: "26px",
                        marginTop: 20,
                        minHeight: 200,
                        width: "100%",
                        resize: "vertical",
                        padding: 8,
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(178,178,178,1)",
                      borderRadius: 12,
                      minHeight: 289,
                      width: "100%",
                      position: "relative",
                      padding: 20,
                      fontWeight: 400,
                    }}
                  >
                    <label
                      style={{
                        color: "#818181",
                        display: "block",
                        fontFamily: "DM Sans",
                        fontSize: 13,
                        lineHeight: "19.5px",
                      }}
                    >
                      Ai Description
                    </label>

                    <div
                      style={{
                        color: "#050B20",
                        fontFamily: "DM Sans",
                        fontSize: 15,
                        fontWeight: 400,
                        lineHeight: "26px",
                        marginTop: 20,
                        minHeight: 200,
                      }}
                    >
                      <textarea
                        value={aiDescription}
                        onChange={(e) => setAiDescription(e.target.value)}
                        rows={8}
                        className="w-full text-[15px] font-albert text-[#050B20] leading-[26px] bg-transparent outline-none resize-vertical"
                        placeholder="AI suggested description"
                      />
                    </div>
                  </div>
                </div>

                {/* Update Description Button */}
                <div className="mt-5 flex justify-start">
                  <button
                    onClick={() => {
                      const prefix = "2018 BMW 530i xDrive\n\n";
                      let toSet = (aiDescription || "").trim();
                      if (!toSet) {
                        const raw = (aiValues || "").trim();
                        if (raw.startsWith(prefix)) {
                          toSet = raw.slice(prefix.length).trim();
                        } else if (raw) {
                          toSet = raw;
                        } else {
                          toSet = (aiInput || "").trim();
                        }
                      }
                      setDescription(toSet);
                      setShowAiDescription(false);

                      // Scroll to sale price and focus it
                      setTimeout(() => {
                        const el = document.getElementById("sale-price-input-rev1") as HTMLInputElement | null;
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "center" });
                          el.focus();
                        }
                      }, 150);
                    }}
                    className="flex justify-center items-center gap-2.5 px-6 py-4 h-[50px] bg-[#E82121] text-white rounded-[14px] font-albert font-medium text-[16px] w-[211px]"
                  >
                    Use AI Description
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Price and Description */}
          <div className="mb-12">
            {/* Header */}
            <div className="mb-6">
              <h1
                className="text-[20px] font-semibold"
                style={{ fontFamily: "Albert Sans", marginTop: 20 }}
              >
                <span className="text-[#090909]">Price and Description- </span>
                <span className="text-[#E82121]">Step 4</span>
              </h1>
              <p
                className="text-[14px] text-black leading-[140%] max-w-[955px]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Enter your sale price, then write a description that highlights
                your car's features. Buyers want details, so be specific
              </p>
              <div className="w-full h-[0.5px] bg-[#EDEDED] my-6"></div>
            </div>


          </div>

          {/* Step 4: Photos */}
          <div className="mb-12">
            <div className="space-y-6">
              {/* Sale Price */}
              <div className="w-full max-w-full md:max-w-[318px]">
                <label
                  className="block text-[14px] font-medium text-[#24272C] mb-2"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Sale Price
                </label>
                <div className="relative">
                  <input
                    id="sale-price-input-rev1"
                    type="text"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    placeholder="$"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="w-full max-w-[955px]">
                <div className="relative">
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "0.8px solid rgba(178,178,178,1)",
                      borderRadius: 12,
                      minHeight: 289,
                      position: "relative",
                      width: "100%",
                      padding: 20,
                      fontWeight: 400,
                    }}
                  >
                    <label
                      style={{
                        color: "#818181",
                        display: "block",
                        fontFamily: "DM Sans",
                        fontSize: 13,
                        lineHeight: "19.5px",
                      }}
                    >
                      Vehicle Description
                    </label>

                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter your description"
                      rows={8}
                      style={{
                        display: "inline-block",
                        backgroundColor: "transparent",
                        color: "#050B20",
                        outline: "rgba(0,0,0,0) solid 1.6px",
                        outlineOffset: 2,
                        resize: "none",
                        width: "100%",
                        fontFamily: "DM Sans",
                        fontSize: 15,
                        lineHeight: "26px",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Header */}
            <div className="mb-6" style={{ margin: "20px 0 24px" }}>
              <h1
                className="text-[20px] font-semibold"
                style={{ fontFamily: "Albert Sans" }}
              >
                <span className="text-[#090909]">Photos- </span>
                <span className="text-[#E82121]">Step 5</span>
              </h1>
              <p
                className="text-[14px] text-black leading-[140%] max-w-[955px]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Shoppers want to see it all. The more photos you upload—inside,
                outside, and every detail—the more confident buyers feel and the
                faster your car sells.
              </p>
              <div className="w-full h-[0.5px] bg-[#EDEDED] my-6"></div>
            </div>

            {/* Photo Upload */}
            <div className="space-y-6">
              {/* Upload Photo Section */}
              <div>
                {/* Upload Area */}
                <div className="w-full max-w-[952px] rounded-2xl bg-white py-6 flex flex-col items-center justify-center relative">
                  <div className="flex flex-col items-center gap-4 w-full max-w-[220px]">
                    {/* Select Photos Button */}
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("upload-input-vindecoderrev1")
                          ?.click()
                      }
                      className="flex items-center justify-center gap-2.5 w-full h-[50px] px-4 bg-[#E82121] rounded-[14px] text-white font-['Albert_Sans'] font-medium text-base leading-[140%] hover:bg-[#d41d1d] transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.375 13.125L6.67417 8.82583C6.84828 8.65172 7.05498 8.51361 7.28246 8.41938C7.50995 8.32515 7.75377 8.27665 8 8.27665C8.24623 8.27665 8.49005 8.32515 8.71754 8.41938C8.94502 8.51361 9.15172 8.65172 9.32583 8.82583L13.625 13.125M12.375 11.875L13.5492 10.7008C13.7233 10.5267 13.93 10.3886 14.1575 10.2944C14.385 10.2001 14.6288 10.1516 14.875 10.1516C15.1212 10.1516 15.365 10.2001 15.5925 10.2944C15.82 10.3886 16.0267 10.5267 16.2008 10.7008L18.625 13.125M3.625 16.25H17.375C17.7065 16.25 18.0245 16.1183 18.2589 15.8839C18.4933 15.6495 18.625 15.3315 18.625 15V5C18.625 4.66848 18.4933 4.35054 18.2589 4.11612C18.0245 3.8817 17.7065 3.75 17.375 3.75H3.625C3.29348 3.75 2.97554 3.8817 2.74112 4.11612C2.5067 4.35054 2.375 4.66848 2.375 5V15C2.375 15.3315 2.5067 15.6495 2.74112 15.8839C2.97554 16.1183 3.29348 16.25 3.625 16.25ZM12.375 6.875H12.3817V6.88167H12.375V6.875ZM12.6875 6.875C12.6875 6.95788 12.6546 7.03737 12.596 7.09597C12.5374 7.15458 12.4579 7.1875 12.375 7.1875C12.2921 7.1875 12.2126 7.15458 12.154 7.09597C12.0954 7.03737 12.0625 6.95788 12.0625 6.875C12.0625 6.79212 12.0954 6.71263 12.154 6.65403C12.2126 6.59542 12.2921 6.5625 12.375 6.5625C12.4579 6.5625 12.5374 12.596 6.65403C12.6546 6.71263 12.6875 6.79212 12.6875 6.875Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Select photos
                    </button>

                    {/* Help Text */}
                    <div className="text-center font-['Albert_Sans'] text-sm leading-[140%]">
                      <span className="text-[#24272C]">
                        or drag photos here
                      </span>
                      <br />
                      <span className="text-[#696665]">(Up to 15 photos)</span>
                    </div>
                  </div>

                  {/* Hidden file input */}
                  <input
                    id="upload-input-vindecoderrev1"
                    type="file"
                    multiple
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>

              {/* Photo Previews (sortable thumbnails using dnd-kit) */}
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={(event: DragEndEvent) => {
                  const { active, over } = event;
                  if (!over || active.id === over.id) return;
                  const oldIndex = photos.findIndex(
                    (p) => p.id === String(active.id),
                  );
                  const newIndex = photos.findIndex(
                    (p) => p.id === String(over.id),
                  );
                  if (oldIndex === -1 || newIndex === -1) return;
                  setPhotos((prev) => arrayMove(prev, oldIndex, newIndex));
                }}
              >
                <SortableContext
                  items={photos.map((p) => p.id)}
                  strategy={rectSortingStrategy}
                >
                  <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    {photos.map((photo, index) => (
                      <SortableThumbnail
                        key={photo.id}
                        photo={photo}
                        index={index}
                        featurePhotoId={featurePhotoId}
                        setFeaturePhotoId={setFeaturePhotoId}
                        deletePhoto={deletePhoto}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>

              {/* Sortable Thumbnail component */}
              {/* Using a local component inside same file */}
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full bg-transparent py-6">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-0 lg:px-0">
              <div className="flex justify-center sm:justify-start">
                <Link
                  to="/yourlistings"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-[#E82121] hover:bg-[#d41d1d] text-white rounded-[12px] font-semibold"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Submit your listing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
