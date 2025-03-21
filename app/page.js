import Link from 'next/link';
import Image from 'next/image';
import bg from '@/public/dc-4.jpg';

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          IT Architecture
        </h1>
        <Link
          href="/applications"
          className="bg-blue-400 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-blue-500 transition-all"
        >
          Explore Repository
        </Link>
      </div>
    </main>
  );
}
