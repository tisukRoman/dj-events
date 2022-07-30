import { NEXT_URL } from '@/config/index';

export const checkUserLoggedIn = async () => {
  return await fetch(`${NEXT_URL}/api/me`);
};
