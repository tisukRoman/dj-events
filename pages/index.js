import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import Showcase from '@/components/Showcase';
import PageTitle from '@/components/PageTitle';

export default function HomePage({ events }) {
  console.log(events);
  return (
    <Layout>
      <Showcase />
      <PageTitle>Home</PageTitle>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1
  };
}