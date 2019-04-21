import React, {useState} from 'react';

function test() {
    const [count, updateCount] = useState(0);

    return(
            <h1>You clicked <span onClick={() => updateCount(count + 1)}>{count}</span> times!</h1>
    )
}

export default test;