import qs from 'qs';
import { API_URL } from '@/config/index';
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
  const query = qs.stringify(
    {
      fields: ['slug', 'name', 'date', 'time'],
      populate: ['image'],
      sort: ['date'],
      pagination: {
        start: 0,
        limit: 3,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/events?${query}`);
  const { data } = await res.json();
  const events = data.map(event => event.attributes);

  return {
    props: { events },
    revalidate: 1,
  };
}
