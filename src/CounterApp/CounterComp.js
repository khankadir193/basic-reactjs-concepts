import React, { useState } from 'react'

const CounterComp = () => {
    const [counter,setCounter] = useState(0);

    const handleIncDec = (event, content) => {
        if (content === "+") {
            setCounter((prev) => prev + 1);
        } else {
            setCounter((prev) => prev - 1);
        }
    };
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={(event)=>{handleIncDec(event,"+")}}>+</button>
            <button onClick={(event)=>{handleIncDec(event,"-")}}>-</button>
        </div>
    )
}

export default CounterComp;

// https://stackoverflow.com/questions/52428879/objects-are-not-valid-as-a-react-child-if-you-meant-to-render-a-collection-of-c