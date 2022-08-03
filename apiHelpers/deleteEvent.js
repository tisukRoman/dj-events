import { API_URL } from '@/config/index';

export const deleteEvent = async (id) => {
  try {
    return await fetch(`${API_URL}/api/events/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    return err;
  }
};
