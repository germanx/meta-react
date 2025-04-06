'use server';

import { getBusinessLines } from '@/app/_lib/data-service';

async function BusinessLineSelect({ name, id, defaultValue, className }) {
  const countries = await getBusinessLines();

  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultValue}
      className={className}
    >
      <option value="">Select Business Line...</option>
      {countries.map((c) => (
        <option key={c.id} value={c.id}>
          {c.description}
        </option>
      ))}
    </select>
  );
}

export default BusinessLineSelect;
