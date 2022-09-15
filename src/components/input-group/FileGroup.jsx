import React from "react";

function FileGroup() {
  return (
    <div>
      <label
        className="block px-1 capitalize font-semibold mb-1"
        htmlFor="file"
      >
        Attach Screenshot
      </label>
      <div className="flex">
        <input
          type="text"
          name="file"
          id="file"
          className="block w-full border py-2 px-3 rounded capitalize border-gray-500 focus:border-gray-500 focus:outline-none"
        />
        <button className="border border-gray-500 rounded px-3 py-2 ml-1">
          Browse
        </button>
      </div>
      <div className="flex space-x-5 py-3">
        <span>10010000100.jpg</span>
        <button className="text-indigo-500">remove</button>
      </div>
    </div>
  );
}

export default FileGroup;
