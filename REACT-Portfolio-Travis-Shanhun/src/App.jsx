// import libraries
import React, { useState } from 'react'

// import .css'
import './App.css'

// import components
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'

function App() {

  return (
    <>
    <main className='app'>
          {/* header */}
      <div className='header-main'><Header /></div>
        {/* TODO: conditional rendering of pages */}
        {/* about me */}
      <div className="aboutme-main"><AboutMe /></div>
         {/* Contact Me*/} 
      <div className="aboutme-main"><ContactMe /></div>

      {/* footer */}
      <div className="footer-main"><Footer /></div>
    </main>
    </>
  )
}

export default App
