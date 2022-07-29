import { searchEvents } from '@/apiHelpers/index';
import { EventCard } from '@/components/EventCard';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function SearchPage({ events }) {
  return (
    <Layout>
      <PageTitle>Search Results:</PageTitle>
      <div className='event_list'>
        {events.length ? (
          events.map((event) => <EventCard key={event.slug} event={event} />)
        ) : (
          <h3>No such events...</h3>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const events = await searchEvents(query.term);

  return {
    props: { events },
  };
}
