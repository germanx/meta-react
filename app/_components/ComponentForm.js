import { updateComponent, updateComponentClassifier } from '../_lib/actions';
import ClassifierSelect from './ClassifierSelect';
import DivisionSelect from './DivisionSelect';
import SubmitButton from './SubmitButton';

function ComponentForm({ component, classifier }) {
  const { id, name, description, division_id } = component;

  return (
    <div className="flex flex-col gap-3">
      <form
        action={updateComponent}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <input type="hidden" name="id" value={id} />

          <label>Component name</label>
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

        <div className="space-y-2">
          <label>Business Division</label>
          <DivisionSelect
            name="division_id"
            id="division_id"
            defaultValue={Number(division_id)}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update application
          </SubmitButton>
        </div>
      </form>

      {/* <h3 className="text-2xl mt-6 text-blue-400 font-medium">
        Classification
      </h3> */}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-10 mt-8">
        {classifier.map((item) => (
          <form
            action={updateComponentClassifier}
            className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col"
            key={item.id}
          >
            <input type="hidden" name="component_id" value={id} />
            <input type="hidden" name="classifier_id" value={item.id} />

            <div className="space-y-2" key={item.id}>
              <label>{item.name}</label>
              <ClassifierSelect
                classifier_id={item.id}
                name="classifier_item_id"
                id="classifier_item_id"
                defaultValue={item.classifier_item_id}
                className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
              />
            </div>
            <div className="flex justify-end items-center gap-6">
              <SubmitButton pendingLabel="Updating...">
                Update classification
              </SubmitButton>
            </div>
          </form>
        ))}

        {/* <form
          action={updateComponentClassifier}
          className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col"
        >
          <input type="hidden" name="component_id" value={id} />

          {classifier.map((item) => (
            <div className="space-y-2" key={item.id}>
              <label>{item.name}</label>
              <ClassifierSelect
                classifier_id={item.id}
                name="classifier_item_id"
                id="classifier_item_id"
                defaultValue={item.classifier_item_id}
                className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
              />
            </div>
          ))}
          <div className="flex justify-end items-center gap-6">
            <SubmitButton pendingLabel="Updating...">
              Update classification
            </SubmitButton>
          </div>
        </form> */}

        {/* {component_classifier.map((item) => (
          <form
            key={item.id}
            action={updateComponentClassifier}
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
          </form>
        ))} */}
      </div>
    </div>
  );
}

export default ComponentForm;
