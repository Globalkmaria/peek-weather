import { cache } from 'react';

import { client } from './sanity';

export const getCitiesInfo = cache(async () => {
  return client.fetch(`*[_type == "city"][]
  |order(priority asc){
    "id": _id,
    timezone, 
    country,
    name,
    lon,
    lat,
    priority,
  }`);
});
