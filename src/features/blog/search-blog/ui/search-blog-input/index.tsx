"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { useDebounce } from "react-use";
import { X } from "lucide-react";
import { SearchIcon } from "@/shared/icons";
import { Input, Skeleton } from "@/shared/ui";
import { updateUrlParam } from "@/lib/utils";

const debounceMs = 300;

export const SearchBlogInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ?? "",
  );

  useDebounce(
    () => {
      updateUrlParam(router, searchParams, "search", searchValue);
    },
    debounceMs,
    [searchValue],
  );

  const handleClear = () => {
    setSearchValue("");
    updateUrlParam(router, searchParams, "search", "");
  };

  const endIcon = searchValue ? (
    <X onClick={handleClear} className="cursor-pointer text-grey-600 size-5" />
  ) : (
    <SearchIcon />
  );

  return (
    <Suspense
      fallback={
        <Skeleton className="w-full h-10 md:h-14 bg-primary-400/[0.16]" />
      }
    >
      <Input
        placeholder="Search"
        endicon={endIcon}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Suspense>
  );
};
