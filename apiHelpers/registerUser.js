import { API_URL } from '@/config/index';

export const registerUser = async (body) => {
  try {
    const res = await fetch(`${API_URL}/api/auth/local/register`, {
      method: 'POST',
      body: JSON.stringify(body),
      'Content-Type': 'application/json',
    });

    const user = await res.json();
    return user;
  } catch (err) {
    return err;
  }
};
