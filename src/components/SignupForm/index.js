import React, { useRef, createRef } from "react";
import { useParams } from "react-router-dom";
import { SignupInput } from "../index";

function SignupForm({ heading, questions, handleSubmitContainer }) {
  let { section } = useParams();
  console.log("section: ", section);

  const allRefs = useRef(questions.map(() => createRef()));

  const handleSubmitComponent = () => {
    let obj = {};
    console.log("allrefs", allRefs.current[0].current.value);
    allRefs.current.forEach(({ current }) => {
      console.log("each input ", current);
      obj = {
        ...obj,
        [current.name]: current.value,
      };
    });
    console.log("obj is now", obj);
  };
  return (
    <div className="mt-30">
      <h4>{heading}</h4>
      {questions &&
        questions.map((each, i) => (
          <SignupInput ref={allRefs.current[i]} {...each} key={i} />
        ))}

      <div className="btn-container">
        <button onClick={handleSubmitComponent}>Submit</button>
      </div>
    </div>
  );
}

export default SignupForm;
