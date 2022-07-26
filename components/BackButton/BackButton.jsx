import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Button } from '../ui/Button';

export function BackButton() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <Button onClick={goBack} variant='outlined' color='blue'>
      <AiOutlineArrowLeft /> Go Back
    </Button>
  );
}
