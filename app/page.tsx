import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      Hello!
      <div>
        <Link href="/saturn/home">
        <Button>Go to App</Button>
        </Link>
      </div>
      </div>
    </main>
  );
}
