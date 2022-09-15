import React from "react";

function Button({ text, padding, margin }) {
  console.log(padding);

  return (
    <div>
      <button
        className={`border border-gray-500 py-2  px-${
          padding ? padding : 4
        } rounded capitalize ml-${margin || "0"}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
