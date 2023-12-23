import { City, CityInfo } from '@/model/city';
import { ForecastOriginal } from '@/model/weather';

export const fetchLocationWeather = async (lon: number, lat: number) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}`,
    { next: { revalidate: 3600 } },
  );
};

export async function fetchMultipleCitiesWeather(cities: CityInfo[]) {
  const weatherPromises = cities.map(city => fetchLocationWeather(city.lon, city.lat));

  const responses = await Promise.all(weatherPromises);
  const succeedResponses = responses.reduce<Promise<ForecastOriginal>[]>((acc, res) => {
    if (res.ok) {
      const data = res.json() as Promise<ForecastOriginal>;
      acc.push(data);
    }
    return acc;
  }, []);

  return await Promise.all(succeedResponses);
}

export async function getCities(): Promise<City[]> {
  // TODO api
  const res = await fetch('http://localhost:3000/api/weather/cities', {
    next: { revalidate: 3600 },
  });

  // TODO handle error

  const data = await res.json();
  return data;
}