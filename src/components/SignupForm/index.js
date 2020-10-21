import React, { useRef, createRef } from "react";
import { useParams } from "react-router-dom";
import { SignupInput } from "../index";

function SignupForm({ heading, questions, handleSubmitContainer }) {
  let { section } = useParams();
  const allRefs = useRef(questions.map(() => createRef()));

  const handleSubmitComponent = () => {
    let obj = {};
    allRefs.current.forEach(({ current }) => {
      if (current?.name) {
        obj = {
          ...obj,
          [current.name]: current.value,
        };
      }
    });
    handleSubmitContainer(section, obj);
  };
  return (
    <div className="mt-30">
      <h4>{heading}</h4>
      {questions.map((each, i) => (
        <SignupInput ref={allRefs.current[i]} {...each} key={i} />
      ))}

      <div className="btn-container">
        <button onClick={handleSubmitComponent}>Submit</button>
      </div>
    </div>
  );
}

export default SignupForm;
