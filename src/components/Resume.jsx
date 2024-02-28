import "../style/resume.css"
import resume from "../assets/Resume-2024.pdf"

const Resume  = () => {
    return ( 
        <section className="resume-section color-change">
            <div className="btn-container color-change">
            <a className="download-btn center" href={resume} download={resume}>Download Resume</a>
            </div>
            <div className="resume-content">
            <h3 className="title color-change">Education</h3>
            <p className="color-change">EdX Full-Stack Web Development Bootcamp - University of Kansas (Sept 2023 - Mar 2024)</p>
           <ul className="color-change">
            <li 
            className="color-change"> KU Full-Stack Flex Coding Bootcamp
            </li>
            <li className="color-change">Completion Date: 03/12/2024</li>
           </ul>
            <h3 className="title color-change">Technical Skills</h3>
                <ul className="color-change">
                    <li className="color-change">HTML5</li>
                    <li className="color-change">CSS3</li>
                    <li className="color-change">JavaScript (ES5+)</li>
                    <li className="color-change">jQuery (v3.4+)</li>
                    <li className="color-change">MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                    <li className="color-change">TypeScript</li>
                    <li className="color-change">MYSQL</li>
                    <li className="color-change">GraphQL</li>
                    <li className="color-change">Mongoose and Sequelize ORM</li>
                    <li className="color-change">Bootstrap CSS (v4.0+)</li>
                    <li className="color-change">Tailwind CSS (v3.0+)</li>
                    <li className="color-change">Materialize CSS (v1.0+)</li>
                </ul>
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