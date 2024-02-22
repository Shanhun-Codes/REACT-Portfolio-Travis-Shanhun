// import libraries
import { BrowserRouter as Router} from 'react-router-dom'


// import .css'
import './App.css'

// import components
import Header from './components/Header'
import NavBar from './components/Navigation'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <main className='app'>
          {/* header */}
      <div className='header-main'><Header /></div>
      {/* navbar container*/}
        <div className='navBar-main'><NavBar /></div>
        {/* TODO: conditional rendering of pages */}
      <div className="aboutme-main"><AboutMe /></div>
      {/* footer */}
      <div className="footer-main"><Footer /></div>
    </main>
    </>
  )
}

export default App
