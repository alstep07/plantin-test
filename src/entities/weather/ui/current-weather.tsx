"use client";

import { Skeleton } from "@/shared/ui/skeleton";
import { useCurrentWeather } from "../api/get-current-weather";

export const CurrentWeather = () => {
  const { temperatureData, isLoading } = useCurrentWeather();

  if (isLoading || !temperatureData) {
    return (
      <Skeleton
        className="max-w-[300px] w-full h-[27px] bg-primary-400/[0.16]"
        rounded="xs"
      />
    );
  }

  const label = temperatureData
    ? `Current temperature in ${temperatureData.location.city} is: ${temperatureData.temperature}°C`
    : "";

  return <p className="text-md font-bold">{label}</p>;
};
