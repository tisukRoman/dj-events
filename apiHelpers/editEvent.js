import { API_URL } from '@/config/index';

export const editEvent = async (values, id) => {
  const data = {};
  const formData = new FormData();

  try {
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'image') {
        if (Array.isArray(value) && value.length) {
          formData.append('files.image', value[0], value[0].name);
        } else {
          return;
        }
      } else {
        data[key] = value;
      }
    });

    formData.append('data', JSON.stringify(data));

    const res = await fetch(`${API_URL}/api/events/${String(id)}`, {
      method: 'PUT',
      body: formData,
    });

    return res;
  } catch (err) {
    return err;
  }
};
