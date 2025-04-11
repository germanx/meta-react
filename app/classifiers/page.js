import { Suspense } from 'react';

import Spinner from '@/app/_components/Spinner';
import ClassifierList from '@/app/_components/ClassifierList';
import ButtonInsert from '@/app/_components/ButtonInsert';

export const metadata = {
  title: 'Classifiers',
};

export default async function Page({ searchParams }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl mb-5 text-blue-400 font-medium">Classifiers</h1>
        <div>
          <ButtonInsert href="/classifiers/insert" />
        </div>
      </div>

      <Suspense fallback={<Spinner />} key="classifiers">
        <ClassifierList />
      </Suspense>
    </div>
  );
}
