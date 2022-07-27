import qs from 'qs';
import { API_URL, EVENTS_PER_PAGE } from '@/config/index';
import { EventCard } from '@/components/EventCard';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';
import { PagesNavigation } from '@/components/PagesNavigation';

export default function EventsPage({ events, total, page }) {
  return (
    <Layout>
      <PageTitle>Events</PageTitle>
      <div className='event_list'>
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
      <PagesNavigation
        currentPage={Number(page)}
        lastPage={Math.ceil(total / EVENTS_PER_PAGE)}
      />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { page } = ctx.query;

  const queryParams = qs.stringify(
    {
      fields: ['slug', 'name', 'date', 'time'],
      populate: ['image'],
      sort: ['date'],
      pagination: {
        pageSize: EVENTS_PER_PAGE,
        page,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/events?${queryParams}`);
  const { data } = await res.json();
  const events = data.map((event) => event.attributes);

  const totalEventsCount = await fetch(`${API_URL}/api/events/count`);
  const total = await totalEventsCount.json();

  return {
    props: { events, total, page },
  };
}
