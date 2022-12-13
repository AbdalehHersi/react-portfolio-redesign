import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <button><Link to="/about">About</Link></button>
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