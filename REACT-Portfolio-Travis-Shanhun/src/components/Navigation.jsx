import "../../style/navBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
                    <nav className="nav">
                <a href="/about">About Me</a>
                {/* <Nav.Link as={Link} to="/REACT-Portfolio-Travis-Shanhun/about">About Me</Nav.Link> */}
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                <a href="/resume">Resume</a>
            </nav>
     );
}
 
export default NavBar;