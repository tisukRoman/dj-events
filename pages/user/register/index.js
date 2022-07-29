import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './register.module.css';

const registerSchema = yup.object({
  username: yup.string().required('Required'),
  email: yup.string().email('Wrong format').required('Required'),
  password: yup.string().required('Required').min(8, 'Minimum 8 characters'),
  confirmPassword: yup
    .string()
    .required('Required')
    .min(8, 'Minimum 8 characters'),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema),
  });

  const [confirmError, setConfirmError] = useState(null);

  function onSubmit(data) {
    setConfirmError(null);
    const { username, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setConfirmError(`Passwords don't match`);
    } else {
      console.log({ username, email, password });
    }
  }

  return (
    <Layout title='registration'>
      <div className={styles.formCard}>
        <PageTitle>Registration</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
          <Input
            {...register('username')}
            title='User Name'
            type='text'
            error={errors.username}
            helpertext={errors?.username?.message}
          />
          <Input
            {...register('email')}
            title='Email'
            type='email'
            error={errors.email}
            helpertext={errors?.email?.message}
          />
          <Input
            {...register('password')}
            title='Password'
            type='password'
            error={errors.password}
            helpertext={errors?.password?.message}
          />
          <Input
            {...register('confirmPassword')}
            title='Confirm Password'
            type='password'
            error={errors.confirmPassword || confirmError}
            helpertext={errors?.confirmPassword?.message || confirmError}
          />
          <Button type='submit'>Sign Up</Button>
        </form>
        <p className={styles.redirectText}>
          Have an account already? <Link href='/user/login'>Login</Link> then
        </p>
      </div>
    </Layout>
  );
}
