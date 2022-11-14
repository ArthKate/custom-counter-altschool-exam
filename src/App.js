import React from 'react'
import UseCounter from './CounterApp';
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'


function App() {
  return(
    <section className='main-container'>
      <Routes>
      <Route path='/CounterApp' element={<UseCounter />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      </section>
  )
}

export default App