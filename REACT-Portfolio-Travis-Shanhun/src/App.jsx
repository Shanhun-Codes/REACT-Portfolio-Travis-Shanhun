// import libraries
import { Outlet } from 'react-router-dom';

// import .css'
import './App.css'

// import components
import Header from './components/Header'
import Footer from './components/Footer'


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
