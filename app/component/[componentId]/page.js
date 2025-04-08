import { getApplication } from '@/app/_lib/data-service';
import Application from '@/app/_components/Application';

// export const metadata = {
//   title: 'Application',
// };

export async function generateMetadata({ params }) {
  const { name } = await getApplication(params.applicationId);
  return { title: name };
}

export default async function Page({ params }) {
  const application = await getApplication(params.applicationId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Application application={application} />
    </div>
  );
}
