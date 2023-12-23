'use client';

import { City as CityType } from '@/model/city';
import City from './City';
import useClock from '../hooks/useClock';
import useDragDropList from '../hooks/useDragDropList';

interface Props {
  cities: CityType[];
}
function CityList({ cities: originalCities }: Props) {
  const currentTime = useClock();
  const { items: cities, moveItem } = useDragDropList({ items: originalCities });

  return (
    <ul>
      {cities?.map((city, idx) => (
        <City key={city.cityInfo.id} moveItem={moveItem} time={currentTime} city={city} idx={idx} />
      ))}
    </ul>
  );
}

export default CityList;
