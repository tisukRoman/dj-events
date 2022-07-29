import { addEvent } from '@/apiHelpers/index';
import { useRouter } from 'next/router';
import { BackButton } from '@/components/BackButton';
import { EventForm } from '@/components/EventForm';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function AddEventPage() {
  const router = useRouter();

  async function onSubmit(values) {
    const res = await addEvent(values);

    if (!res.ok) {
      console.dir(res);
      return;
    }

    const { data: event } = await res.json();
    router.push(`/events/${event.attributes.slug}`);
  }

  return (
    <Layout>
      <BackButton />
      <PageTitle>Add Event</PageTitle>
      <EventForm onSubmit={onSubmit} />
    </Layout>
  );
}
