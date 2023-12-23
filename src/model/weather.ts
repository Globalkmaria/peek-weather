export interface Weather {
  timeStamp: number;
  sunrise: number;
  sunset: number;
  temp: {
    min: number;
    max: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}

interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface CurrentWeatherOriginal {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherCondition[];
}

interface TemperatureDetails {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface DailyWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: TemperatureDetails;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherCondition[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
}

export interface ForecastOriginal {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherOriginal;
  daily: DailyWeather[];
}

export interface CurrentWeather {
  temp: number;
  weather: WeatherCondition;
}
