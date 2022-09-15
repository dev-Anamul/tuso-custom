import React from "react";
import FormHeading from "../form-heading/FormHeading";
import InputWrapper from "../input-wrapper/InputWrapper";

function InputFormWrapper() {
  return (
    <div>
      <div className="container grid lg:grid-cols-5 md:px-10 py-5 px-3">
        <div className="lg:col-start-2 lg:col-span-3">
          <FormHeading />
          <InputWrapper />
        </div>
      </div>
    </div>
  );
}

export default InputFormWrapper;
