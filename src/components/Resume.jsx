import "../style/resume.css"
import resume from "../assets/Resume-2024.pdf"

const Resume  = () => {
    return ( 
        <section className="resume-section color-change">
            <div className="btn-container color-change">
            <a className="download-btn center" href={resume} download={resume}>Download Resume</a>
            </div>
            <div className="resume-content">
            <h3 className="title color-change">Technical Skills</h3>
            <p className="color-change">
            HTML5, CSS3, JavaScript (ES5+), jQuery (v3.4+), MERN Stack (MongoDB, Express.js, React.js, Node.js), TypeScript, MYSQL, GraphQL, Mongoose and Sequelize ORM, AngularJS, Bootstrap CSS (v4.0+), Materialize CSS (v1.0)
            </p>
            <h3 className="title color-change">Education</h3>
            <p className="color-change">EdX Full-Stack Web Development Bootcamp - Kansas University (Sept 2023 - Mar 2024)<br />
           <ul className="color-change">
            <li 
            className="color-change"> KU Full-Stack Flex Coding Bootcamp
            </li>
            <li className="color-change">Completion Date: 03/12/2024</li>
           </ul>
            </p>
            <h3 className="title color-change">Proficiencies</h3>
            <ul className="color-change">
                <li className="color-change">HTML/CSS</li>
                <li className="color-change">Javascript</li>
                <li className="color-change">MongoDB</li>
                <li className="color-change">Express</li>
                <li className="color-change">React</li>
                <li className="color-change">Node.js</li>
                <li className="color-change">SQL</li>
            </ul>
            </div>
        </section>
     );
}
 
export default Resume;