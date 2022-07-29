import { API_URL } from '@/config/index';
import qs from 'qs';

export const getEventBySlug = async (slug) => {
  const query = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(
    `${API_URL}/api/slugify/slugs/event/${slug}?${query}`
  );
  const { data } = await res.json();
  return data;
};
