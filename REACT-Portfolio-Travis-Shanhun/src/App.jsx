// import libraries
import { BrowserRouter as Router} from 'react-router-dom'


// import .css'
import './App.css'

// import components
import Header from './components/Header'
import NavBar from './components/Navigation'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <>
    <main className='app'>
      <Router>
          {/* header */}
      <div className='header-main'><Header /></div>
      {/* navbar container*/}
        <div className='navBar-main'><NavBar /></div>
        {/* aboutme */}
      <div className="aboutme-main"><AboutMe /></div>
      </Router>
    </main>
    </>
  )
}

export default App
