import { getCities } from '@/service/weather';
import Item from './home/City';

export default async function Home() {
  const cities = await getCities();

  return (
    <section>
      <ul>
        {cities.map((city, idx) => (
          <Item key={city.cityInfo.id} city={city} idx={idx} />
        ))}
      </ul>
    </section>
  );
}
