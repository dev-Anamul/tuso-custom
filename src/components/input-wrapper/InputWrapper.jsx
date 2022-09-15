import React from "react";
import FileGroup from "../input-group/FileGroup";
import InputGroup from "../input-group/InputGroup";
import TextArea from "../input-group/TextArea";

function InputWrapper() {
  return (
    <div>
      <div>
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />

        <TextArea label={"Incident"} />
        <FileGroup />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
        <InputGroup
          id={"system"}
          label={"system"}
          optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
        />
      </div>
      <div className="flex">
        <button className="border rounded border-gray-500 px-7 py-2">
          Save
        </button>
        <button className="border rounded border-gray-500 px-6 ml-3">
          Close
        </button>
      </div>
    </div>
  );
}

export default InputWrapper;
