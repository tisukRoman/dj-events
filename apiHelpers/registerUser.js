import { API_URL } from '@/config/index';

export const registerUser = async (body) => {
  try {
    console.log(body);

    const formData = new FormData();

    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await fetch(`${API_URL}/api/auth/local/register`, {
      method: 'POST',
      body: formData,
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};
