import CV from "../assets/Abdaleh Hersi - Resume.pdf"

export default function Skills() {
    return (
        <div className="skillContainer focus-in">
            <a href={CV} alt="CV" download="CV">Download My CV</a>
            <h1>Skills, Strengths and Proficiencies:</h1>
            <ul>
                <li>HTML, CSS, Javascript</li>
                <li>Node.JS</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>Express</li>
                <li>Experience using and handling APIs</li>
                <li>SQL</li>
                <li>MVC Paradigm</li>
            </ul>
        </div>
    )
}