import { EventCard } from '@/components/EventCard';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';
import { useAuth } from 'hooks/useAuth';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Layout>
        <div>Not Authenticated</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageTitle>{user?.username}</PageTitle>
      <h2>Your Events:</h2>
      <div className='event_list'>
        {user?.events?.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </Layout>
  );
}
