import { API_URL } from '@/config/index';
import cookie from 'cookie';

export default async function me(req, res) {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      return res.status(403).json({ message: 'Not Authorized' });
    }
    const { token } = cookie.parse(req.headers.cookie);
    const strapiRes = await fetch(`${API_URL}/api/users/me?populate=*`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await strapiRes.json();
    if (strapiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: 'User forbidden' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
