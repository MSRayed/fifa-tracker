import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl">
          <span className="fai-text">F</span>{" "}
          <span className="ray-text">R</span>
        </h1>
        <h1 className="text-8xl font-bold mb-8">FIFA TRACKER</h1>
        <Link href="/records">
          <Button className="text-2xl rounded-lg">View Records</Button>
        </Link>
      </div>
    </div>
  );
}
