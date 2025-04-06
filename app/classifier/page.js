import { Suspense } from 'react';

import Spinner from '@/app/_components/Spinner';
import Classifier from '@/app/_components/Classifier';

export const metadata = {
  title: 'Classifier',
};

export default async function Page({ searchParams }) {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-blue-400 font-medium">Classifier</h1>

      <Suspense fallback={<Spinner />} key="Classifier">
        <Classifier />
      </Suspense>
    </div>
  );
}
