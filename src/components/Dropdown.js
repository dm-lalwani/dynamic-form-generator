import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Dropdown = ({ options }) => {
  const [selectedOption, setSelctedOption] = useState([]);
  const handleChange = (selectedOption) => {
    setSelctedOption(selectedOption);
  };
  //   const handleSubmit = () => {
  //     console.log(selectedOption.value);
  //   };
  return (
    <>
      <Select
        className="w-[350px] mx-auto my-5"
        options={options}
        components={animatedComponents}
        value={selectedOption}
        onChange={handleChange}
        isMulti={true}
      />
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </>
  );
};

export default Dropdown;
