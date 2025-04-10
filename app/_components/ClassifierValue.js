import Link from 'next/link';

function ClassifierValue({ value }) {
  const { id, name, description } = value;

  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="flex flex-col bg-primary-950">
          <h3 className="text-blue-500 font-semibold text-xl mb-2">{name}</h3>
          <p>{description ? description : '-'}</p>
        </div>
      </div>
    </div>
  );
}

export default ClassifierValue;
