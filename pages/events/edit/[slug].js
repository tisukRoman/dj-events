import qs from 'qs';
import { useRouter } from 'next/router';
import { API_URL } from '@/config/index';
import { BackButton } from '@/components/BackButton';
import { EventForm } from '@/components/EventForm';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function EditEventPage({ event }) {
  const router = useRouter();

  async function onSubmit(data) {
    const { slug, name, venue, address, date, time, description } = data;
    const submitData = {
      data: { slug, name, venue, address, date, time, description },
    };

    const res = await fetch(`${API_URL}/api/events/${String(event.id)}`, {
      method: 'PUT',
      body: JSON.stringify(submitData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      alert('Some error occured');
    } else {
      const data = await res.json();
      console.log(data);
      router.push(`/events`);
    }
  }

  return (
    <Layout>
      <BackButton />
      <PageTitle>Edit Event</PageTitle>
      <EventForm onSubmit={onSubmit} defaultValues={event.attributes} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { slug } = ctx.params;

  const query = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(
    `${API_URL}/api/slugify/slugs/event/${slug}?${query}`
  );
  const { data } = await res.json();

  return {
    props: { event: data },
  };
}
