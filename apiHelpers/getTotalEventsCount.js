import { API_URL } from '@/config/index';

export const getTotalEventsCount = async () => {
  const res = await fetch(`${API_URL}/api/events/count`);
  const total = await res.json();
  return total;
};
