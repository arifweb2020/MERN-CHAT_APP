import React from 'react';

function Name({onNext}) {
    return (
        <div>
            <h1>Name</h1>
            <button onClick={onNext}>Next</button>
        </div>
    );
}

export default Name;