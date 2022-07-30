import { NEXT_URL } from '@/config/index';

export const logoutUser = async () => {
  return await fetch(`${NEXT_URL}/api/logout`, {
    method: 'POST',
  });
};
