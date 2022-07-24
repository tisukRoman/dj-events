import { BackButton } from '@/components/BackButton';
import { EventForm } from '@/components/EventForm';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function AddEventPage() {
  return (
    <Layout>
      <BackButton />
      <PageTitle>Add Event</PageTitle>
      <EventForm />
    </Layout>
  );
}
