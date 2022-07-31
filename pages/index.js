import { getUpcomingEvents } from '@/apiHelpers/index';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from '@/components/Layout';
import { Showcase } from '@/components/ui/Showcase';
import { PageTitle } from '@/components/ui/PageTitle';
import { EventCard } from '@/components/EventCard';
import { useAuth } from 'hooks/useAuth';

export default function HomePage({ events }) {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      toast.success(`Logged in as ${user.username}`);
      toast.clearWaitingQueue();
    }
  }, [user]);

  return (
    <Layout>
      <ToastContainer autoClose={2000} limit={1} />
      <Showcase />
      <PageTitle>Upcoming Events</PageTitle>
      <div className='event_list'>
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const events = await getUpcomingEvents();

  return {
    props: { events },
    revalidate: 1,
  };
}
