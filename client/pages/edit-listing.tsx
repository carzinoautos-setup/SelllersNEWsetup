import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Select } from "../components/ui/select";

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
  const [aiDescription, setAiDescription] = useState("AI suggested description");
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
                Year Make Model Trim
              </span>
              <span
                className="text-[12px] font-normal text-black leading-[140%]"
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
                <span className="text-[#E82121]">Step 1</span>
              </h1>
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
                {/* Row 1: Mileage + Engine */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[14px] font-medium text-[#24272C]"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Mileage
                  </label>
                  <input
                    type="text"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    placeholder="Enter mileage"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-[14px] font-medium text-[#24272C]"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Engine
                  </label>
                  <Select
                    options={engineOptions}
                    value={engine}
                    onChange={(v) => setEngine(v)}
                    placeholder="6.7 Liter"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                {/* Row 2: Vehicle Trim + Transmission */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[14px] font-medium text-[#24272C]"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Vehicle Trim
                  </label>
                  <Select
                    options={trimOptions}
                    value={vehicleTrim}
                    onChange={(v) => setVehicleTrim(v)}
                    placeholder="440 xDrive Coupe 2D"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-[14px] font-medium text-[#24272C]"
                    style={{ fontFamily: "Albert Sans" }}
                  >
                    Transmission
                  </label>
                  <Select
                    options={transmissionOptions}
                    value={transmission}
                    onChange={(v) => setTransmission(v)}
                    placeholder="Select"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                {/* Row 3: Exterior + Interior */}
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
                    placeholder="Select"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

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
                    placeholder="Select"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                {/* ... rest of file follows same as original ... */}
  (truncated)