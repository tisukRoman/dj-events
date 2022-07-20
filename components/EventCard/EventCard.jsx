import Image from 'next/image';
import Button from '../ui/Button/Button';
import styles from './EventCard.module.css';

export function EventCard({ event }) {
  const { image, name, date, time } = event;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={image ? image : '/images/event-default.png'}
          alt='Picture of the Event'
          width={300}
          height={200}
          objectFit
        />
      </div>
      <div className={styles.info}>
        <h4>{name}</h4>
        <div>
          {date} at {time}
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <Button>Details</Button>
      </div>
    </div>
  );
}
