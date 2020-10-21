import React, { forwardRef, useState } from "react";

function SignupInput({ name, type, text, placeholder, options }, forwardedRef) {
  const [checked, setChecked] = useState(false);

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
    case "select":
      return (
        <div className="mt-30">
          <h5>{text}</h5>
          <select ref={forwardedRef} name={name} className={`input__${name}`}>
            {options &&
              options.map(({ code, display_name }, i) => (
                <option value={code} key={i}>
                  {display_name}
                </option>
              ))}
          </select>
        </div>
      );
    case "checkbox":
      return (
        <div className="mt-30">
          <input
            name={name}
            className={`input__${name}`}
            type={type}
            ref={forwardedRef}
            value={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="vehicle1">{text}</label>
        </div>
      );
    default:
      return <div>an error has occurred</div>;
  }
}

export default forwardRef(SignupInput);
