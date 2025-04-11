import { Suspense } from 'react';

import ElementList from '@/app/_components/ElementList';
import Spinner from '@/app/_components/Spinner';
import Filter from '@/app/_components/Filter';
import { getDivisions } from '@/app/_lib/data-service';
import ButtonInsert from '@/app/_components/ButtonInsert';

export const metadata = {
  title: 'Elements',
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
      <h1 className="text-4xl mb-5 text-blue-400 font-medium">Elements</h1>

      <div className="flex justify-between item-center mb-8">
        <ButtonInsert href="/elements/update/0" />
        <Filter filterList={filterList} />
      </div>

      <Suspense fallback={<Spinner />} key={division_id}>
        <ElementList division_id={division_id} />
      </Suspense>
    </div>
  );
}
