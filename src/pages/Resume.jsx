import "../style/resume.css"
import resume from "/assets/documents/Resume-2024.pdf"
import { technicalSkills, proficiencies } from '../JSONdata/resumeData.json'

const Resume = () => {
    return ( 
        <section className="resume-section">
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
            {technicalSkills.map((technicalSkill, index) => (
                <ul className="color-change" key={index}>
                <li className="color-change">{technicalSkill}</li>
            </ul>
            ))}
            <h3 className="title color-change">Proficiencies</h3>
            {proficiencies.map((proficiency, index) => (
            <ul className="color-change" 
            key={index}>
                <li className="color-change">{proficiency}</li>
            </ul>))}
            </div>
        </section>
     );
}
 
export default Resume;