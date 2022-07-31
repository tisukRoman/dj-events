import { API_URL } from '@/config/index';

export const getUserInfo = async (token) => {
  const res = await fetch(`${API_URL}/api/users/me?populate=*`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};
