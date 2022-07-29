import { editEvent, getEventBySlug } from '@/apiHelpers/index';
import { useRouter } from 'next/router';
import { BackButton } from '@/components/BackButton';
import { EventForm } from '@/components/EventForm';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function EditEventPage(props) {
  const router = useRouter();

  async function onSubmit(values) {
    const res = await editEvent(values, props.event.id);
    if (!res.ok) {
      console.dir(res);
    } else {
      const { data: event } = await res.json();
      router.push(`/events/${event.attributes.slug}`);
    }
  }

  return (
    <Layout>
      <BackButton />
      <PageTitle>Edit Event</PageTitle>
      <EventForm onSubmit={onSubmit} defaultValues={props.event.attributes} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const event = await getEventBySlug(params.slug);

  return {
    props: { event },
  };
}
