export interface Location {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}

export interface TemperatureData {
  temperature: number;
  location: Location;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}
  