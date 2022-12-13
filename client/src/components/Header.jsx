import { Link } from "react-router-dom"
import "../css/Header.css"

export default function Header() {
    return (
        <div className="nav-container">
            <ul className="navbar">
                <li>
                    <button><Link to="/">Home</Link></button>
                </li>
                <li>
                    <button><Link to="/skills">Skills</Link></button>
                </li>
                <li>
                    <button><Link to="/contact">Contact</Link></button>
                </li>
                <li>
                    <button><Link to="/projects">Projects</Link></button>
                </li>
            </ul>
        </div>
    )
}