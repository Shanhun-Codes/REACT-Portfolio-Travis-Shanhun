// import react library
// import React from 'react'
// import reactDom client
import ReactDOM from 'react-dom'
// import app component
import App from './App.jsx'
// import css file
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';

import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import ContactMe from './components/ContactMe.jsx';
import Resume from './components/Resume.jsx';


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <ContactMe />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

// create root element
ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}/>
)
