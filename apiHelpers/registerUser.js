import { NEXT_URL } from '@/config/index';

export const registerUser = async (body) => {
  return await fetch(`${NEXT_URL}/api/register`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
