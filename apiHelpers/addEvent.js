import { generateSlug } from '../helpers/generateSulg';
import { API_URL } from '@/config/index';

export const addEvent = async (values) => {
  try {
    debugger;
    values.slug = generateSlug(values.name);

    const data = {};
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === 'image') {
        formData.append('files.image', value[0], value[0].name);
      } else {
        data[key] = value;
      }
    });

    formData.append('data', JSON.stringify(data));

    const res = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      body: formData,
    });

    return res;
  } catch (err) {
    return err;
  }
};
