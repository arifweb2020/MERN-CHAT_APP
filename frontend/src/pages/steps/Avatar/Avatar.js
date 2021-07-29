import React from 'react';

function Avatar({onNext}) {
    return (
        <div>
            <h1>Avatar</h1>
            <button onClick={onNext}>Next</button>
        </div>
    );
}

export default Avatar;