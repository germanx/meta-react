import { Suspense } from 'react';

import ApplicationList from '@/app/_components/ApplicationList';
import Spinner from '@/app/_components/Spinner';
import Filter from '@/app/_components/Filter';
import { getBusinessLines } from '@/app/_lib/data-service';

export const metadata = {
  title: 'Applications',
};

// dynamic rendering
// export const revalidate = 0;
export const revalidate = 3600;

export default async function Page({ searchParams }) {
  const filter = searchParams?.filter ?? 'all';

  const business_lines = await getBusinessLines();
  const filterList = business_lines.map((item) => item.name);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-blue-400 font-medium">
        Business Applications
      </h1>

      <div className="flex justify-end mb-8">
        <Filter filterList={filterList} />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <ApplicationList filter={filter} />
      </Suspense>
    </div>
  );
}
