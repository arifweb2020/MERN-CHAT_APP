import React from 'react';

function Username({onNext}) {
    return (
        <div>
            <h1>Username </h1>
            <button onClick={onNext}>Next</button>
        </div>
    );
}

export default Username;