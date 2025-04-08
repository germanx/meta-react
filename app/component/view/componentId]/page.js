import { getComponent } from '@/app/_lib/data-service';
import ComponentView from '@/app/_components/ComponentView';

export async function generateMetadata({ params }) {
  const { name } = await getComponent(params.componentId);
  return { title: name };
}

export default async function Page({ params }) {
  const component = await getComponent(params.componentId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ComponentView component={component} />
    </div>
  );
}
