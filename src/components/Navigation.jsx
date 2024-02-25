import { Link } from 'react-router-dom';


import "../style/navBar.css"

 const NavBar = () => {
    return ( 
            <nav className="nav">

                <Link className="about-link" 
                to="/about"
                >About Me</Link>

                <Link className="portfolio-link" 
                to="/portfolio"
                >Portfolio</Link>

                <Link className="contact-link" 
                to="/contact"
                >Contact Me</Link>

                <Link className="resume-link" 
                to="/resume"
                >Resume</Link>
            </nav>
     );
}
 
export default NavBar