import Image from 'next/image';
import styles from './EventCard.module.css';

export function EventCard({ event }) {
  let {
    id,
    name,
    slug,
    venue = 'no venue info',
    address = 'no address info',
    performers = 'no performers info',
    date = 'no date info',
    time = 'no time info',
    description = 'no description',
    image = '/images/event-default.png',
  } = event;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt='Event picture' width={170} height={100} />
      </div>
      <div className={styles.info}>
        <div>{name}</div>
        <div>{venue}</div>
        <div>{address}</div>
      </div>
    </div>
  );
}
