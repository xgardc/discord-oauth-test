import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link href="https://discord.com/api/oauth2/authorize?client_id=931894298666995784&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback&response_type=code&scope=identify%20email%20guilds%20guilds.members.read">
        Discord İle Giriş Yap
      </Link>
    </div>
  );
}
