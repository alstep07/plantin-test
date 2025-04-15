import { BannerImage } from "./banner-image";
import { CurrentWeather } from "@/entities/weather";

export const HeroBanner: React.FC = () => {
  return (
    <section
      className="h-[267px] relative p-14 bg-primary-400/[0.16] rounded-lg overflow-hidden"
      aria-label="Featured content"
    >
      <div className="max-w-[70%]">
        <h1 className="text-xl font-[800] text-primary-400">
          Stay always tuned with planting trends
        </h1>
        <div className="mt-2">
          <CurrentWeather />
        </div>
      </div>

      <div
        className="max-w-[40%] absolute right-0 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <BannerImage />
      </div>
    </section>
  );
};
