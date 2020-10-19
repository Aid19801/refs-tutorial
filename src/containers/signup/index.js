import React, { useEffect, useState } from 'react';

function SignupPage() {

    const [ journey, setJourney ] = useState(null);
    const [ err, setErr ] = useState(null);

    useEffect(async() => {
        try {
            const res = await fetch("http://localhost:3001/journey");
            const json = await res.json();
            setJourney(json);
        } catch (error) {
            setErr(error);
        }
    }, []);

    if (!journey) return <h1>Loading...</h1>;
    if (err) return <p>api error</p>;
    
    return (
        <div>
            <h1>I am the signup page</h1>
        </div>
    )
}

export default SignupPage;