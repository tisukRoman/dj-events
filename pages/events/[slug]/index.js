import {
  getAllEventsPaths,
  getEventBySlug,
  deleteEvent,
} from '@/apiHelpers/index';
import Image from 'next/image';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { localeDate } from 'helpers/localeDate';
import { getImgUrl } from 'helpers/getImgUrl';
import { Layout } from '@/components/Layout';
import { InfoItem } from '@/components/ui/InfoItem';
import { PageTitle } from '@/components/ui/PageTitle';
import { BackButton } from '@/components/BackButton';
import { NavLink } from '@/components/ui/NavLink';
import styles from './EventDetails.module.css';

export default function EventDetails({ event }) {
  const {
    date,
    time,
    name,
    image,
    performers,
    description,
    venue,
    address,
    slug,
  } = event.attributes;

  async function onDelete() {
    await deleteEvent(event.id);
  }

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.button_group}>
          <div className={styles.button}>
            <NavLink href={`/events/edit/${slug}`} color='blue'>
              <AiFillEdit /> Edit Event
            </NavLink>
          </div>
          <div className={styles.button}>
            <NavLink onClick={onDelete} href={`/events/?page=1`} color='red'>
              <AiFillDelete /> Delete Event
            </NavLink>
          </div>
        </div>
        <div>
          {localeDate(date, 'US-en')} at {time}
        </div>
        <PageTitle>{name}</PageTitle>
        <div className={styles.image_wrapper}>
          <Image
            src={getImgUrl(image, 'large', '/images/event-default.png')}
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
  const paths = await getAllEventsPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = await getEventBySlug(params.slug);
  return {
    props: { event },
    revalidate: 10,
  };
}
