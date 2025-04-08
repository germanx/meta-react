import ComponentCard from '@/app/_components/ComponentCard';
import { getComponents } from '@/app/_lib/data-service';

async function ComponentList({ division_id }) {
  const components = await getComponents();

  if (!components.length) return null;

  let filteredApps;
  if (division_id === 0) filteredApps = components;
  else
    filteredApps = components.filter(
      (item) => item.division_id === division_id
    );
  // console.log('>>> business_line_id', business_line_id);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredApps.map((component) => (
        <ComponentCard component={component} key={component.id} />
      ))}
    </div>
  );
}

export default ComponentList;
