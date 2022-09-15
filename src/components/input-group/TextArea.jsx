import React from "react";

function TextArea({ label }) {
  return (
    <div className="mb-4">
      <label
        className="block px-1 capitalize font-semibold mb-1"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        className="block w-full border py-2 px-3 rounded capitalize border-gray-500 focus:border-gray-500 focus:outline-none"
        name={label}
        id={label}
        cols="30"
        rows="5"
      ></textarea>
    </div>
  );
}

export default TextArea;
