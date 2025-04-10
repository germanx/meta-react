import { getElement, getElementClassifiers } from '@/app/_lib/data-service';
import ElementForm from '@/app/_components/ElementForm';

export async function generateMetadata({ params }) {
  const { name } = await getElement(params.elementId);
  return { title: name };
}

export default async function Page({ params }) {
  const element = await getElement(params.elementId);
  const elementClassifiers = await getElementClassifiers(params.elementId);
  // console.log('>>> Element Page', element);

  // const classifierTypes_ext = classifierTypes.map((c) => ({
  //   ...c,
  //   classifier_id: element_classifiers.filter(
  //     (cc) => cc.classifier.classifier_type_id === c.id
  //   )[0]?.classifier_id,
  // }));
  // console.log('>>> classifier_ext', classifier_ext);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ElementForm element={element} elementClassifiers={elementClassifiers} />
    </div>
  );
}
