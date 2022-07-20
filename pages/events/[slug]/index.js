import Image from 'next/image';
import { API_URL } from '@/config/index';
import { Layout } from '@/components/Layout';
import styles from '@/styles/EventDetails.module.css';
import { InfoItem } from '@/components/ui/InfoItem';

export default function EventDetails({ event }) {
  const { date, time, name, image, performers, description, venue, address } =
    event;

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.button_group}></div>
        <div>
          {date} at {time}
        </div>
        <h1>{name}</h1>
        <div className={styles.image_wrapper}>
          <Image
            src={image ? image : '/images/event-default.png'}
            alt='Event Picture'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <InfoItem title='Performers:'>{performers}</InfoItem>
        <InfoItem title='Description:'>{description}</InfoItem>
        <InfoItem title={`Venue: ${venue}`}>{address}</InfoItem>
      </div>
    </Layout>
  );
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
