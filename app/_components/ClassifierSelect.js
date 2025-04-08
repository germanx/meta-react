'use server';

import { getClassifierItems } from '@/app/_lib/data-service';

async function ClassifierSelect({
  classifier_id,
  name,
  id,
  defaultValue,
  className,
}) {
  const items = await getClassifierItems(classifier_id);

  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultValue}
      className={className}
    >
      <option value="">Select Classifier item...</option>
      {items.map((c) => (
        <option key={c.id} value={c.id}>
          {`${c.name.trim()}${
            c.description ? ': ' + c.description.slice(0, 40) : ''
          }`}
        </option>
      ))}
    </select>
  );
}

export default ClassifierSelect;
