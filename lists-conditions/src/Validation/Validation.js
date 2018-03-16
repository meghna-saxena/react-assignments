//This component doesn't need to access state

import React from 'react';

const validation = (props) => {
    //handling conditions by JS if statements
    let validationMessage = 'Text long enough!';

    if (props.validationMessage <= 5) {
        validationMessage = 'Text too short';
    }
    return (
        // handling conditions with ternary expressions
        // ===============================================
        // <div>
        //     {props.inputLength > 5 ?
        //         <p>Text long enough!</p>
        //         : <p>Text too short!</p>
        //     }
        // </div>

        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;