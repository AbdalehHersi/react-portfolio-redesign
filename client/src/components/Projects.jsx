import "../css/Project.css";
import icon from "../assets/githubcon.png";
import webpage from "../assets/webpageIcon.png";

export default function Projects(props) {
    return (
        <div className="focus-in project">
            <div className="projDetails">
                <h1>{props.individual.title}</h1>
                <h2>{props.individual.description}</h2>
                <div className="projLinks">
                    <a href={props.individual.url} target="_blank">
                        <img className="icons" src={webpage} alt="icon" />
                    </a>
                    <a href={props.individual.gitRepo} target="_blank">
                        <img className="icons" src={icon} alt="icon" />
                    </a>
                </div>
            </div>
            <div className="projImage">
                <img className="projImg" src={props.individual.projImage} alt="project" />
            </div>
        </div>
    )
}