import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {
    label: string;
}

export const Header =({
    label
}: HeaderProps)=> {
    return (
       <div className="w-full flex flex-col gap-y-4 items-center justify-content">
        <h1 className={cn("text-4xl font-semibold",font.className)}>Auth</h1>
        <p className={cn("text-lg font-medium",font.className)}>{label}</p>
       </div>
    );
}