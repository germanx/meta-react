import { Suspense } from 'react';

import ComponentList from '@/app/_components/ComponentList';
import Spinner from '@/app/_components/Spinner';
import Filter from '@/app/_components/Filter';
import { getDivisions } from '@/app/_lib/data-service';

export const metadata = {
  title: 'Applications',
};

// dynamic rendering
// export const revalidate = 0;
export const revalidate = 3600;

export default async function Page({ searchParams }) {
  const filter = searchParams?.filter ?? 'all';

  const divisions = await getDivisions();
  const filterList = divisions.map((item) => item.name);

  let division = null;
  let division_id = 0;
  if (filter !== 'all') {
    division = divisions.filter((item) => item.name === filter);
    division_id = division[0].id;
  }
  // console.log('>>> BL:', business_line);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-blue-400 font-medium">Components</h1>

      <div className="flex justify-end mb-8">
        <Filter filterList={filterList} />
      </div>

      <Suspense fallback={<Spinner />} key={division_id}>
        <ComponentList division_id={division_id} />
      </Suspense>
    </div>
  );
}
