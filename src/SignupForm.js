import React, { useEffect, useRef, forwardRef } from 'react';
import SignupInput from './SignupInput';

function SignupForm({handleSubmit, formName }, forwardedRef) {

    const fullnameRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        fullnameRef.current.focus();
    }, []);

    const collectFormValues = () => {
        const obj = {
            fullname: fullnameRef.current.value,
            email: emailRef.current.value,
        }
        handleSubmit(obj);
    }

    return (
        <div className="signup__form__container flex-col flex-center">
            <h4>{formName}</h4>
            <SignupInput
                name="fullname"
                placeholder="Joe Bloggs"
                type="text"
                ref={fullnameRef}
            />
            <SignupInput
                name="email"
                placeholder="joey@joe.com"
                type="text"
                ref={emailRef}
            />

            <button onClick={collectFormValues}>Submit</button>
        </div>
    )
}

export default forwardRef(SignupForm);