import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-8">FIFA TRACKER</h1>
        <Link href="/records">
          <Button className="px-6 py-3 text-xl rounded-lg">View Records</Button>
        </Link>
      </div>
    </div>
  );
}
