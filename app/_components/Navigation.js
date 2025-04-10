import Link from 'next/link';
import { auth } from '../_lib/auth';

export default async function Navigation() {
  const session = await auth();
  // console.log(session);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/elements"
            className="hover:text-blue-400 transition-colors"
          >
            Elements
          </Link>
        </li>
        <li>
          <Link
            href="/classifiers"
            className="hover:text-blue-400 transition-colors"
          >
            Classifiers
          </Link>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-400 transition-colors">
            About
          </a>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-blue-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-blue-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
