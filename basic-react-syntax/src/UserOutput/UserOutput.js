import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Hello, good day!</p>
            <p>I love you! &hearts;</p>
        </div>
    );
};

export default UserOutput;

