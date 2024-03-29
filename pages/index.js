import { getUpcomingEvents } from '@/apiHelpers/index';
import { useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from '@/components/Layout';
import { Showcase } from '@/components/ui/Showcase';
import { PageTitle } from '@/components/ui/PageTitle';
import { EventCard } from '@/components/EventCard';
import { useAuth } from 'hooks/useAuth';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/router';

export default function HomePage({ events }) {
  const router = useRouter();
  const { user } = useAuth();
  const toastId = useRef(null);
  const render = useRef(true);

  useEffect(() => {
    if (user && render.current && !toast.isActive(toastId.current)) {
      render.current = false;
      toastId.current = toast.success(`Logged in as ${user.username}`);
      toast.clearWaitingQueue();
    }
  }, [user]);

  return (
    <Layout>
      <ToastContainer autoClose={2000} />
      <Showcase />
      <PageTitle>Upcoming Events</PageTitle>
      <div className='event_list'>
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
      <Link href='/events/?page=1'>
        <div style={{ margin: '2em auto', maxWidth: '15em' }}>
          <Button>View all events</Button>
        </div>
      </Link>
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
