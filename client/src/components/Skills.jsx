import CV from "../assets/Abdaleh Hersi - Resume.pdf"
import "../css/Skills.css"

export default function Skills() {
    return (
        <div className="skillContainer focus-in">
            <a href={CV} alt="CV" download="CV">Download My CV</a>
            <h1>Skills, Strengths and Proficiencies:</h1>
            <ul className="listContainer gradient-border">
                <li className="listItem">HTML, CSS, Javascript</li>
                <li className="listItem">Node.JS</li>
                <li className="listItem">MongoDB</li>
                <li className="listItem">React</li>
                <li className="listItem">Express</li>
                <li className="listItem">Experience using and handling APIs</li>
                <li className="listItem">SQL</li>
                <li className="listItem">MVC Paradigm</li>
            </ul>
        </div>
    )
}