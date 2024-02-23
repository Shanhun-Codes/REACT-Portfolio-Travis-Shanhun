import React from 'react'


import "../../style/navBar.css"

 const NavBar = ({ currentPage, navigate}) => {
    return ( 
            <nav className="nav">

                <a className={currentPage === "about" ? "nav-link active" : "nav-link"} 
                href="#about"
                onClick={() => navigate("about")}
                >About Me</a>

                <a className={currentPage === "portfolio" ? "nav-link active" : "nav-link"} 
                href="#portfolio"
                onClick={() => navigate("portfolio")}
                >Portfolio</a>

                <a className={currentPage === "contact" ? "nav-link active" : "nav-link"} 
                href="#contact"
                onClick={() => navigate("contact")}
                >Contact Me</a>

                <a className={currentPage === "resume" ? "nav-link active" : "nav-link"} 
                href="#resume"
                onClick={() => navigate("resume")}
                >Resume</a>
            </nav>
     );
}
 
export default NavBar