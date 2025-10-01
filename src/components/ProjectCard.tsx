import {ExternalLink} from "lucide-react";
import {useState} from "react";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (project.url) {
            window.open(project.url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div
            className="project-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => { handleClick()}}
            style={{
                animationDelay: `${index * 0.2}s`
            }}
        >
            <div className="project-image">
                {project.title}
                {isHovered && (
                    <div className="project-overlay">
                        <ExternalLink size={24} />
                    </div>
                )}
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;