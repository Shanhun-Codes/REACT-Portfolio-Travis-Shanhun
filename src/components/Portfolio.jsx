import "../style/portfolio.css"
import Project from "./Project";

const Portfolio = () => {
    const projectInfo = [
        {
            title: "ClockWise",
            description: "Fullstack Web App",
            deployedLink: "https://nameless-fjord-16797-0078e08b982c.herokuapp.com/login",
            githubLink: "https://github.com/TimbirICT/ClockWise"
        },
        {
            title: "TheBlog",
            description: "Fullstack Web App",
            deployedLink: "https://theblog-raszerot-40892167d83a.herokuapp.com/signup",
            githubLink: "https://github.com/RaszeroT/The-Blog"
        },
        {
            title: "Workday Planner",
            description: "Third-party API Scheduler",
            deployedLink: "https://raszerot.github.io/work-day-scheduler-live-time/",
            githubLink: "https://github.com/RaszeroT/work-day-scheduler-live-time"
        }    
    ];

    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                <p>These applications can be interacted with on this page. However for full quality interaction please use the deployed application links 🙃</p>
                {projectInfo.map((project, index) => (
                    <Project 
                        key={index}
                        title={project.title}
                        description={project.description}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;