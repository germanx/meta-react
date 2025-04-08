import SubmitButton from './SubmitButton';
import { updateClassifier, updateClassifierItem } from '../_lib/actions';

function ClassifierForm({ classifier, classifierItems }) {
  const { id, name, description } = classifier;

  return (
    <div className="flex flex-col gap-3">
      <form
        action={updateClassifier}
        className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <input type="hidden" name="id" value={id} />

          <label>Classifier Name</label>
          <input
            name="name"
            // disabled
            defaultValue={name}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Description</label>
          <input
            name="description"
            // disabled
            defaultValue={description}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update classifier
          </SubmitButton>
        </div>
      </form>

      <h3 className="text-2xl mt-6 text-blue-400 font-medium">Items</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {classifierItems.map((item) => (
          <form
            key={item.id}
            action={updateClassifierItem}
            className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col"
          >
            <div className="space-y-2">
              <input type="hidden" name="id" value={item.id} />

              <label>Name</label>
              <input
                name="name"
                // disabled
                defaultValue={item.name}
                className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label>Description</label>
              <input
                name="description"
                // disabled
                defaultValue={item.description}
                className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
              />
            </div>

            <div className="flex justify-end items-center gap-6">
              <SubmitButton pendingLabel="Updating...">
                Update item
              </SubmitButton>
              <SubmitButton pendingLabel="Deleting...">
                Delete item
              </SubmitButton>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}

export default ClassifierForm;
