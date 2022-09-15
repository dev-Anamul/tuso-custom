import React from "react";

function MessageBox() {
  return (
    <div>
      <div className="container bg-slate-200 py-5 px-24 rounded">
        <form className="">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="8"
            className="block w-full border border-gray-500 rounded focus:outline-none focus:border-gray-500 p-3"
          ></textarea>
          <button className="border border-gray-500 py-2 px-5 rounded capitalize ml-0 mt-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
