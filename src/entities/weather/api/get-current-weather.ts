import { useState, useEffect   } from "react";
import { TemperatureData } from "@/shared/types";

export const useCurrentWeather = () => {
  const [temperatureData, setTemperatureData] =
    useState<TemperatureData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/get-current-temperature");

        if (!response.ok) {
          throw new Error("Failed to fetch temperature");
        }

        const data = await response.json();
        setTemperatureData(data);
      } catch (error) {
        console.error("Failed to fetch temperature:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemperature();
  }, []);

  return { temperatureData, isLoading };
};
