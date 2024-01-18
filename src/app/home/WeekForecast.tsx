import { memo } from 'react';
import dynamic from 'next/dynamic';

import { City, CityInfo } from '@/model/city';
import { Weather } from '@/model/weather';
import ExpandCard from '../components/ExpandCard';
import WeatherIcon from '../components/WeatherIcon';
import { DayTextSkeleton } from './DayText';

const DayText = dynamic(() => import('./DayText'), { ssr: false, loading: () => <DayTextSkeleton /> });

interface WeatherItemProps {
  cityInfo: CityInfo;
  daily: Weather;
  idx: number;
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
          <WeatherItem key={idx} idx={idx} cityInfo={city.cityInfo} daily={daily} />
        ))}
      </ul>
    </ExpandCard>
  );
}

export default memo(WeekForecast);

function WeatherItem({ cityInfo, daily, idx }: WeatherItemProps) {
  return (
    <li className={`flex flex-col gap-2 border-r-2 border-black px-6 py-4 ${idx === 0 ? 'border-l-2' : ''}`}>
      <div className='flex gap-2'>
        <DayText cityInfo={cityInfo} daily={daily} />
        <span>|</span>
        <span>{daily.weather.main}</span>
      </div>
      <WeatherIcon iconId={daily.weather.id} />
      <div className='flex flex-row gap-2 whitespace-nowrap'>
        <span className='font-semibold'>{daily.temp.min} ºC</span>
        <span>/</span>
        <span className='font-semibold'>{daily.temp.max} ºC</span>
      </div>
    </li>
  );
}
