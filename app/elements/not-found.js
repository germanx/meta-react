import Link from 'next/link';

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">Element could not be found :(</h1>
      <Link
        href="/elements"
        className="inline-block bg-blue-400 text-primary-800 px-6 py-3 text-lg"
      >
        Back to all elements
      </Link>
    </main>
  );
}

export default NotFound;
