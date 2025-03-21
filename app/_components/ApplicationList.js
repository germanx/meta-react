import ApplicationCard from '@/app/_components/ApplicationCard';
import { getApplications } from '@/app/_lib/data-service';

async function CabinList({ filter }) {
  const applications = await getApplications();

  if (!applications.length) return null;

  let filteredApps;
  if (filter === 'all') filteredApps = applications;
  else
    filteredApps = applications.filter((item) => item.business_line === filter);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredApps.map((application) => (
        <ApplicationCard application={application} key={application.id} />
      ))}
    </div>
  );
}

export default CabinList;
