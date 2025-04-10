import { getClassifier, getClassifierValues } from '@/app/_lib/data-service';
import ClassifierForm from '@/app/_components/ClassifierForm';

export const metadata = {
  title: 'Classifier',
};
// export async function generateMetadata({ params }) {
//   const { name } = await getClassifier(params.id);
//   return { title: name };
// }

export default async function Page({ params }) {
  const classifier = await getClassifier(params.classifierId);
  const classifierValues = await getClassifierValues(params.classifierId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ClassifierForm
        classifier={classifier}
        classifierValues={classifierValues}
      />
    </div>
  );
}
