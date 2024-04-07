import { useState } from "react";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";

const TagsComponent = ({ formValue }) => {
  const [tagValue, setTagValue] = useState("");
  const [isDDVis, setIsDDVis] = useState(false);
  const [isCBVis, setIsCBVis] = useState(false);
  const [isRBVis, setIsRBVis] = useState(false);
  const [tags, setTags] = useState([]);
  const [objArr, setObjArr] = useState([{ value: "", label: "" }]);

  const addTags = (e) => {
    if (e.keyCode === 13 && tagValue) {
      setTags([...tags, tagValue]);
      setTagValue("");
    }
  };
  const deleteTag = (value) => {
    const remainTags = tags.filter((t) => t !== value);
    setTags(remainTags);
  };
  const handleSubmit = () => {
    setObjArr(tags.map((item) => ({ value: item, label: item })));
    if (formValue === 3) {
      setIsDDVis(true);
    } else if (formValue === 4) {
      setIsCBVis(true);
    } else if (formValue === 5) {
      setIsRBVis(true);
    }
  };
  return (
    <>
      {!isDDVis && !isCBVis && !isRBVis && (
        <div>
          <div>
            Provide inputs for the field and press enter to generate a tag{" "}
            <br />
            Finally press on submit button
          </div>
          <div className="border border-black p-2 rounded-lg w-96 mx-auto my-5">
            <div className="flex flex-wrap">
              {tags.map((item, index) => {
                return (
                  <>
                    <div className="bg-yellow-400 m-1 p-1 rounded-md">
                      <button key={index} className="mr-1">
                        {item}
                      </button>
                      <span
                        className="cursor-pointer"
                        onClick={() => deleteTag(item)}
                      >
                        X
                      </span>
                    </div>
                  </>
                );
              })}
              <input
                className="outline-none"
                type="text"
                placeholder=""
                value={tagValue}
                onChange={(e) => setTagValue(e.target.value)}
                onKeyDown={addTags}
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 p-2 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {isDDVis && <Dropdown options={objArr} />}
      {isCBVis && <Checkbox people={objArr} />}
      {isRBVis && <Radiobox notificationMethods={objArr} />}
    </>
  );
};

export default TagsComponent;
