import { Suspense } from "react";
import { SearchBlogInput } from "@/features/blog";
import { BannerImage } from "./banner-image";
import { CurrentWeather } from "@/entities/weather";

export const HeroBanner: React.FC = () => {
  return (
    <section
      className="relative p-4 md:p-14 bg-primary-400/[0.16] rounded-lg overflow-hidden"
      aria-label="Featured content"
    >
      <div className="md:max-w-[70%]">
        <h1 className="text-lg md:text-xl font-[800] text-primary-400">
          Stay always tuned with planting trends
        </h1>
        <div className="hidden md:block mt-2 md:max-w-[80%]">
          <CurrentWeather />
        </div>
        <div className="block md:hidden mt-2">
          <p className="text-sm md:text-md font-[500]">
            <span className="font-[700]">Tips & Tricks</span> selected specially
            for <span className="font-[700]">you!</span>
          </p>
        </div>
        <div className="mt-4 w-full md:w-[522px] md:max-w-[80%]">
          <Suspense>
            <SearchBlogInput />
          </Suspense>
        </div>
      </div>

      <div
        className="hidden md:block max-w-[40%] absolute right-0 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <BannerImage />
      </div>
    </section>
  );
};
