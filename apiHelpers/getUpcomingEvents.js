import { API_URL } from '@/config/index';
import qs from 'qs';

export const getUpcomingEvents = async () => {
  const query = qs.stringify(
    {
      fields: ['slug', 'name', 'date', 'time'],
      populate: ['image'],
      sort: ['date'],
      pagination: {
        page: 1,
        pageSize: 3,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/events?${query}`);
  const { data } = await res.json();
  return data.map((event) => event.attributes);
};
