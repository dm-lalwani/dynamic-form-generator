const InputText = () => {
  return (
    <div className="w-72 mx-auto my-5">
      <input
        type="text"
        name="email"
        id="text"
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Please enter your text"
      />
    </div>
  );
};

export default InputText;
