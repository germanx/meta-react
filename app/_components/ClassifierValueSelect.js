'use server';

import { getClassifierValues } from '@/app/_lib/data-service';

async function ClassifierValueSelect({
  classifier_id,
  name,
  id,
  defaultValue,
  className,
}) {
  // console.log('>>> ClassifiersSelect', classifier_type_id);
  const items = await getClassifierValues(classifier_id);

  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultValue}
      className={className}
    >
      <option value="">Select Classifiers...</option>
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

export default ClassifierValueSelect;
