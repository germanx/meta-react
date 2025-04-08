'use server';

import { getDivisions } from '@/app/_lib/data-service';

async function DivisionSelect({ name, id, defaultValue, className }) {
  const divisions = await getDivisions();

  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultValue}
      className={className}
    >
      <option value="">Select Business Division...</option>
      {divisions.map((c) => (
        <option key={c.id} value={c.id}>
          {c.description}
        </option>
      ))}
    </select>
  );
}

export default DivisionSelect;
