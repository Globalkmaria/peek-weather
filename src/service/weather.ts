import { City, CityInfo } from '@/model/city';
import { getCitiesInfo } from './city';
import { fetchMultipleCitiesWeather, formatForecastList } from '@/service/helper';

export const fetchLocationWeather = async (lon: number, lat: number) => {
  return fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}`,
    { next: { revalidate: 60 * 60 } },
  );
};

export async function getCities(): Promise<City[]> {
  try {
    const citiesInfo: CityInfo[] = await getCitiesInfo();
    const forecastListOriginal = await fetchMultipleCitiesWeather(citiesInfo);
    const forecastList = formatForecastList(citiesInfo, forecastListOriginal);

    return forecastList;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
    }
    console.error('Something went wrong');
    return [];
  }
}
