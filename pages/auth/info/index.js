import { PageTitle } from '@/components/ui/PageTitle';
import { Center } from '@/components/ui/Center';

export default function InfoPage() {
  return (
    <div style={{ height: '500px', width: '100vw', position: 'relative' }}>
      <Center>
        <div>
          <PageTitle>The letter was sent to your email</PageTitle>
          <br />
          <PageTitle>Go there and Reset your password</PageTitle>
        </div>
      </Center>
    </div>
  );
}
