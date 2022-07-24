import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import styles from './EventForm.module.css';

export function EventForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.flex}>
        <div className={styles.column}>
          <Input name='event_name' title='Event Name' {...register('name')} />
          <Input name='venue' title='Venue' {...register('venue')} />
          <Input name='date' title='Date' type='date' {...register('date')} />
        </div>
        <div className={styles.column}>
          <Input
            name='performers'
            title='Performers'
            {...register('performers')}
          />
          <Input name='address' title='Address' {...register('address')} />
          <Input name='time' title='Time' {...register('time')} />
        </div>
      </div>
      <div>
        <label htmlFor='description'>Event Description</label>
        <textarea
          className={styles.textarea}
          type='text'
          name='description'
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
