import React from 'react';

const DisplayNote = props => {
    return (
        <div className="note">
            <h2>{props.name}</h2>
            <div className="note-content">
                <p>Date modified on {props.modified}</p>
                <button>Delete Note</button>
            </div>
        </div>
    );
}

export default DisplayNote; 