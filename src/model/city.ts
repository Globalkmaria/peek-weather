import { CurrentWeather, Weather } from './weather';

export interface CityInfo {
  id: number;
  name: string;
  lon: number;
  lat: number;
  country: string;
  timezone: string;
  priority: number;
}

export interface City {
  cityInfo: CityInfo;
  forecast: Weather[];
  current: CurrentWeather;
}
