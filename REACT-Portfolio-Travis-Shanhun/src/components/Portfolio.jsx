import "../../style/portfolio.css"
import Project from "./Project";

const Portfolio = () => {   
    const projectInfo =
        {
            title: "ClockWise",
            description: "Fullstack Web App",
            deployedLink: "https://nameless-fjord-16797-0078e08b982c.herokuapp.com/login",
            githubLink: "https://github.com/TimbirICT/ClockWise"
        }
        
    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                    <Project 
                        title={projectInfo.title}
                        description={projectInfo.description}
                        deployedLink={projectInfo.deployedLink}
                        githubLink={projectInfo.githubLink}
                    />
            </div>
        </section>
    );
}
 
export default Portfolio;