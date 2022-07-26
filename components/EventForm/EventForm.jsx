import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import styles from './EventForm.module.css';

export function EventForm({ onSubmit }) {
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.flex}>
        <div className={styles.column}>
          <Input title='Event Name' {...register('name')} />
          <Input title='Venue' {...register('venue')} />
          <Input title='Date' type='date' {...register('date')} />
        </div>
        <div className={styles.column}>
          <Input title='Performers' {...register('performers')} />
          <Input title='Address' {...register('address')} />
          <Input title='Time' {...register('time')} />
        </div>
      </div>
      <div>
        <label htmlFor='description'>Event Description</label>
        <textarea
          className={styles.textarea}
          type='text'
          id='description'
          {...register('description')}
        ></textarea>
      </div>
      <div className={styles.submit_button}>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  );
}
