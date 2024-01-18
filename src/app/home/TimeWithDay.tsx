'use client';

import { City as CityType } from '@/model/city';
import { getTimeWithDay } from '@/utils/time';

interface Props {
  city: CityType;
  time: number;
}

function TimeWithDay({ city, time }: Props) {
  return <span>{getTimeWithDay(city.cityInfo.timezone, time)}</span>;
}

export default TimeWithDay;

export function TimeWithDaySkeleton() {
  return <span className='w-[100px]'></span>;
}
