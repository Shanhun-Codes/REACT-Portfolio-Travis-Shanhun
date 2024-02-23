// import react library
// import React from 'react'
// import reactDom client
import ReactDOM from 'react-dom/client'
// import app component
import App from './App.jsx'
// import css file
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import ContactMe from './components/ContactMe.jsx';
import Resume from './components/Resume.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
