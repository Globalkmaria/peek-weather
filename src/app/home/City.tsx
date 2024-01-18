'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { MdOutlineDragHandle } from 'react-icons/md';

import WeekForecast from './WeekForecast';
import { City as CityType } from '@/model/city';
import useHandleDrag from '../hooks/useHandleDrag';
import WeatherIcon from '../components/WeatherIcon';
import { TimeWithDaySkeleton } from './TimeWithDay';

const TimeWithDay = dynamic(() => import('./TimeWithDay'), { ssr: false, loading: () => <TimeWithDaySkeleton /> });

interface Props {
  city: CityType;
  idx: number;
  time: number;
  moveItem: (targetIndex: number, sourceIndex: number) => void;
}

function City({ city, idx, time, moveItem }: Props) {
  const [open, setOpen] = useState(idx !== 0);
  const { onDragStart, onDragOver, onDrop } = useHandleDrag();

  const onClick = () => setOpen(!open);
  const handleDragStart = (event: React.DragEvent<HTMLLIElement>) => onDragStart(event, idx);
  const handleDrop = (event: React.DragEvent<HTMLLIElement>) => onDrop(event, idx, moveItem);

  return (
    <li
      className={`border-solid border-black border-b-2 px-6 py-4`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={onDragOver}
      onDrop={handleDrop}
      onClick={onClick}
    >
      <div className='flex gap-6 items-center w-full'>
        <MdOutlineDragHandle />
        <div className='w-full'>
          <div className='flex gap-2 flex-col-reverse  xs:flex-row'>
            <WeatherIcon iconId={city.current.weather.id} />
            <div className=''>
              <div className='flex gap-2 items-end'>
                <h2 className='text-4xl font-bold'>{city.cityInfo.name}</h2>
                <TimeWithDay city={city} time={time} />
              </div>
              <div className='flex flex-row gap-2 items-end pt-2'>
                <span className='text-2xl font-semibold'>{city.current.temp} ºC</span>
                <span>{city.current.weather.description}</span>
              </div>
            </div>
          </div>
          <WeekForecast open={open} city={city} />
        </div>
      </div>
    </li>
  );
}

export default City;
