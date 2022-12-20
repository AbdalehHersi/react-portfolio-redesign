import { Link } from "react-router-dom"
import "../css/Header.css"

export default function Header() {
    return (
        <div className="nav-container">
            <ul className="navbar">
                <li>
                    <button className="headerBtn btn"><Link className="link" to="/">Home</Link></button>
                </li>
                <li>
                    <button className="headerBtn btn"><Link className="link" to="/projects">Projects</Link></button>
                </li>
                <li>
                    <button className="headerBtn btn"><Link className="link" to="/skills">Skills</Link></button>
                </li>
                <li>
                    <button className="headerBtn btn"><Link className="link" to="/contact">Contact</Link></button>
                </li>
            </ul>
        </div>
    )
}