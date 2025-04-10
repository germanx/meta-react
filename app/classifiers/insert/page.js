import ClassifierForm from '@/app/_components/ClassifierTypeForm';

export const metadata = {
  title: 'Insert Classifier',
};

export default async function Page() {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ClassifierForm classifier={{ id: 0, name: '', description: '' }} />
    </div>
  );
}
