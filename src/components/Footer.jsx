import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../style/footer.css"

const Footer = () => {
    const socialIcons = {
        githubIcon: faGithub,
        linkedinIcon: faLinkedin,
        instagramIcon: faInstagram
    };

    return ( 
        <footer>
            <nav className="nav">
            <p>Designed by Travis Shanhun</p>

               <ul>
                    <li className="nav-list footer-nav-list">
                        <a className="footer-nav" href="https://github.com/RaszeroT"><span className="icon">
                        <FontAwesomeIcon
                                      className="icon-size icon"
                                      icon={socialIcons.githubIcon}
                                  />
                                  </span>
                                  </a>
                        
                    </li>
                    <li className="nav-list footer-nav-list">
                        <a className="footer-nav" href="https://www.linkedin.com/in/travis-shanhun-4340b62a1/"><span className="icon">
                        <FontAwesomeIcon
                                      className="icon-size icon"
                                      icon={socialIcons.linkedinIcon}
                                  /> 
                                  </span>
                                  </a>
                    </li>
                    <li className="nav-list footer-nav-list">
                        <a className="footer-nav" href="https://www.instagram.com/shanhun.codes/"><span className="icon"> 
                        <FontAwesomeIcon
                                      className="icon-size icon"
                                      icon={socialIcons.instagramIcon}
                                  /> 
                                </span>
                                  </a>
                    </li>
               </ul>
                <div className="designs">
                    <p><span className="copy">&copy;</span>2024 All Rights Reserved</p>
                </div>
            </nav>
        </footer>
     );
}
 
export default Footer;
