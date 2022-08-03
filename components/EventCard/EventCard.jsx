import Image from 'next/image';
import { useRouter } from 'next/router';
import { getImgUrl } from 'helpers/getImgUrl';
import { localeDate } from 'helpers/localeDate';
import styles from './EventCard.module.css';
import { Button } from '../ui/Button';

export function EventCard({ event }) {
  const { slug, image, name, date, time } = event;

  const router = useRouter();

  function goToDetails() {
    router.push(`/events/${slug}`);
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={getImgUrl(image, 'thumbnail', '/images/event-default.png')}
          alt='Picture of the Event'
          width={300}
          height={180}
          objectFit='cover'
        />
      </div>
      <div className={styles.info}>
        <h4>{name}</h4>
        <div>
          {localeDate(date, 'US-en')} at {time}
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <Button onClick={goToDetails}>Details</Button>
      </div>
    </div>
  );
}
