import {
  getComponent,
  getClassifiers,
  getComponentClassifier,
} from '@/app/_lib/data-service';
import ComponentForm from '@/app/_components/ComponentForm';

export async function generateMetadata({ params }) {
  const { name } = await getComponent(params.componentId);
  return { title: name };
}

export default async function Page({ params }) {
  const component = await getComponent(params.componentId);
  const classifier = await getClassifiers();

  const component_classifier = await getComponentClassifier(params.componentId);

  const classifier_ext = classifier.map((c) => ({
    ...c,
    classifier_item_id: component_classifier.filter(
      (cc) => cc.classifier_item.classifier_id === c.id
    )[0]?.classifier_item_id,
  }));
  // console.log('>>> classifier_ext', classifier_ext);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ComponentForm component={component} classifier={classifier_ext} />
    </div>
  );
}
