import { API_URL } from '@/config/index';

export default async function login(req, res) {
  if (req.method === 'POST') {
    try {
      const strapiRes = await fetch(`${API_URL}/api/auth/local`, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await strapiRes.json();
      if (strapiRes.ok) {
        // TODO -- Set HttpOnly Cookie
        res.status(200).json({ user: data.user });
      } else {
        res.status(data.statusCode).json({ message: data?.error?.message });
      }
    } catch (err) {
      res.status(500).json({ error: 'failed to login' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
