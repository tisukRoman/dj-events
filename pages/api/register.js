import { API_URL } from '@/config/index';
import cookie from 'cookie';

export default async function register(req, res) {
  if (req.method === 'POST') {
    try {
      const strapiRes = await fetch(`${API_URL}/api/auth/local/register`, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await strapiRes.json();
      if (strapiRes.ok) {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('token', data.jwt, {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV !== 'development',
            masAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
          })
        );
        res.status(200).json({ user: data.user });
      } else {
        res.status(data.statusCode).json({ message: data?.error?.message });
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to register' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
