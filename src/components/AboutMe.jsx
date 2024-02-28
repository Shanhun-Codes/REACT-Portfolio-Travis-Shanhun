import "../App.css"
import "../style/aboutMe.css"
import headshot from "../assets/AI-headshot.jpeg"



const AboutMe = () => {
    const proSummaryContext = "Having amassed over 15 years of invaluable experience in the realm of customer service, I am embarking on a transformative journey to pivot my career towards becoming a proficient full-stack web developer. Guided by the esteemed Kansas University, I have meticulously laid the groundwork for a seamless transition into both front-end and back-end development, specializing particularly in the MERN stack JavaScript and the creation of dynamic user interfaces. In my forthcoming role, I am keen on embracing agile development practices, emphasizing the importance of writing DRY (Don't Repeat Yourself) code to enhance clarity, foster natural language integration, and elevate communication standards within projects. Leveraging my extensive background in customer service, I am enthusiastic about contributing to innovative initiatives that not only allow me to refine my technical prowess but also thrive within a collaborative team setting. "

    const aboutMeContext = `Greetings, I am Travis Shanhun, a determined individual embarking on a new chapter in my career journey. Originating from modest beginnings, I have traversed various cities during my youth, gaining profound insights into the evolving world around me. As we propel further into the realm of technology, I have always harbored a deep-seated desire to ride the wave of innovation.
    Commencing my coding odyssey independently through online tutorials and platforms like YouTube and Codecademy, I later sought a more structured approach to my learning by enrolling in the University of Kansas City (KU) online coding bootcamp. As a budding full-stack web developer, I find immense joy in crafting visually appealing user interfaces with HTML and CSS. However, my true passion lies in the realm of logical thinking—a domain that has posed challenges from the outset.
    Eager to refine my logical reasoning skills, I am fervently seeking an opportunity to shadow seasoned Software Developers. My aspiration is not only to enhance my logical acumen but to master it. Driven by an unwavering commitment to tackling significant challenges, I am resolute in my pursuit of contributing to solving the next big technological conundrum.
    My unwavering belief in continuous self-improvement propels me forward. I firmly adhere to the notion that complacency with the familiar and the easy breeds stagnation—a life path I vehemently reject. Among my proudest achievements are immigrating to the United States, obtaining my GED, becoming the first in my family to pursue higher education at a college level, and expanding my expertise through the KU coding bootcamp.
    While the coveted title of "Software Engineer" may await in the future, my immediate focus is on broadening my horizons within the coding sphere. The prospect of shadowing an experienced coder excites me as it presents an invaluable opportunity to not only observe but actively engage in meaningful projects—a stepping stone towards contributing meaningfully to larger endeavors.
`
    return ( 
        <section className="aboutme-section">
            <img id="headshot" src={headshot} alt="Headshout of Travis Shanhun"/>
            <h3 className="title aboutMe-sub-title">Professional Summary</h3>
            <p className="professional-summary">{proSummaryContext}</p>
            <h3 className="title aboutMe-title aboutMe-sub-title">About Me</h3>
            <p className="about-me">{aboutMeContext}</p>
        </section>
     );
}
 
export default AboutMe;