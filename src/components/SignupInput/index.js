import React, { forwardRef } from "react";

function SignupInput({ name, type, text, placeholder }, forwardedRef) {
  switch (type) {
    case "text":
      return (
        <div className="mt-30">
          <h5>{text}</h5>
          <input
            name={name}
            className={`input__${name}`}
            type={type}
            placeholder={placeholder}
            ref={forwardedRef}
          />
        </div>
      );
    default:
      return <div>an error has occurred</div>;
  }
}

export default forwardRef(SignupInput);
