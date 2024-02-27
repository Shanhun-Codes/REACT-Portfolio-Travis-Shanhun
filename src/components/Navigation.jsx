import { Link } from 'react-router-dom';
import { useState } from 'react'

import "../style/navBar.css"

 const NavBar = () => {

    const [ location, setLocation ] = useState("about")

    return ( 
            <nav className="nav">

                <Link className={location === "about" ? "nav-link active" : "nav-link"} 
                to="/about"
                onClick={() => setLocation('about')}
                >About Me</Link>

                <Link className={location === "portfolio" ? "nav-link active" : "nav-link"}
                to="/portfolio"
                onClick={() => setLocation('portfolio')}
                >Portfolio</Link>

                <Link className={location === "contact" ? "nav-link active" : "nav-link"}  
                to="/contact"
                onClick={() => setLocation('contact')}

                >Contact Me</Link>

                <Link className={location === "resume" ? "nav-link active" : "nav-link"}  
                to="/resume"
                onClick={() => setLocation('resume')}

                >Resume</Link>
            </nav>
     );
}
 
export default NavBar

// active: condition ? "active" : ""