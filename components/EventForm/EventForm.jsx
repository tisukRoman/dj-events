import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import styles from './EventForm.module.css';

const validationSchema = yup.object({
  name: yup.string().required('Name required'),
  venue: yup.string().required('Venue required'),
  date: yup.string().required('Date required'),
  time: yup.string().required('Time required'),
  address: yup.string().required('Address required'),
  performers: yup.string().required('Performers required'),
  time: yup.string().required('Time required'),
  description: yup.string(),
});

export function EventForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.flex}>
        <div className={styles.column}>
          <Input
            {...register('name')}
            title='Event Name'
            error={!!errors.name}
            helpertext={errors?.name?.message}
          />
          <Input
            {...register('venue')}
            title='Venue'
            error={!!errors.venue}
            helpertext={errors?.venue?.message}
          />
          <Input
            {...register('date')}
            title='Date'
            type='date'
            error={!!errors.date}
            helpertext={errors?.date?.message}
          />
        </div>
        <div className={styles.column}>
          <Input
            {...register('performers')}
            title='Performers'
            error={!!errors.performers}
            helpertext={errors?.performers?.message}
          />
          <Input
            {...register('address')}
            title='Address'
            error={!!errors.address}
            helpertext={errors?.address?.message}
          />
          <Input
            {...register('time')}
            title='Time'
            error={!!errors.time}
            helpertext={errors?.time?.message}
          />
        </div>
      </div>
      <div>
        <label htmlFor='description'>Event Description</label>
        <textarea
          {...register('description')}
          className={styles.textarea}
          type='text'
          id='description'
        ></textarea>
      </div>
      <div className={styles.submit_button}>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  );
}
