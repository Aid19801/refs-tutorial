import React from 'react';
import { SignupInput } from '../index';

function SignupForm({ heading, questions }) {
    return (
        <div>
            <h4>{heading}</h4>
            {questions && questions.map((each, i) => {
                return <SignupInput {...each} key={i} />
            })}
        </div>
    )
}

export default SignupForm;