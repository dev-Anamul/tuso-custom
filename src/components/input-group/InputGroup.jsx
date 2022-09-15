import React from "react";

function InputGroup({ label, id, optionArr, required }) {
  return (
    <div className="mb-4">
      <div>
        <label
          htmlFor={id}
          className="block px-1 capitalize font-semibold mb-1"
        >
          {label}
          {required ? <span className="text-red-600 text-lg">*</span> : null}
        </label>
        <select
          name={label}
          id={id}
          className="block w-full border py-2 px-3 rounded capitalize border-gray-500 focus:border-gray-500 focus:outline-none"
        >
          <option value="select">select</option>
          {optionArr.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputGroup;
