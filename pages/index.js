import { API_URL } from '@/config/index';
import { Layout } from '@/components/Layout';
import { Showcase } from '@/components/ui/Showcase';
import { PageTitle } from '@/components/ui/PageTitle';
import { EventCard } from '@/components/EventCard';
import styles from '@/styles/HomePage.module.css';

export default function HomePage({ events }) {
  return (
    <Layout>
      <Showcase />
      <PageTitle>Home</PageTitle>
      <div className={styles.event_list}>
        {events.map(({ attributes }) => (
          <EventCard key={attributes.slug} event={attributes} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const { data: events } = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
