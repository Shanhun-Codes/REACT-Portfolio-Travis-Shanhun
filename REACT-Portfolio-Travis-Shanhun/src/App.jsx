// import libraries
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

// import .css'
import './App.css'

// import components
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'
import Portfolio from './components/Portfolio'


function App() {

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
