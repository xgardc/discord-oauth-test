import axios from 'axios';
import url from 'url';

export default async function handler(req, res) {
  const { code } = req.query;
  if (code) {
    try {
      const formData = new url.URLSearchParams({
        client_id: process.env.DISCORD_ID,
        client_secret: process.env.DISCORD_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:3000/api/auth/callback',
      });
      const response = await axios.post(
        'https://discordapp.com/api/oauth2/token',
        formData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      const { access_token } = response.data;
      const { data: userData } = await axios.get(
        'https://discordapp.com/api/v8/users/@me/guilds',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      res.send(userData);
    } catch (e) {
      console.error(e);
      res.status(400).send(e.message);
    }
  }
  res.json({ message: 'sa' });
}
