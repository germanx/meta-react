import { updateApplication } from '../_lib/actions';
import BusinessLineSelect from './BusinessLineSelect';
import SubmitButton from './SubmitButton';

function ApplicationForm({ application }) {
  const { id, name, description, business_line_id } = application;

  return (
    <form
      action={updateApplication}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <input type="hidden" name="id" value={id} />

        <label>Application name</label>
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
        <label>Business Line</label>
        <BusinessLineSelect
          name="business_line_id"
          id="business_line_id"
          defaultValue={Number(business_line_id)}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">
          Update application
        </SubmitButton>
      </div>
    </form>
  );
}

export default ApplicationForm;
