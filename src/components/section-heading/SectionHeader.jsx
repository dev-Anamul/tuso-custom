import React from "react";

function SectionHeader({ text }) {
  return (
    <div className="container mx-auto capitalize text-2xl font-semibold py-3">
      <div>{text}</div>
    </div>
  );
}

export default SectionHeader;
