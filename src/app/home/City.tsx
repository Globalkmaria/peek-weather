'use client';

import { useState } from 'react';

import { getTimeWithDay } from '@/utils/time';
import WeekForecast from './WeekForecast';
import { City as CityType } from '@/model/city';

interface Props {
  city: CityType;
  idx: number;
}
function City({ city, idx }: Props) {
  const [open, setOpen] = useState(idx !== 0);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <li className='border-solid border-black border-b-2 px-6 py-4' onClick={onClick}>
      <div className='flex gap-2 items-end'>
        <h2 className='text-4xl font-bold'>{city.cityInfo.name}</h2>
        <span>{getTimeWithDay(city.cityInfo.timezone)}</span>
      </div>
      <div className='flex flex-row gap-2 items-end pt-2'>
        <span className='text-2xl font-semibold'>{city.current.temp} ºC</span>
        <span>{city.current.weather.description}</span>
      </div>
      <WeekForecast open={open} city={city} />
    </li>
  );
}

export default City;
