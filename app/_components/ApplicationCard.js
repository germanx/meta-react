import Image from 'next/image';
import Link from 'next/link';
import { UsersIcon } from '@heroicons/react/24/solid';

function ApplicationCard({ application }) {
  // const { id, name, maxCapacity, regularPrice, discount, image } =
  const { id, name, descr, business_line } = application;

  return (
    <div className="flex border-primary-800 border">
      {/* <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div> */}

      <div className="flex-grow">
        <div className="flex justify-between pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-blue-500 font-semibold text-2xl mb-3">{name}</h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">{business_line}</p>
          </div>
        </div>

        <div className="flex justify-between items-center pl-5 g-primary-950 border-t border-t-primary-800 text-right">
          <p>{descr}</p>

          <Link
            href={`/applications/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-blue-600 transition-all hover:text-primary-900"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard;
