import React from "react";
import InputGroup from "../input-group/InputGroup";

function AdvanceSearchThree() {
  return (
    <div className="">
      <div className="container grid md:grid-cols-7 md:gap-4 gap-y-0 items-center border-b border-gray-500 py-4 px-3 md:px-2 lg:px-0">
        <div className="col-span-2">
          <InputGroup
            id={"system"}
            label={"system"}
            optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
          />
        </div>
        <div className="col-span-2">
          <InputGroup
            id={"system"}
            label={"system"}
            optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
          />
        </div>
        <div className="col-span-2">
          <InputGroup
            id={"system"}
            label={"system"}
            optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
          />
        </div>
        <div className="col-span-2">
          <InputGroup
            id={"system"}
            label={"system"}
            optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
          />
        </div>
        <div className="col-span-2">
          <InputGroup
            id={"system"}
            label={"system"}
            optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
          />
        </div>
        <div className="col-span-2">
          <InputGroup
            id={"system"}
            label={"system"}
            optionArr={["SC+", "SC Legacy", "eLMIS", "eLAB"]}
          />
        </div>
        <div className="col-span-1">
          <button className="border border-gray-500 py-2 px-5 rounded mt-3 w-full">
            find
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvanceSearchThree;
