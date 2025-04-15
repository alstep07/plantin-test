import { Location } from "@/shared/types";

/**
 * Gets user location based on IP address
 * @param ip The IP address to get location for
 * @returns Promise<Location> Location information
 */
export const getLocationByIp = async (ip: string): Promise<Location> => {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();

    if (data.status === "success") {
      return {
        latitude: data.lat,
        longitude: data.lon,
        city: data.city,
        country: data.country,
      };
    }
    throw new Error("Failed to get location");
  } catch (error) {
    console.error("Error getting location:", error);
    throw error;
  }
};
