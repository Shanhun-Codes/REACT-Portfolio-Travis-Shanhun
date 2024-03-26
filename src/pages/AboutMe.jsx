import data from "../JSONdata/aboutMeData.json";
import headShot from "/assets/images/AI-headshot.jpeg";

import "../App.css";
import "../style/aboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMe-section">
      <img id="headShot" className="hide" src={headShot} alt="Head-shot of Travis Shanhun" />
      <h3 className="title aboutMe-sub-title">Professional Summary</h3>
      <p className="professional-summary">{data.proSummaryContext}</p>
      <h3 className="title aboutMe-title aboutMe-sub-title">About Me</h3>
      <p className="about-me">{data.aboutMeContext}</p>
    </section>
  );
};

export default AboutMe;
