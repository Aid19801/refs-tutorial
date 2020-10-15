import React, { forwardRef } from 'react';

function SignupInput({ name, placeholder, type }, forwardedRef) {
    return (
        <div className="input__container">
            <input name={name} type={type} placeholder={placeholder} ref={forwardedRef} />
        </div>
    )
}

export default forwardRef(SignupInput);