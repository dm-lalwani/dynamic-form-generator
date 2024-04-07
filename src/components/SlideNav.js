import { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "./utils/cartSlice";
import FormOutput from "./FormOutput";
import TagsComponent from "./TagsComponent";
import InputText from "./InputText";
import TextArea from "./TextArea";

const formFieldOption = [
  { value: 1, label: "Input Text" },
  { value: 2, label: "Text Area" },
  { value: 3, label: "Dropdown" },
  { value: 4, label: "Checkbox" },
  { value: 5, label: "Radio Button" },
];

const SlideNav = () => {
  const [selectedOption, setSelctedOption] = useState([]);

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleChange = (selectedOption) => {
    setSelctedOption(selectedOption);
  };
  const handleDDSubmit = (selectedOption) => {
    if (selectedOption === 1) {
      dispatch(addItem(<InputText />));
    } else if (selectedOption === 2) {
      dispatch(addItem(<TextArea />));
    } else {
      dispatch(addItem(<TagsComponent formValue={selectedOption} />));
    }
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="px-4">
      <div className="text-2xl mt-5 mb-10 font-semibold text-center">
        Dynamic Form Generator
      </div>
      <div className="flex">
        <div className="w-[49.9%]">
          <div className="mb-5 text-center">
            Select the fields from the dropdown to generate the form <br />{" "}
            After selecting the field please press on the submit button
          </div>
          <Select
            className="w-[350px] mx-auto"
            options={formFieldOption}
            value={selectedOption}
            onChange={handleChange}
          />
          <div className="text-center mt-4">
            <button
              className="bg-blue-600 text-white p-2 rounded-md"
              onClick={() => handleDDSubmit(selectedOption.value)}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="border border-gray-300"></div>
        <div className="w-[49.9%] text-center">
          <div className="text-lg mb-7">Form Generated</div>
          <div className="text-right mr-10">
            {cartItems.length > 0 && (
              <button
                onClick={handleClearCart}
                className="bg-red-500 p-2 text-white rounded-md"
              >
                Clear Form
              </button>
            )}
          </div>
          <FormOutput formop={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default SlideNav;
