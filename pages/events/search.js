import qs from 'qs';
import { API_URL } from '@/config/index';
import { EventCard } from '@/components/EventCard';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function SearchPage({ events }) {
  return (
    <Layout>
      <PageTitle>Search Results:</PageTitle>
      <div className='event_list'>
        {events.length ? events.map((event) => (
          <EventCard key={event.slug} event={event} />
        )) : <h3>No such events...</h3>}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { term } = ctx.query;

  const query = qs.stringify(
    {
      fields: ['slug', 'name', 'date', 'time'],
      populate: ['image'],
      sort: ['date'],
      filters: {
        $or: [
          {
            name: {
              $containsi: term,
            },
          },
          {
            performers: {
              $containsi: term,
            },
          },
          {
            description: {
              $containsi: term,
            },
          },
          {
            venue: {
              $containsi: term,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/events?${query}`);
  const { data } = await res.json();
  const events = data.map((event) => event.attributes);

  return {
    props: { events },
  };
}
