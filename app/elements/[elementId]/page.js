import { getElement } from '@/app/_lib/data-service';
import ElementView from '@/app/_components/ElementView';

export async function generateMetadata({ params }) {
  const { name } = await getElement(params.elementId);
  return { title: name };
}

export default async function Page({ params }) {
  const element = await getElement(params.elementId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ElementView element={element} />
    </div>
  );
}
