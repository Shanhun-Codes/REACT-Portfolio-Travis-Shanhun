import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/Navigation'

function App() {
  return (
    <>
      <div className='header-main'>
        <Header />
        </div>
        <div className='navBar-main'>
        <NavBar />
      </div>
      </>
  )
}

export default App
