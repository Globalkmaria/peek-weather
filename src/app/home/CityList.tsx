'use client';

import { City as CityType } from '@/model/city';
import City from './City';
import useClock from '../hooks/useClock';

interface Props {
  cities: CityType[];
}
function CityList({ cities }: Props) {
  const currentTime = useClock();

  return (
    <ul>{cities?.map((city, idx) => <City time={currentTime} key={city.cityInfo.id} city={city} idx={idx} />)}</ul>
  );
}

export default CityList;
