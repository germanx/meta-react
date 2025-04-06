import Link from 'next/link';
import { getClassifierItems } from '../_lib/data-service';
import ClassifierItem from './ClassifierItem';

async function ClassifierCard({ classifier }) {
  const { id, name, description } = classifier;
  const cls_items = await getClassifierItems(classifier.id);

  return (
    <div className="flex border-primary-800 border">
      <div className="flex-grow">
        <div className="flex justify-between items-center gap-1 pt-5 py-3 px-5 bg-primary-950">
          <div className="flex flex-col justify-center items-start gap-2">
            <h3 className="text-blue-500 font-semibold text-2xl mb-3">
              {name}
            </h3>
            <p>{description}</p>
          </div>
          <div className="border-primary-800 border">
            <Link
              href={`/classifier/update/${id}`}
              className="py-3 px-4 inline-block hover:bg-blue-600 transition-all hover:text-primary-900"
            >
              Update &rarr;
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center g-primary-950 border-t border-t-primary-800 pt-5 pb-3 px-7">
          {cls_items.map((item) => (
            <ClassifierItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassifierCard;
