import React from "react";

function SignupInformation({ heading, subheading, buttonText, handleSubmit }) {
  return (
    <div className="mt-30">
      <h4>{heading}</h4>
      <p>{subheading}</p>

      <div className="btn-container">
        <button onClick={handleSubmit}>{buttonText}</button>
      </div>
    </div>
  );
}

export default SignupInformation;
