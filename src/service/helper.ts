import { City, CityInfo } from '@/model/city';
import { CurrentWeather, ForecastOriginal, Weather } from '@/model/weather';
import { fetchLocationWeather } from './weather';

interface FormatForecast {
  lat: number;
  lon: number;
  forecast: Weather[];
  current: CurrentWeather;
}

export const formatForecast = (original: ForecastOriginal): FormatForecast => {
  return {
    lat: original.lat,
    lon: original.lon,
    current: {
      temp: Math.floor(original.current.temp),
      weather: original.current.weather[0],
    },
    forecast: original.daily.map(daily => {
      return {
        timeStamp: daily.dt,
        sunrise: daily.sunrise,
        sunset: daily.sunset,
        temp: {
          min: Math.floor(daily.temp.min),
          max: Math.floor(daily.temp.max),
        },
        weather: daily.weather[0],
      };
    }),
  };
};

export const formatForecastList = (citiesInfo: CityInfo[], forecastList: ForecastOriginal[]): City[] => {
  return forecastList.reduce<City[]>((result, originalForecast) => {
    const forecast = formatForecast(originalForecast);
    const city = citiesInfo.find(
      cityInfo => Number(cityInfo.lat) === Number(forecast.lat) && Number(cityInfo.lon) == Number(forecast.lon),
    );

    if (city) {
      result.push({
        cityInfo: city,
        forecast: forecast.forecast,
        current: forecast.current,
      });
    }

    return result;
  }, []);
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
