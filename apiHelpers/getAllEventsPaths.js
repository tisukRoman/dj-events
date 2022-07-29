import { API_URL } from '@/config/index';

export const getAllEventsPaths = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const { data: events } = await res.json();

  return events.map((e) => ({
    params: { slug: e.attributes.slug },
  }));
};
