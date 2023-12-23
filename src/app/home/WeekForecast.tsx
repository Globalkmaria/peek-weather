import ExpandCard from '../components/ExpandCard';
import WeatherIcon from '../components/WeatherIcon';
import { getDay } from '@/utils/time';
import { City, CityInfo } from '@/model/city';
import { Weather } from '@/model/weather';

interface WeatherItemProps {
  cityInfo: CityInfo;
  daily: Weather;
}

interface Props {
  open: boolean;
  city: City;
}

function WeekForecast({ open, city }: Props) {
  return (
    <ExpandCard open={open}>
      <ul className='flex py-4'>
        {city.forecast.map((daily, idx) => (
          <WeatherItem key={idx} cityInfo={city.cityInfo} daily={daily} />
        ))}
      </ul>
    </ExpandCard>
  );
}

export default WeekForecast;

function WeatherItem({ cityInfo, daily }: WeatherItemProps) {
  return (
    <li className='flex flex-col gap-2 border-r-2 border-black px-6 py-4'>
      <div className='flex gap-2'>
        <span className='font-bold'>{getDay(cityInfo.timezone, daily.timeStamp)}</span>
        <span>|</span>
        <span>{daily.weather.main}</span>
      </div>
      <WeatherIcon iconId={daily.weather.id} />
      <div className='flex flex-row gap-2 whitespace-nowrap'>
        <span className='font-semibold'>{Math.round(daily.temp.min)} ºC</span>
        <span>/</span>
        <span className='font-semibold'>{Math.round(daily.temp.max)} ºC</span>
      </div>
    </li>
  );
}
