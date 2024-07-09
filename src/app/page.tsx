import { LoginButtonProps } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

const font = Outfit({
  weight: ["400"],
  subsets: ["latin"],

});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-primary">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl text-white font-bold", font.className)}>Auth</h1>
        <p className={cn("font-medium text-white text-xl",font.className)}>Robust Authentication system</p>
        <div>
          <LoginButtonProps mode="redirect">
          <Button variant={'secondary'} size={'lg'} className="bg-white">Sign in</Button>
          </LoginButtonProps>
        </div>
      </div>
    </main>
  );
}
