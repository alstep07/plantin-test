import { clsx, type ClassValue } from "clsx"
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const updateUrlParam = (
  router: ReturnType<typeof useRouter>,
  searchParams: URLSearchParams,
  key: string,
  value?: string
) => {
  const params = new URLSearchParams(searchParams.toString());
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
  router.replace(`?${params.toString()}`, { scroll: false });
};
