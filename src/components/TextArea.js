const TextArea = () => {
  return (
    <div className="w-72 mx-auto my-5">
      <label
        htmlFor="comment"
        className="block text-left text-sm font-medium leading-6 text-gray-900"
      >
        Add your comment
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
    </div>
  );
};

export default TextArea;
