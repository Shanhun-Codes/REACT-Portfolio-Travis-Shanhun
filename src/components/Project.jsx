import "../style/project.css"

const Project = (props) => {
    
    const iFrameStyle = {
        border: '0',
        width: '100%',
        height: '500px',
        borderRadius: '10px'
    };

    return ( 
        <figure className="bump-down">
            <label className="title title-adjust">{props.title}</label><br />
            <p className="description">{props.description}</p>
            <iframe className="iframe" src={props.deployedLink} allowFullScreen style={iFrameStyle}></iframe><br />
            <a href={props.deployedLink}>Deployed Application Link</a>
            <a href={props.githubLink}>GitHub Link</a><br />
        </figure>
    );
};
 
export default Project;