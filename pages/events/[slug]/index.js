import qs from 'qs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { localeDate } from 'helpers/localeDate';
import { API_URL } from '@/config/index';
import styles from '@/styles/EventDetails.module.css';
import { Layout } from '@/components/Layout';
import { InfoItem } from '@/components/ui/InfoItem';
import { Button } from '@/components/ui/Button';
import { PageTitle } from '@/components/ui/PageTitle';

export default function EventDetails({ event }) {
  const { date, time, name, image, performers, description, venue, address } =
    event.attributes;
  const imageURL = image.data.attributes.formats.large.url;

  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.button_group}>
          <div>
            <Button variant='outlined' color='blue'>
              Edit Event
            </Button>
          </div>
          <div>
            <Button variant='outlined' color='red'>
              Delete Event
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
          <Button onClick={goBack} variant='outlined' color='blue'>
            Go Back
          </Button>
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
      populate: ['image'],
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/events?${query}`);
  const { data } = await res.json();

  return {
    props: { event: data[0] },
    revalidate: 1,
  };
}
