import { getCities } from '@/service/weather';
import CityList from './home/CityList';

export const revalidate = 0;

export default async function Home() {
  const cities = await getCities();

  return (
    <section>
      <CityList cities={cities} />
    </section>
  );
}
