import Github from "../assets/githubicon.png"
import LinkedIn from "../assets/linkedIn.png"
import StackOverflow from "../assets/StackOverflow.png"
import "../css/Contact.css"

export default function Contact() {
    return (
        <div className="focus-in contact">
            <address>
                <div className="contactContainer gradient-border">
                    <h1 id="linkCont">You can email me on <a href="mailto:hersiabdaleh@gmail.com" id="link">hersiabdaleh@gmail.com</a>.</h1>
                    <h1>Or you can check out my social media:</h1>
                    <div className="socials">
                        <a href="https://github.com/AbdalehHersi" target="_blank">
                            <img src={Github} alt="Github" className="icons" />
                        </a>
                        <a href="https://stackoverflow.com/users/19364901/abdaleh-hersi" className="icons" target="_blank">
                            <img src={StackOverflow} alt="stackoverflow" className="icons" />
                        </a>
                        <a href="https://www.linkedin.com/in/abdaleh-hersi-605583242/" className="icons" target="_blank">
                            <img src={LinkedIn} alt="linkedin" className="icons" />
                        </a>
                    </div>
                </div>
            </address>
        </div>
    )
}