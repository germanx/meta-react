// import Image from 'next/image';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import TextExpander from '@/app/_components/TextExpander';

function Application({ application }) {
  const { id, name, descr, business_line } = application;

  return (
    <div className="border border-primary-800 py-3 px-10 mb-24">
      <div className="flex">
        <h3 className="text-accent-100 font-black text-5xl mb-5 bg-primary-950 p-6 pb-1 w-[100%]">
          {name}
        </h3>
        <div className="flex gap-3 items-center mb-2">
          <UsersIcon className="h-5 w-5 text-primary-600" />
          <p className="text-2xl text-primary-200">{business_line}</p>
        </div>
      </div>

      <p className="text-2xl text-primary-300 mb-10">{descr}</p>
    </div>
  );
}

export default Application;
