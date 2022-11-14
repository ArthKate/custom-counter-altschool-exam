import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render


//wrap our app component in a browser router => React router context ...
ReactDOM.render (
    <BrowserRouter>
      <React.StrictMode>
        <App />
        
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);