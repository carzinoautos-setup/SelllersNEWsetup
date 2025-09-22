import { DashboardLayout } from "../components/DashboardLayout";

export default function ResetPage() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="flex flex-col items-start gap-2 mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#24272C] font-albert">Reset</h1>
            <p className="text-sm text-[#696665]">Design canvas for the Reset page. Add components or content here.</p>
          </header>

          <main />
        </div>
      </div>
    </DashboardLayout>
  );
}
