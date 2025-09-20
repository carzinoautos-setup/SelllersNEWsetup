import { cn } from "@/lib/utils";

interface EditProfileFormProps {
  className?: string;
}

export function EditProfileForm({ className }: EditProfileFormProps) {
  return <div className={cn("w-full max-w-[1480px] mx-auto", className)} />;
}
