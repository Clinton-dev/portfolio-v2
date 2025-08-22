import {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard.tsx";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    const projects = [
        {
            title: "Cymelle Website",
            description: "A modern, responsive website built for Cymelle, a company offering Equipment-as-a-Service (EaaS) solutions. The site showcases Cymelle’s services with a clean design, optimized performance, and intuitive user experience, ensuring accessibility across all devices.",
            technologies: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
        },
        {
            title: "Yasil Landing Page",
            description: "A sleek and modern web built for Yasil, a Nairobi-based ride-hailing platform. The site highlights Yasil’s cutting-edge services with an elegant design, responsive layout, and smooth user experience, optimized for both desktop and mobile visitors.",
            technologies: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
        },
        {
            title: "Yasil Driver Enlistment Page",
            description: "A responsive web page built for Yasil to streamline driver onboarding and rider detail capture. Features intuitive form design, validation, and a user-friendly interface that ensures smooth data collection across devices.",
            technologies: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
        },
        {
            title: "AceLitigator Platform",
            description: "A legal services platform that provides Kenyans with access to customizable legal documents and online consultations. The site features a modern, responsive interface designed for ease of navigation, helping users quickly find and generate the legal resources they need.",
            technologies: ["Wordpress", "Php", "Nginx"]
        },
        {
            title: "Next Project",
            description: "Currently working on an exciting new project that will showcase advanced fullstack development skills. Stay tuned for updates!",
            technologies: ["React", "Node.js", "MongoDB"]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('work');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`projects ${isVisible ? 'visible' : ''}`} id="work">
            <h2 className="section-title">MY WORK</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;