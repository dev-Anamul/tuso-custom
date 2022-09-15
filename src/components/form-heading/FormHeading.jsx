import React from "react";

function FormHeading() {
  return (
    <div className="py-5">
      <h1 className="font-bold text-4xl font-serif">Post Incident</h1>
      <p>
        Fields marked by <span className="text-red-600 text-lg">*</span> are
        mandatory
      </p>
    </div>
  );
}

export default FormHeading;
