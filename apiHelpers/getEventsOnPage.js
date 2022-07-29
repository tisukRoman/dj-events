import { API_URL, EVENTS_PER_PAGE } from '@/config/index';
import qs from 'qs';

export const getEventsOnPage = async (page) => {
  const queryParams = qs.stringify(
    {
      fields: ['slug', 'name', 'date', 'time'],
      populate: ['image'],
      sort: ['date'],
      pagination: {
        pageSize: EVENTS_PER_PAGE,
        page: page,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/events?${queryParams}`);
  const { data } = await res.json();
  return data.map((event) => event.attributes);
};
