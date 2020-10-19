import React, { forwardRef } from 'react';

function SignupInput({ 
    input_id,
    type,
    name,
    placeholder,
}, forwardedRef) {

    switch(type) {
        case "text":
            return (
                <div>
                    <h5>{name}</h5>
                    <input
                        className={`input__${input_id}`}
                        type={type}
                        placeholder={placeholder}
                        ref={forwardedRef}
                        />
                </div>
            );
        default:
            return <div>an error has occurred</div>
    }
}

export default forwardRef(SignupInput);