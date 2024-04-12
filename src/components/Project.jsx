import "../style/project.css";
import comingSoon from "/assets/images/comingSoon.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
  const iFrameStyle = {
    border: "0",
    width: "85%",
    height: "500px",
    borderRadius: "10px",
  };

  const imgStyle = {
    border: "0",
    width: "100%",
    borderRadius: "10px",
  };

   const socialIcons = {
    githubIcon: faGithub,
    linkedinIcon: faLinkedin,
    instagramIcon: faInstagram,
  };

  return (
    <figure className="bump-down">
      <label className="title title-adjust">{props.title}</label>
      <br />
      <p className="description">{props.description}</p>

      {/* Conditionally render image or iframe based on device width and deployed link */}
      {window.innerWidth < 600 && props.deployedLink === "" && (
        <img src={comingSoon} style={imgStyle} />
      )}

      {/* Conditionally render image instead of iframe of website based on device width */}
      {window.innerWidth < 600  && (
        <img src={props.img} style={imgStyle} />
      )}

      {window.innerWidth >= 600 && props.deployedLink && (
        <>
          <iframe
            className="iframe"
            src={props.deployedLink}
            style={iFrameStyle}
          ></iframe>
          <br />
        </>
      )}

      {/* Additional condition for rendering image if deployed link is empty */}
      {window.innerWidth >= 600 && !props.deployedLink && (
        <img src={comingSoon} style={iFrameStyle} />
      )}

      {/* Conditionally render deployed application link */}
      {props.deployedLink && (
        <a href={props.deployedLink}>Deployed Application Link</a>
      )}
      <a href={props.githubLink}>Github Link</a>
      <br />
    </figure>
  );
};

export default Project;
