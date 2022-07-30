import { getUpcomingEvents } from '@/apiHelpers/index';
import { Layout } from '@/components/Layout';
import { Showcase } from '@/components/ui/Showcase';
import { PageTitle } from '@/components/ui/PageTitle';
import { EventCard } from '@/components/EventCard';

export default function HomePage({ events }) {

  return (
    <Layout>
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
