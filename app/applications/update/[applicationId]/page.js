import { getApplication } from '@/app/_lib/data-service';
import ApplicationForm from '@/app/_components/ApplicationForm';

export async function generateMetadata({ params }) {
  const { name } = await getApplication(params.applicationId);
  return { title: name };
}

export default async function Page({ params }) {
  const application = await getApplication(params.applicationId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ApplicationForm application={application} />
    </div>
  );
}
