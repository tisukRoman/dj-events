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

  async function onSubmit(data) {
    data.slug = generateSlug(data.name);

    const res = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    if (!res.ok) {
      alert('Event with such name already exists');
    } else {
      const { data } = await res.json();
      router.push(`/events/${data.attributes.slug}`);
    }
  }

  return (
    <Layout>
      <BackButton />
      <PageTitle>Add Event</PageTitle>
      <EventForm onSubmit={onSubmit} />
    </Layout>
  );
}
