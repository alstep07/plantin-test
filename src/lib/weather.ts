import { Location } from "@/shared/types";

/**
 * Generates a random temperature between -10 and +30 degrees Celsius
 * @returns {number} Random temperature in Celsius
 */

export const generateRandomTemperature = (): number => {
  // Generate a random number between -10 and 30
  return Math.floor(Math.random() * (30 - -10 + 1)) + -10;
};

/**
 * Gets current temperature for a location
 * @param location Location object with latitude and longitude
 * @returns Promise<number> Current temperature in Celsius
 */
export const getCurrentTemperature = async (
  location: Location,
): Promise<number> => {
  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API_KEY}&query=${location.latitude},${location.longitude}&units=m`,
    );
    const data = await response.json();

    if (data.success === false) {
      console.error("Weatherstack API error:", data.error);
      throw new Error(data.error.info);
    }

    if (data.current?.temperature !== undefined) {
      return Math.round(data.current.temperature);
    }
    throw new Error("Failed to get temperature");
  } catch (error) {
    console.error("Error getting temperature:", error);
    throw error;
  }
};
