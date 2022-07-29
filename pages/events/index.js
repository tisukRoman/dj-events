import { getEventsOnPage, getTotalEventsCount } from '@/apiHelpers/index';
import { EVENTS_PER_PAGE } from '@/config/index';
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
  const events = await getEventsOnPage(page);
  const total = await getTotalEventsCount();

  return {
    props: { events, total, page },
  };
}
