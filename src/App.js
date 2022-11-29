import React from 'react'

import UseCounter from './CounterApp';
import CounterAppII from './CounterAppII';
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import CounterErrorBoundary from './ErrorBoundary'



function App() {
  return(
    <section id='main-container'>
      <Routes>
          <Route path='/CounterApp' element={<CounterErrorBoundary><UseCounter /></CounterErrorBoundary>} />
          <Route path='/CounterAppII' element={<CounterErrorBoundary><CounterAppII className="counterappII"/></CounterErrorBoundary>} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App