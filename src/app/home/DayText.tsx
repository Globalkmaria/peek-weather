'use client';

import { CityInfo } from '@/model/city';
import { Weather } from '@/model/weather';
import { getDay } from '@/utils/time';

interface Props {
  cityInfo: CityInfo;
  daily: Weather;
}

function DayText({ cityInfo, daily }: Props) {
  return <span className='font-bold'>{getDay(cityInfo.timezone, daily.timeStamp)}</span>;
}

export default DayText;

export function DayTextSkeleton() {
  return <span className='w-8'></span>;
}
