import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './login.module.css';
import Link from 'next/link';

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

  const { login } = useAuth();

  return (
    <Layout title='login'>
      <div className={styles.formCard}>
        <PageTitle>Login</PageTitle>
        <form onSubmit={handleSubmit(login)} className={styles.loginForm}>
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
        <p className={styles.redirectText}>
          don't have account? <Link href='/auth/register'>Sign up</Link> then
        </p>
      </div>
    </Layout>
  );
}
