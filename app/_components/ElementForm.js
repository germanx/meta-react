import { updateElement, updateElementClassifier } from '../_lib/actions';
import ClassifierValueSelect from './ClassifierValueSelect';
import DivisionSelect from './DivisionSelect';
import SubmitButton from './SubmitButton';

function ElementForm({ element, elementClassifiers }) {
  const { id, name, description, division_id } = element;
  // console.log('>>> ElementForm');

  return (
    <div className="flex flex-col gap-3">
      <form
        action={updateElement}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <input type="hidden" name="id" value={id} />

          <label>Element name</label>
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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-10 mt-8">
        {elementClassifiers.map((item) => (
          <form
            action={updateElementClassifier}
            className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col"
            key={item.id}
          >
            <input type="hidden" name="element_id" value={id} />
            <input
              type="hidden"
              name="classifier_id"
              value={item.classifier_id}
            />

            <div className="space-y-2" key={item.id}>
              <label>{item.classifier.name}</label>
              <ClassifierValueSelect
                classifier_id={item.classifier_id}
                name="classifier_value_id"
                id="classifier_value_id"
                defaultValue={item.classifier_value_id}
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
      </div>
    </div>
  );
}

export default ElementForm;
