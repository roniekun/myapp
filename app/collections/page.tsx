"use client";
import { useSearchParams } from "next/navigation";
import CategoryItems from "@/app/_components/lib/CategoryItems";
// import { categories } from "@/components/lib/CategoryItems";

export default function Page() {
  const searchParams = useSearchParams();
  let category = searchParams.get("category");

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex gap-4 mt-20 ">
        <CategoryItems className="md:text-2xl" />
      </div>
      {category}
    </div>
  );
}
