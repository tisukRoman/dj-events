import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { API_URL } from '@/config/index';
import { BackButton } from '@/components/BackButton';
import { EventForm } from '@/components/EventForm';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/ui/PageTitle';

export default function AddEventPage() {
  const router = useRouter();

  async function onSubmit(data) {
    console.log({ data: {...data, slug: 'erkvmkdssd,'} });

    const res = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      body: JSON.stringify(),
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
      <PageTitle>Add Event</PageTitle>
      <EventForm onSubmit={onSubmit} />
    </Layout>
  );
}
