import cookie from 'cookie';

export default async function logout(req, res) {
  if (req.method === 'POST') {
    try {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          exoires: new Date(0),
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200).json({ message: 'Logout successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to logout' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
