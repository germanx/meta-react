import {
  getClassifiers,
  getClassifiersAndElements,
  getElement,
  getElementClassifiers,
} from '@/app/_lib/data-service';
import ElementForm from '@/app/_components/ElementForm';

export async function generateMetadata({ params }) {
  if (params.elementId === '0') return { title: 'insert element' };

  const { name } = await getElement(params.elementId);
  return { title: name };
}

export default async function Page({ params }) {
  const id = Number(params.elementId);

  let element = { id: 0, name: '', description: '', division_id: null };
  let elementClassifiers = null;
  const classifiers = await getClassifiers();

  if (id) {
    element = await getElement(id);
    const ec = await getElementClassifiers(id);
    elementClassifiers = classifiers.map((i) => ({
      ...i,
      element_id: id,
      classifier_value_id: ec.filter((j) => j.classifier_id === i.id)[0]
        ?.classifier_value_id,
    }));
  } else elementClassifiers = classifiers;

  // console.log('>>> page >>>', elementClassifiers);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ElementForm
        element={element}
        classifiers={classifiers}
        elementClassifiers={elementClassifiers}
      />
    </div>
  );
}
