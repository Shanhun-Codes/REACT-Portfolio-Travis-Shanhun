import "../../style/navBar.css"

const NavBar = () => {
    return ( 
            <nav className="nav">
                <a href="/about">About Me</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                <a href="/resume">Resume</a>
            </nav>
     );
}
 
export default NavBar;