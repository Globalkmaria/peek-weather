import { getCities } from '@/service/weather';
import CityList from './home/CityList';
import { BASE_URL } from '@/utils/baseUrl';

export default async function Home() {
  if(!BASE_URL){
    return null;
  }
  
  const cities = await getCities();

  return (
    <section>
      <CityList cities={cities} />
    </section>
  );
}
