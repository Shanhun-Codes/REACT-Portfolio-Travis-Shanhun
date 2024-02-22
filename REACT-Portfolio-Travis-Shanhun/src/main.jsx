// import react library
import React from 'react'
// import reactDom client
import ReactDOM from 'react-dom/client'
// import app component
import App from './App.jsx'
// import css file
import './index.css'

// create root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
