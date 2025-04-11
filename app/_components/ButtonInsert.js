import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/solid';

function ButtonInsert({ href }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 mr-6"
    >
      <PlusIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">Insert</span>
    </Link>
  );
}

export default ButtonInsert;
