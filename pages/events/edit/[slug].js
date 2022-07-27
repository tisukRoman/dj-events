import qs from 'qs';
import { useRouter } from 'next/router';
import { API_URL } from '@/config/index';
import { BackButton } from '@/components/BackButton';
import { EventForm } from '@/components/EventForm';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function EditEventPage(props) {
  const router = useRouter();

  async function onSubmit(values) {
    const data = {};
    const formData = new FormData();

    console.log(values);

    Object.entries(values).forEach(([key, value]) => {
      if (key === 'image') {
        if(Array.isArray(value) && value.length){
          formData.append('files.image', value[0], value[0].name);
        }else{
          return;
        }
      } else {
        data[key] = value;
      }
    });

    formData.append('data', JSON.stringify(data));

    const res = await fetch(`${API_URL}/api/events/${String(props.event.id)}`, {
      method: 'PUT',
      body: formData,
    });

    if (!res.ok) {
      alert('Could not update the event');
      return;
    }

    const { data: event } = await res.json();
    router.push(`/events/${event.attributes.slug}`);
  }

  return (
    <Layout>
      <BackButton />
      <PageTitle>Edit Event</PageTitle>
      <EventForm onSubmit={onSubmit} defaultValues={props.event.attributes} />
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
