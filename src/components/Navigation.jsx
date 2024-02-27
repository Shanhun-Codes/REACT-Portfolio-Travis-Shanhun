import { Link } from 'react-router-dom';
import "../style/navBar.css"

 const NavBar = () => {

    
    return ( 
            <nav className="nav main-nav">

              <ul>
                <li className='nav-list'>
                    <Link className="about-link" 
                    to="/about"
                    >About Me</Link>
                </li>

                <li className='nav-list'>
                    <Link className="portfolio-link" 
                    to="/portfolio"
                    >Portfolio</Link>
                </li>

                <li className='nav-list'>
                    <Link className="contact-link" 
                    to="/contact"
                    >Contact Me</Link>
                    </li>

                <li className='nav-list'>
                    <Link className="resume-link" 
                    to="/resume"
                    >Resumè</Link>
                </li>
              </ul>
                
            </nav>
     );
}
 
export default NavBar