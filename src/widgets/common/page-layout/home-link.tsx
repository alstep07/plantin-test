import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const HomeLink = () => {
  return (
    <Link href="/" className="flex items-center text-grey-600">
      <ChevronLeft className="size-6" />
      Home
    </Link>
  );
};
