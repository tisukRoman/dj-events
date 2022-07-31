import cookie from 'cookie';

export const parseCookie = (token) => {
  if (token) {
    return cookie.parse(token);
  } else {
    return '';
  }
};
