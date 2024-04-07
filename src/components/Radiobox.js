const Radiobox = ({ notificationMethods }) => {
  return (
    <>
      <div className="w-[350px] mx-auto my-5">
        <label className="text-base text-left font-semibold text-gray-900">
          Notifications
        </label>
        <p className="text-sm text-gray-500 text-left">
          How do you prefer to receive notifications?
        </p>
        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4">
            {notificationMethods.map((notificationMethod) => (
              <div key={notificationMethod.value} className="flex items-center">
                <input
                  id={notificationMethod.value}
                  name="notification-method"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor={notificationMethod.value}
                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                >
                  {notificationMethod.label}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Radiobox;
