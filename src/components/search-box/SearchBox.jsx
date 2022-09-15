import React from "react";
import Button from "../butoon/Button";

function SearchBox() {
  return (
    <section className="">
      <div className="container flex justify-between border-y py-2 border-gray-500">
        <Button text="new Incidents" padding={"5"} />
        <div>
          <form>
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
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchBox;
