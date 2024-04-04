import data from "../JSONdata/aboutMeData.json";
import headShot from "/assets/images/AI-headshot.jpeg";
import { useState } from "react";

import "../App.css";
import "../style/aboutMe.css";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="aboutMe-section">
      <h3 className="title aboutMe-sub-title">Professional Summary</h3>
      <img
        id="headShot"
        className="hide"
        src={headShot}
        alt="Head-shot of Travis Shanhun"
      />
      <p className="professional-summary">{data.proSummaryContext}</p>
      <h3 className="title aboutMe-title aboutMe-sub-title aboutMe">About Me</h3>
      {window.innerWidth <= 768 ? (
        <>
          <p>
            {isExpanded
              ? data.aboutMeContext
              : `${data.aboutMeContext.slice(0, 380)}...`}
          </p>
          <button id="seeMoreLessButton" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "See Less" : "See More"}
          </button>
        </>
      ) : (
        <p>{data.aboutMeContext}</p>
      )}
    </section>
  );
};

export default AboutMe;
