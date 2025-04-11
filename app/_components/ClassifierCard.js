import Link from 'next/link';
import { PencilSquareIcon } from '@heroicons/react/24/solid';

import { getClassifierValues } from '@/app/_lib/data-service';
import ClassifierValue from '@/app/_components/ClassifierValue';
import ClassifierDelete from '@/app/_components/ClassifierDelete';

async function ClassifierCard({ classifier }) {
  const { id, name, description } = classifier;
  const cls_values = await getClassifierValues(id);

  return (
    <div className="flex border-primary-800 border">
      <div className="flex-grow">
        <div className="flex justify-between items-center gap-1 pt-5 py-3 px-5 bg-primary-950">
          <div className="flex flex-col justify-center items-start gap-2">
            <h3 className="text-blue-500 font-semibold text-2xl mb-3">
              {name}
            </h3>
            <p>{description}</p>
          </div>

          <div className="flex flex-col gap-1">
            <Link
              href={`/classifiers/update/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <ClassifierDelete id={id} />
          </div>
        </div>

        <div className="flex justify-between items-center g-primary-950 border-t border-t-primary-800 pt-5 pb-3 px-7">
          {cls_values.map((val) => (
            <ClassifierValue value={val} key={val.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassifierCard;
