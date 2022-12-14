import "../css/Home.css"
import Portrait from "../assets/portrait.jpg"

export default function Home() {
    return (
        <div className="homeContainer focus-in">
            <div className="titleContainer">
                <h1>Abdaleh Hersi</h1>
            </div>
            <div className="aboutContainer">
                <div className="aboutHeaderContainer">
                    <h1 className="aboutHeader flicker-in-glow">About Me</h1>
                        <img className="portrait" src={Portrait} alt="portrait" />
                </div>
                <div className="aboutText gradient-border">
                    <p>I'm an aspiring full-stack web developer with a passion for all things technological.
                        With a couple of projects under my belt and a bunch of technologies at hand,
                        I feel ready to take on the world.</p>
                    <p>
                        I love gaming and art and I love creative developing.
                        My goal is to combine these two passions into an explosive result
                        that's breathtakingly fun in the eyes.
                    </p>
                    <cite>
                        “Setting goals is the first step in turning the invisible into the visible.” — Tony Robbins
                    </cite>
                </div>
            </div>
        </div>
    )
}