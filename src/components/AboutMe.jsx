import "../App.css"
import "../style/aboutMe.css"
import headshot from "../assets/AI-headshot.jpeg"



const AboutMe = () => {
    const proSummaryContext = " With more than 15 years of working within the customer service industry, I am now dedicating my career to be a full-stack web developer.  Through guidance from Kansas University, I have established a strong foundation for a seamless experience in front-end and back-end development; specializing in MERN stack JavaScript, and creating dynamic user interface.  With my future employer, I am interested in practicing agile development with DRY code that will enrich natural language and improve communication.  Because of my vast customer service background, I am eager to contribute to innovative projects where I can hone in on technical experience while in a collaborative team environment."

    const aboutMeContext = `Hi, my name is Travis Shanhun. I am currently taking a new direction in my career. Coming from humble beginnings, I have taken leaps forward in life trying to keep up with the direction the world has moved in. Moving from city to city as a young teen, I have seen the world for what it is, and the direction I need to move in to grow with it. As we move further into tech, I have always wanted to ride that wave. Starting on my own by watching tutorials on youtube and using code academy, I eventually enrolled in the University of Kansas City (KU) online coding bootcamp; to give more structure, resources, and instruction to my learning.

    As a novice, full stack web developer I am passionate about growing in every sense. While hardcoding html files and making a polished user interface with CSS is entertaining and leaves most with an immediate sense of accomplishment. I prefer to dive into the more challenging... Logical thought. Logical thought is something that I have found challenging from the beginning and would jump at the opportunity to shadow a more experienced Software Developer, to not only get better at thinking logically, but to master it. I want to be part of solving the  next big issue and will stop at nothing to get there. The reason for this, I have always felt that I can be better, smarter, and bigger than the day before. I believe that sticking only to what you know and what is easy, would eventually become boring or non-challenging and that is not a life I wish to lead.

    My biggest accomplishments to date, would be first coming to the United States and obtaining my GED. Following, being the first in my family to further education to a college level. And finally, attending the KU coding bootcamp and expanding my knowledge as a web developer. We can save the “Software Engineer” title for a later date..

    As mentioned above, I would jump at the opportunity to further my knowledge of the coding world by shadowing an experienced coder and having that chance to code myself and become part of something bigger.

    Even if it's only a small part to begin with...
`
    return ( 
        <section className="aboutme-section">
            <img id="headshot" src={headshot} alt="Headshout of Travis Shanhun" />
            <h3 className="title">Professional Summary</h3>
            <p className="professional-summary">{proSummaryContext}</p>
            <h3 className="title aboutMe-title">About Me</h3>
            <p className="about-me">{aboutMeContext}</p>
        </section>
     );
}
 
export default AboutMe;