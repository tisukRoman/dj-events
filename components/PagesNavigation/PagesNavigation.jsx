import { useRouter } from 'next/router';
import { Button } from '../ui/Button';
import styles from './PagesNavigation.module.css';

export function PagesNavigation({ currentPage, lastPage }) {
  const router = useRouter();

  function moveLeft() {
    router.push(`/events/?page=${currentPage - 1}`);
  }

  function moveRight() {
    router.push(`/events/?page=${currentPage + 1}`);
  }

  return (
    <div className={styles.flex}>
      <Button
        disabled={currentPage === 1}
        onClick={moveLeft}
        variant='outlined'
        color='blue'
      >
        PREV
      </Button>
      <Button
        disabled={currentPage === lastPage}
        onClick={moveRight}
        variant='outlined'
        color='blue'
      >
        NEXT
      </Button>
    </div>
  );
}
