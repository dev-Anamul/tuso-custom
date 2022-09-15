import React from "react";

function SearchBox() {
  return (
    <section className="">
      <div className="container md:flex justify-between border-y py-2 border-gray-500 px-2 lg:px-0">
        <div className="text-center">
          <button className="border capitalize border-gray-500 rounded px-6 py-2">
            new Incident
          </button>
        </div>
        <div className="md:mt-0 mt-2 lg:px-0 px-4 md:text-left text-center">
          <input
            type="text"
            placeholder="Ticket Number"
            className="border py-2 px-3 rounded border-gray-500 focus:border-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="border py-2 px-4 rounded ml-2 border-gray-500"
          >
            Find
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBox;
