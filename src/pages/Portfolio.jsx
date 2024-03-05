import Project from "../components/Project";
import projectData from "../projectData.json"

import "../style/portfolio.css"


const Portfolio = () => {
    
    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                <p>These applications can be interacted with on this page. However for full quality interaction please use the deployed application links 🙃</p>
                {projectData.map((project, index) => (
                    <Project 
                        key={index}
                        title={project.title}
                        description={project.description}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                        hasDeployedLink={project.hasDeployedLink}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;