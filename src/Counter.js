// import React from 'react';
import useCustomHook from './ReducerCustomHook'

//definiing initial state for our initial state value
const initialState = 0;
//reducer function from JS takes 2 arguments, the state and action and returns newstate
const reducer = (state, action) => {
  // we use switch state to act on the 3 actions being return in our useReducer hook
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function UseCounter() {
  //useReducer function takes values, the reducer function and the initial state.
  const [count, dispatch] = useCustomHook(reducer, initialState); //returns 2 values via array distracturing the current state and disatoch method

  return (
    <div>
      <h3 className='counter'>Counter => {count}</h3>
      <button className='btns'onClick={(event) => dispatch('increment')}>INCREMENT</button>
      <button className='btns'onClick={(event) => dispatch('decrement')}>DECREMENT</button>
      <button className='btns'onClick={(event) => dispatch('reset')}>RESET</button>
    </div>
  );
}

export default UseCounter;