import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { generateSlug } from 'helpers/generateSulg';
import { API_URL } from '@/config/index';
import { BackButton } from '@/components/BackButton';
import { EventForm } from '@/components/EventForm';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function AddEventPage() {
  const router = useRouter();

  async function onSubmit(values) {
    values.slug = generateSlug(values.name);

    const data = {};
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === 'image') {
        formData.append('files.image', value[0], value[0].name);
      } else {
        data[key] = value;
      }
    });

    formData.append('data', JSON.stringify(data));

    const res = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      alert('Item with such name already exists, please change it a little');
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
