import { City, CityInfo } from '@/model/city';
import { ForecastOriginal } from '@/model/weather';
import { BASE_URL } from '@/utils/baseUrl';

export const fetchLocationWeather = async (lon: number, lat: number) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}`,
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
  const res = await fetch(`${BASE_URL}/api/weather/cities`, {
    next: { revalidate: 3600 },
  });

  const data = await res.json();
  return data;
}
