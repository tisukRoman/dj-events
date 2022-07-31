import { parseCookie } from 'helpers/parseCookie';
import { getUserInfo } from '@/apiHelpers/getUserInfo';
import { EventCard } from '@/components/EventCard';
import { Layout } from '@/components/Layout';

export default function Dashboard({ user }) {
  return (
    <Layout>
      <div className='event_list'>
        {user?.events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req.headers.cookie);
  const user = await getUserInfo(token);
  return {
    props: { user },
  };
}
