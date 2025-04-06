import ClassifierCard from '@/app/_components/ClassifierCard';
import { getClassifiers } from '@/app/_lib/data-service';

async function Classifier() {
  const classifiers = await getClassifiers();

  if (!classifiers.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {classifiers.map((classifier) => (
        <ClassifierCard classifier={classifier} key={classifier.id} />
      ))}
    </div>
  );
}

export default Classifier;
