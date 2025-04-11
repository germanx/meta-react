import SubmitButton from '@/app/_components/SubmitButton';
import { updateClassifierValue, updateClassifier } from '@/app/_lib/actions';

function ClassifierForm({ classifier, classifierValues }) {
  const { id, name, description } = classifier;

  return (
    <div className="flex flex-col gap-5">
      <form
        action={updateClassifier}
        className="bg-primary-900 px-6 text-lg flex gap-6 flex-col"
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

      {/* <h3 className="text-2xl mt-6 text-blue-400 font-medium">Values</h3> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 xl:gap-10">
        {classifierValues?.map((item) => (
          <form
            key={item.id}
            action={updateClassifierValue}
            className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col"
          >
            <div className="space-y-2">
              <input type="hidden" name="id" value={item.id} />
              <input type="hidden" name="classifier_id" value={id} />

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
                Update value
              </SubmitButton>
            </div>
          </form>
        ))}
        <form
          action={updateClassifierValue}
          className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col border border-accent-600"
        >
          <div className="space-y-2">
            <input type="hidden" name="id" value={0} />
            <input type="hidden" name="classifier_id" value={id} />

            <label>
              <strong>New Item:</strong> Name
            </label>
            <input
              name="name"
              // disabled
              className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label>Description</label>
            <input
              name="description"
              // disabled
              className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            />
          </div>

          <div className="flex justify-end items-center gap-6">
            <SubmitButton pendingLabel="Updating...">Insert value</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClassifierForm;
