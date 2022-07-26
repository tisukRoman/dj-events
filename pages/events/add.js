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
    debugger;
    data.slug = data.name.toLowerCase().split(' ').join('-');

    const textEntries = Object.entries(data).filter(
      ([key, v]) => key !== 'image'
    );

    const formData = new FormData();

    formData.append('image', data.image);

    textEntries.forEach(([key, value]) => formData.append(key, value));

    const res = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      body: JSON.stringify({data: formData}),
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
