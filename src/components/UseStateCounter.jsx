import { useState } from 'react';

//Im not sure what needed to go here. This was my best guess//


export const useStateCounter = () => {
    const [count, setCount] = React.useState(0);

//This is the counter the buttons use//


function handleClick() {
    setCount(count + 1);
}

function handleDecrease() {
    setCount(count - 1);
}

function handleReset() {
    setCount(0);
}

//These the the functions for the buttons. They will increase, decrease, or reset the count//


    return (
        <>
        <h2>useState counter example</h2>
        <h1>{state.count}</h1>
        <button onClick={handleClick}>increase</button>
        <button onClick={handleDecrease}>decrease</button>
        <button onClick={handleReset}>reset</button>
        </>
    )
}

//The functions have been added to the buttons//
