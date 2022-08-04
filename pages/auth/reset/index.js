import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/Input';
import { PageTitle } from '@/components/ui/PageTitle';
import { Button } from '@/components/ui/Button';

const resetSchema = yup.object({
  password: yup.string().min(8, 'Minimum 8 symbols').required('Required'),
  confirmPassword: yup
    .string()
    .min(8, 'Minimum 8 symbols')
    .required('Required'),
});

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(resetSchema),
  });

  function onSubmit() {}

  return (
    <Layout title='password reset'>
      <div className='formCard'>
        <PageTitle>Reset Password</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
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
            error={errors.confirmPassword}
            helpertext={errors?.confirmPassword?.message}
          />
          <Button type='submit'>Reset Password</Button>
        </form>
      </div>
    </Layout>
  );
}
