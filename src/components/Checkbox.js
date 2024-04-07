const Checkbox = ({ people }) => {
  return (
    <div className="w-[350px] mx-auto my-5">
      <fieldset>
        <legend className="text-base text-left font-semibold leading-6 text-gray-900">
          Members
        </legend>
        <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
          {people.map((person, personIdx) => (
            <div key={personIdx} className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label
                  htmlFor={`person-${person.value}`}
                  className="select-none font-medium text-gray-900"
                >
                  {person.label}
                </label>
              </div>
              <div className="ml-3 flex h-6 items-center">
                <input
                  id={`person-${person.value}`}
                  name={`person-${person.value}`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default Checkbox;
