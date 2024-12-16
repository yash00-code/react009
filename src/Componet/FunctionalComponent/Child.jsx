import React from 'react';

export default function Child(props) {
    // Sample data
    const dt = {
        name: "Yash",
        age: 18
    };

    // Correctly define the `senddata` function
    const senddata = () => {
        props.recivabledata(dt); // Send data to the Parent component
    };

    return (
        <div>
            <button onClick={senddata}>Please click the button</button>
        </div>
    );
}

