import Project from "../components/Project";
import projectData from "../JSONdata/projectData.json"

const Portfolio = () => {
    
    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                {projectData.map((project, index) => (
                    <Project 
                        key={index}
                        title={project.title}
                        description={project.description}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                        img={project.img}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;