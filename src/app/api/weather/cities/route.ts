import { CityInfo } from '@/model/city';
import { getCitiesInfo } from '@/service/city';
import { fetchMultipleCitiesWeather } from '@/service/weather';
import { formatForecastList } from './helper';

export async function GET() {
  try {
    const citiesInfo: CityInfo[] = await getCitiesInfo();
    const forecastListOriginal = await fetchMultipleCitiesWeather(citiesInfo);
    const forecastList = formatForecastList(citiesInfo, forecastListOriginal);

    return Response.json(forecastList);
  } catch (err) {
    const error = new Error('Error fetching cities');
    console.error(err);
    return Response.json({ data: error, status: 500 });
  }
}
