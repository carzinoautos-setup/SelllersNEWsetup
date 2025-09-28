import React, { useState, useEffect } from "react";
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

export default function EditListing() {
  // Step 1: Basic Details
  const [mileage, setMileage] = useState("");
  const [engine, setEngine] = useState("6.7 Liter");
  const [vehicleTrim, setVehicleTrim] = useState("440 xDrive Coupe 2D");
  const [transmission, setTransmission] = useState("");
  const [drivetrain, setDrivetrain] = useState("FWD");
  const [exteriorColor, setExteriorColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [model, setModel] = useState("");
  const [isCertified, setIsCertified] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [titleStatusValue, setTitleStatusValue] = useState("");
  const [makeValue, setMakeValue] = useState("");
  const [conditionValue, setConditionValue] = useState("");

  // Step 2A state variables
  const [bodyType, setBodyType] = useState("");
  const [doors, setDoors] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [transmissionSpeed, setTransmissionSpeed] = useState("");
  const [cylinders, setCylinders] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [driveTrain, setDriveTrain] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [mpgCity, setMpgCity] = useState("");
  const [mpgHwy, setMpgHwy] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [listingStatus, setListingStatus] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

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
  const [description, setDescription] = useState("Lorem Ipsum Dolar Sit Amet");
  const [aiDescription, setAiDescription] = useState(
    "AI suggested description",
  );
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
  const interiorColorOptions = ["Black", "Gray", "Beige", "Brown"];
  const modelOptions = ["Model A", "Model B", "Model C"];
  const certifiedOptions = ["Yes", "No"];
  const titleStatusOptions = ["Clean", "Salvage", "Rebuilt"];
  const makeOptions = ["Toyota", "Honda", "Ford", "BMW"];
  const conditionOptions = ["New", "Used", "Certified Pre-Owned"];
  const yearOptions = ["2025", "2024", "2023", "2022", "2021"];

  // Step 2A options
  const bodyTypeOptions = [
    "Sedan",
    "SUV",
    "Hatchback",
    "Coupe",
    "Convertible",
    "Truck",
    "Wagon",
  ];
  const doorsOptions = ["2", "3", "4", "5"];
  const transmissionSpeedOptions = [
    "3-Speed",
    "4-Speed",
    "5-Speed",
    "6-Speed",
    "7-Speed",
    "8-Speed",
    "9-Speed",
    "10-Speed",
  ];
  const cylindersOptions = ["3", "4", "5", "6", "8", "10", "12"];
  const engineSizeOptions = [
    "1.0L",
    "1.4L",
    "1.6L",
    "1.8L",
    "2.0L",
    "2.4L",
    "2.5L",
    "3.0L",
    "3.5L",
    "4.0L",
    "5.0L",
    "6.0L",
    "6.7L",
  ];
  const fuelTypeOptions = [
    "Gasoline",
    "Diesel",
    "Hybrid",
    "Electric",
    "Flex Fuel",
  ];
  const mpgOptions = ["15", "20", "25", "30", "35", "40", "45", "50+"];
  const stateOptions = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const listingStatusOptions = ["Active", "Sold", "Pending", "Draft"];

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  const [featurePhotoId, setFeaturePhotoId] = useState<string | null>(null);

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
        className="relative w-28 h-28 rounded-[12px] overflow-hidden bg-gray-50"
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
                className="text-[12px] font-bold text-[#090909] leading-[140%]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Your listing:
              </span>
              <span
                className="text-[12px] font-normal text-[#090909] leading-[140%]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Edit or add a listing
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-8 overflow-x-hidden">
          {/* Vehicle Details Step 1A */}
          <div className="mb-12">
            {/* Header */}
            <div className="mb-6">
              <h1
                className="text-[20px] font-semibold"
                style={{ fontFamily: "Albert Sans" }}
              >
                <span className="text-[#090909]">Vehicle Details- </span>
                <span className="text-[#E82121]">Step 1</span>
              </h1>
              <p
                className="text-[14px] text-black leading-[140%] max-w-[955px]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Enter or edit your vehicle details
              </p>
              <div className="w-full h-[0.5px] bg-[#B9B9B9] my-6"></div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl pb-[30px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                  {/* Vin# */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Vin#
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Vin#"
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
                      style={{ fontFamily: "Albert Sans" }}
                    />
                  </div>

                  {/* Model */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
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
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
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
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Exterior Color
                    </label>
                    <Select
                      options={exteriorColorOptions}
                      value={exteriorColor}
                      onChange={(v) => setExteriorColor(v)}
                      placeholder="Select color"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6">
                  {/* Year */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Year
                    </label>
                    <Select
                      options={yearOptions}
                      value={yearValue}
                      onChange={(v) => setYearValue(v)}
                      placeholder="Enter Year"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Trim */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Trim
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Trim"
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
                      style={{ fontFamily: "Albert Sans" }}
                    />
                  </div>

                  {/* Mileage */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Mileage
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Miles"
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
                      style={{ fontFamily: "Albert Sans" }}
                    />
                  </div>

                  {/* Title Status */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Title Status
                    </label>
                    <Select
                      options={titleStatusOptions}
                      value={titleStatusValue}
                      onChange={(v) => setTitleStatusValue(v)}
                      placeholder="Select title status"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-6">
                  {/* Make */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Make
                    </label>
                    <Select
                      options={makeOptions}
                      value={makeValue}
                      onChange={(v) => setMakeValue(v)}
                      placeholder="Select Make"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Condition */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Condition
                    </label>
                    <Select
                      options={conditionOptions}
                      value={conditionValue}
                      onChange={(v) => setConditionValue(v)}
                      placeholder="Select Condition"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Interior Color */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Interior Color
                    </label>
                    <Select
                      options={interiorColorOptions}
                      value={interiorColor}
                      onChange={(v) => setInteriorColor(v)}
                      placeholder="Select Color"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Stock# */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Stock#
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Stock Number"
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
                      style={{ fontFamily: "Albert Sans" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Details Step 2A */}
          <div className="mb-12">
            {/* Header */}
            <div className="mb-6">
              <h1
                className="text-[20px] font-semibold"
                style={{ fontFamily: "Albert Sans" }}
              >
                <span className="text-[#090909]">Vehicle Details- </span>
                <span className="text-[#E82121]">Step 2</span>
              </h1>
              <p
                className="text-[14px] text-black leading-[140%] max-w-[955px]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Enter or edit your vehicle details
              </p>
              <div className="w-full h-[0.5px] bg-[#B9B9B9] my-6"></div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl pb-[30px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                  {/* Body Type */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Body Type
                    </label>
                    <Select
                      options={bodyTypeOptions}
                      value={bodyType}
                      onChange={(v) => setBodyType(v)}
                      placeholder="Select Body Type"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Transmission Speed */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Transmission speed
                    </label>
                    <Select
                      options={transmissionSpeedOptions}
                      value={transmissionSpeed}
                      onChange={(v) => setTransmissionSpeed(v)}
                      placeholder="Select speed"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Drive Train */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Drive Train
                    </label>
                    <Select
                      options={drivetrainOptions}
                      value={driveTrain}
                      onChange={(v) => setDriveTrain(v)}
                      placeholder="Select Drive Train"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* MPG Gallon HWY */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      MPG Gallon HWY
                    </label>
                    <Select
                      options={mpgOptions}
                      value={mpgHwy}
                      onChange={(v) => setMpgHwy(v)}
                      placeholder="MPG Gallon HWY"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Enter City (moved from Column 2) */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Enter City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter City"
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
                      style={{ fontFamily: "Albert Sans" }}
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6">
                  {/* Doors */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Doors
                    </label>
                    <Select
                      options={doorsOptions}
                      value={doors}
                      onChange={(v) => setDoors(v)}
                      placeholder="Select"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Cylinders */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Cylinders
                    </label>
                    <Select
                      options={cylindersOptions}
                      value={cylinders}
                      onChange={(v) => setCylinders(v)}
                      placeholder="Select Cylinders"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Fuel Type */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Fuel Type
                    </label>
                    <Select
                      options={fuelTypeOptions}
                      value={fuelType}
                      onChange={(v) => setFuelType(v)}
                      placeholder="Select Fuel Type"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* MPG City */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      MPG Gallon City
                    </label>
                    <Select
                      options={mpgOptions}
                      value={mpgCity}
                      onChange={(v) => setMpgCity(v)}
                      placeholder="Select MPG City"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Enter Zip Code (moved from Column 3) */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Enter Zip Code
                    </label>
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Enter Zip Code"
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] leading-[140%] outline-none focus:border-[#E82121] placeholder:text-[#050B20]"
                      style={{ fontFamily: "Albert Sans" }}
                    />
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-6">
                  {/* Transmission */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Transmission
                    </label>
                    <Select
                      options={transmissionOptions}
                      value={transmissionType}
                      onChange={(v) => setTransmissionType(v)}
                      placeholder="Select Transmission"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Engine Size (Liters) */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Engine Size (Liters)
                    </label>
                    <Select
                      options={engineSizeOptions}
                      value={engineSize}
                      onChange={(v) => setEngineSize(v)}
                      placeholder="Select"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Listing Status */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Listing Status
                    </label>
                    <Select
                      options={listingStatusOptions}
                      value={listingStatus}
                      onChange={(v) => setListingStatus(v)}
                      placeholder="Select status"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>

                  {/* Select State (moved from Column 1) */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium text-[#24272C]"
                      style={{ fontFamily: "Albert Sans" }}
                    >
                      Select State
                    </label>
                    <Select
                      options={stateOptions}
                      value={stateValue}
                      onChange={(v) => setStateValue(v)}
                      placeholder="Select State"
                      className={`w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1: Basic Details */}
          <div className="mb-12">
            {/* Step 2: Features */}
            <div className="mb-12">
              {/* Header */}
              <div className="mb-6">
                <h1
                  className="text-[20px] font-semibold"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  <span className="text-[#090909]">Features- </span>
                  <span className="text-[#E82121]">Step 3</span>
                </h1>
                <p
                  className="text-[14px] text-black leading-[140%] max-w-[955px]"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Add or edit your vehicles features
                </p>
                <div className="w-full h-[0.5px] bg-[#EDEDED] my-6"></div>
              </div>

              <div className="bg-white rounded-2xl pl-[2px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 items-start">
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
                  <div className="mb-6">
                    <h1 className="text-[20px] font-albert mb-2">
                      <span className="text-[#090909] font-normal">
                        AI suggested Description
                      </span>
                      <span className="text-[#090909] font-bold">- </span>
                      <span className="text-[#E82121] font-bold">Step 4</span>
                    </h1>
                    <p className="text-[14px] text-black font-albert leading-[140%] max-w-[955px]">
                      Check out the AI-generated, SEO-friendly description to
                      help your listing get noticed online. Review, edit if
                      needed, then click "Use AI Description."
                    </p>
                    <div className="w-full h-px bg-[#B9B9B9] mt-6"></div>
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
                        Description
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
                        {aiDescription}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            <div className="mb-12">
              <div className="mb-6">
                <h1
                  className="text-[20px] font-semibold"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  <span className="text-[#090909]">
                    Price and Description-{" "}
                  </span>
                  <span className="text-[#E82121]">Step 5</span>
                </h1>
                <p
                  className="text-[14px] text-black leading-[140%] max-w-[955px]"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Enter or edit your sale price, then write a description that
                  highlights your car's features. Buyers want details, so be
                  specific
                </p>
                <div className="w-full h-[0.5px] bg-[#EDEDED] my-6"></div>
              </div>

              <div className="space-y-6">
                <div className="w-full max-w-full md:max-w-[318px]">
                  <label
                    className="block text-[14px] font-medium text-[#24272C] mb-2"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Sale Price
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                      placeholder="$"
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                      style={{ fontFamily: "Albert Sans" }}
                    />
                  </div>
                </div>

                <div className="w-full max-w-[955px]">
                  <div className="relative">
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "0.8px solid rgba(178,178,178,1)",
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
                        Description
                      </label>

                                        <div data-loc="client/pages/edit-listing.tsx:1418:19" style={{display: "flex", fontWeight: 400, justifyContent: "flex-start", marginTop: 20}}>
                    <div data-loc="client/pages/edit-listing.tsx:1419:21" style={{display: "flex", alignItems: "center", backgroundColor: "rgb(232, 33, 33)", borderRadius: "14px", color: "rgb(255, 255, 255)", fontFamily: '"Albert Sans", -apple-system, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Segoe UI", sans-serif', fontWeight: 500, gap: "10px", height: "50px", justifyContent: "center", textDecoration: "rgb(255, 255, 255)", width: "211px", padding: "16px 24px"}}>
                      Use AI Description
                    </div>
                  </div>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
            </div>



            <div className="mb-12">
              <div className="mb-6">
                <h1
                  className="text-[20px] font-semibold"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  <span className="text-[#090909]">Photos- </span>
                  <span className="text-[#E82121]">Step 6</span>
                </h1>
                <p
                  className="text-[14px] text-black leading-[140%] max-w-[955px]"
                  style={{ fontFamily: "Albert Sans" }}
                >
                  Shoppers want to see it all. The more photos you
                  upload—inside, outside, and every detail—the more confident
                  buyers feel and the faster your car sells.
                </p>
                <div className="w-full h-[0.5px] bg-[#EDEDED] my-6"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="w-full max-w-[952px] rounded-2xl bg-white py-6 flex flex-col items-center justify-center relative">
                    <div className="flex flex-col items-center gap-4 w-full max-w-[220px]">
                      <button
                        type="button"
                        onClick={() =>
                          document.getElementById("upload-input-evd2")?.click()
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

                      <div className="text-center font-['Albert_Sans'] text-sm leading-[140%]">
                        <span className="text-[#24272C]">
                          or drag photos here
                        </span>
                        <br />
                        <span className="text-[#696665]">
                          (Up to 15 photos)
                        </span>
                      </div>
                    </div>

                    <input
                      id="upload-input-evd2"
                      type="file"
                      multiple
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileUpload}
                    />
                  </div>

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
                      <div className="flex flex-wrap gap-4">
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
                </div>

                <div className="w-full bg-transparent py-6">
                  <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-0 lg:px-0">
                    <div className="flex justify-center sm:justify-start">
                      <Link
                        to="/success-uploaded"
                        className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-[#E82121] hover:bg-[#d41d1d] text-white rounded-[12px] font-semibold"
                      >
                        Submit your listing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
