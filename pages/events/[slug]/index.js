import { API_URL } from '@/config/index';
import { Layout } from '@/components/Layout';
import styles from '@/styles/EventDetails.module.css';

export default function EventDetails({ event }) {
  return <Layout>{event.name}</Layout>;
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((e) => ({
    params: { slug: e.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;

  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const event = await res.json();

  console.log(event);

  return {
    props: { event },
    revalidate: 1,
  };
}
