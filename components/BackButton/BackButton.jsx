import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Button } from '../ui/Button';
import styles from './BackButton.module.css';

export function BackButton() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <div className={styles.back_button}>
      <Button onClick={goBack} variant='outlined' color='blue'>
        <AiOutlineArrowLeft /> Go Back
      </Button>
    </div>
  );
}
