import React from 'react';
import Child from './Child';

export default function Parent() {
    // Correctly define the `recivabledata` function
    const recivabledata = (data) => {
        console.log("Data received from Child:", data);
    };

    return (
        <div>
            Parent
            {/* Pass the function as a prop to the Child */}
            <Child recivabledata={recivabledata} />
        </div>
    );
}
import React from 'react';
import Child from './Child';

export default function Parent() {
    // Correctly define the `recivabledata` function
    const recivabledata = (data) => {
        console.log("Data received from Child:", data);
    };

    return (
        <div>
            Parent
            {/* Pass the function as a prop to the Child */}
            <Child recivabledata={recivabledata} />
        </div>
    );
}
