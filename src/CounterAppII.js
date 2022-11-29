import { useState } from 'react'
import { NavLink } from 'react-router-dom';
//import { ErrorBoundary } from 'react-error-boundary';
import './index.css'

function CounterAppII() {
  //defining state using the useState hook
  const [counter, setCounter] = useState(0);

  return (
    <div className='counter main-container'>
      <button className='btns' onClick={(e) => setCounter(prev => prev + 1)}>+</button>
        <span className='counter'>&nbsp;{ counter }&nbsp;</span>
      <button className='btns' onClick={(e)=> setCounter(prev => prev - 1)}>-</button>
      <br />
      <NavLink to='/CounterApp' ><button className='navbtn'>Home</button></NavLink>
    </div>
  );
}

export default CounterAppII;
