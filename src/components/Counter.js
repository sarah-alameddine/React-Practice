import React, {useState} from 'react';

/**
 *  A counter that a user can click 
 *  Increases counter when increment button is clicked
 *  Decreases counter when decrement button is clicked
 *  Number cannot go below 0
 * @returns A counter that increments or decrements when clicked
 */
const Counter = () => {
    //let countNum = 0;
    // A useState HOOK returs 2 things 
        // 1) name of varible we want to use
        // 2) a function - which when called sets it to what we call it to 
    // React.useState(0); -> 0 is just our start number
    // *NOTE*: AT TOP OF PAGE IF WE IMPORTED 
        //import React from 'react';
    // THEN WE WRITE THE CODE LIKE THIS :
        // React.useState(0); -> 0 is just our start number 
    const [count,setCount] = useState(0);

    /**
     * 
     *  To make this code smaller we can put these functions directly in the {} beelow 
     */
    // const handleCountIn =() => {
    //     setCount(count + 1);
    // };
    const handleCountDe = () => {
        if(count !== 0){
            setCount(count - 1);
        };
    };
    return (
        <div>
            <h2>Counter</h2>
            {/** We must use () => to call a reference to setCount  */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleCountDe}>Decrement</button>
            <h3>{count}</h3>

        </div>
    );


};

export default Counter;