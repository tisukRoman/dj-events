import * as yup from 'yup';
import Link from 'next/link';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './login.module.css';

const loginSchema = yup.object({
  username: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  const { login, error } = useAuth();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  function onPasswordSend() {
    console.log('Send password');
  }

  return (
    <Layout title='login'>
      <ToastContainer />
      <div className={styles.formCard}>
        <PageTitle>Login</PageTitle>
        <form onSubmit={handleSubmit(login)} className='form'>
          <Input
            {...register('username')}
            title='User Name'
            type='text'
            error={errors.username}
            helpertext={errors?.username?.message}
          />
          <Input
            {...register('password')}
            title='Password'
            type='password'
            error={errors.password}
            helpertext={errors?.password?.message}
          />
          <Button type='submit'>Login</Button>
        </form>
        <p onClick={onPasswordSend} className={styles.redirectText}>
          {`Forgot your password?`}{' '}
          <Link href='/auth/info'>
            Reset then
          </Link>{' '}
          then
        </p>
        <p className={styles.redirectText}>
          {`don't have account?`} <Link href='/auth/register'>Sign up</Link>{' '}
          then
        </p>
      </div>
    </Layout>
  );
}
