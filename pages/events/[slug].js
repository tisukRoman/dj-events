import qs from 'qs';
import Image from 'next/image';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { localeDate } from 'helpers/localeDate';
import { API_URL } from '@/config/index';
import { Layout } from '@/components/Layout';
import { InfoItem } from '@/components/ui/InfoItem';
import { Button } from '@/components/ui/Button';
import { PageTitle } from '@/components/ui/PageTitle';
import { BackButton } from '@/components/BackButton';
import styles from '@/styles/EventDetails.module.css';

export default function EventDetails({ event }) {
  const { date, time, name, image, performers, description, venue, address } =
    event;

  const imageURL = image.data.attributes.formats.large.url;

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.button_group}>
          <div className={styles.button}>
            <Button variant='outlined' color='blue'>
              <AiFillEdit /> Edit Event
            </Button>
          </div>
          <div className={styles.button}>
            <Button variant='outlined' color='red'>
              <AiFillDelete /> Delete Event
            </Button>
          </div>
        </div>
        <div>
          {localeDate(date, 'US-en')} at {time}
        </div>
        <PageTitle>{name}</PageTitle>
        <div className={styles.image_wrapper}>
          <Image
            src={image ? imageURL : '/images/event-default.png'}
            alt='Event Picture'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <InfoItem title='Performers:'>{performers}</InfoItem>
        <InfoItem title='Description:'>{description}</InfoItem>
        <InfoItem title={`Venue: ${venue}`}>{address}</InfoItem>
        <div className={styles.back_button}>
          <BackButton />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const { data: events } = await res.json();

  const paths = events.map((e) => ({
    params: { slug: e.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;

  const query = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(
    `${API_URL}/api/slugify/slugs/event/${slug}?${query}`
  );
  const { data } = await res.json();

  return {
    props: { event: data.attributes },
    revalidate: 1,
  };
}
