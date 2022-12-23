import { useEffect } from "react";
import Projects from "../components/Projects";
import { data } from "../data/projectData";

export default function ProjectContainer() {
    const onScreen = () => {
        const containers = document.querySelectorAll(".project")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show")
                    }
                })
            }
        )
        containers.forEach((container) => {
            observer.observe(container);
        })
    }

    useEffect(() => {
        onScreen();
    })
    return (
        <div id="projectContainjer">
            {data.map((data) => <Projects key={data.id} individual={data} />)}
        </div>
    )
}