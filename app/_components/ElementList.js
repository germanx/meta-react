import ElementCard from '@/app/_components/ElementCard';
import { getElements } from '@/app/_lib/data-service';

async function ElementList({ division_id }) {
  const elements = await getElements();

  if (!elements.length) return null;

  let filteredApps;
  if (division_id === 0) filteredApps = elements;
  else
    filteredApps = elements.filter((item) => item.division_id === division_id);
  // console.log('>>> business_line_id', business_line_id);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredApps.map((element) => (
        <ElementCard element={element} key={element.id} />
      ))}
    </div>
  );
}

export default ElementList;
