export default function LoginCallback() {
  return <></>;
}

export async function getServerSideProps({ query }) {
  const DiscordOauth2 = require('discord-oauth2');
  const oauth = new DiscordOauth2();

  oauth.getUser(query.code).then(console.log);
  /*
    {
      username: '1337 Krew',
      locale: 'en-US',
      mfa_enabled: true,
      flags: 128,
      avatar: '8342729096ea3675442027381ff50dfe',
      discriminator: '4421',
      id: '80351110224678912'
    }
  */
  return {
    props: {
      // user
    },
  };
}
