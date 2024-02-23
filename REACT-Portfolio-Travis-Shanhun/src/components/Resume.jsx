import "../../style/resume.css"

const Resume  = () => {
    return ( 
        <section className="resume-section color-change">
            <button className="download-btn center">Download Resume</button>
            <h3 className="title color-change">Technical Skills</h3>
            <p className="color-change">
            HTML5, CSS3, JavaScript (ES5+), jQuery (v3.4+), MERN Stack (MongoDB, Express.js, React.js, Node.js), TypeScript, MSSQL, GraphQL, Mongoose and Sequelize ORM, AngularJS, Bootstrap CSS (v4.0+), Materialize CSS (v1.0)
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
        </section>
     );
}
 
export default Resume;