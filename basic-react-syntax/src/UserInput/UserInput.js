import React from 'react';

const UserInput = (props) => {
    const style = {
        border: '2px solid blue',
        marginLeft: '100px',
        padding: '8px',
        width: '40%'
    }

    return <input type="text"
        style={style}
        onChange={props.changed}
        value={props.currentName} />
};

export default UserInput;
