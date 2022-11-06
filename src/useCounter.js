import { useReducer } from 'react';

//definiing initial state for our initial state value
const initialState = 0;
//reducer function from JS takes 2 arguments, the state and action and returns newstate
const reducer = (state, action) => {
  // we use switch state to act on the 3 actions being return in our useReducer hook
  switch (action) {
    case 'Increment':
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
  const [count, dispatch] = useReducer(reducer, initialState); //returns 2 values via array distracturing the current state and disatoch method

  return (
    <>
      <h3>Counte => {count}</h3>
      <button onClick={(event) => dispatch('Increment')}>Increment</button>
      <button onClick={(event) => dispatch('decrement')}>Decrement</button>
      <button onClick={(event) => dispatch('reset')}>Reset</button>
    </>
  );
}

export default UseCounter;
