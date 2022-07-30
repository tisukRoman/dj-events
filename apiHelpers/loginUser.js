import { NEXT_URL } from '@/config/index';

export const loginUser = async ({ identifier, password }) => {
  return await fetch(`${NEXT_URL}/api/login`, {
    method: 'POST',
    body: JSON.stringify({ identifier, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
