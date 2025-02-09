import { useReducer } from 'react';

//Im not sure what needed to go here. This was my best guess//


const initialState = {
    count: 0,
    error: null 
};

//This sets the initial state of the button to 0//


function reducer(state, action) {
    const { type } = action;

    switch (type) {
        case 'increment': {
          return {...state, count: state.count + 1 };  
        }
        case 'decrement': {
            return { ...state, count: state.count - 1};
        }
        case 'reset':
            return { ...state, count: 0};
        default: 
        return state; 
    }
}

//This sets the buttons to increase, decrease, or reset the count//


export const UseReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
        <h2>useReducer counter example</h2>
        <h1>Count: {state.count}</h1>
        <button className='mb-2' onClick={() => dispatch({type: 'increment' })}>increase</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>decrease</button>
        <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </>
    );
};

//The functions have been added to the buttons//
