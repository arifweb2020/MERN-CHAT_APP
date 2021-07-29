import React from 'react';

function Otp({onNext}) {
    return (
        <div>
            <h1>Otp</h1>
            <button onClick={onNext}>Next</button>
        </div>
    );
}

export default Otp;