import { Suspense } from 'react';

import Spinner from '@/app/_components/Spinner';
import Classifier from '@/app/_components/Classifier';
import Link from 'next/link';

export const metadata = {
  title: 'Classifier',
};

export default async function Page({ searchParams }) {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl mb-5 text-blue-400 font-medium">Classifier</h1>
        {/* <div className="border-primary-800 border"> */}
        <div className="">
          <Link
            href={`/classifier/insert`}
            className="py-3 px-4 inline-block hover:bg-blue-600 transition-all hover:text-primary-900"
          >
            Insert &rarr;
          </Link>
        </div>
      </div>

      <Suspense fallback={<Spinner />} key="Classifier">
        <Classifier />
      </Suspense>
    </div>
  );
}
