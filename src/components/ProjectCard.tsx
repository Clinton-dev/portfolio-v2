import { ExternalLink } from "lucide-react";
import { useState } from "react";

export type ProjectType = "Website" | "E-commerce" | "Web App" | "SaaS/EaaS";
export type TechCategory = "frontend" | "backend" | "devops" | "tools";

export interface Technology {
    name: string;
    category: TechCategory;
}

export interface Project {
    title: string;
    description: string;
    technologies: Technology[];
    url?: string;
    screenshot: string;
    type: ProjectType;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

// Badge color mapping based on project type
const typeColorMap: Record<ProjectType, string> = {
    "Website": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "E-commerce": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    "Web App": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "SaaS/EaaS": "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

// Tech category colors
const techCategoryColor: Record<TechCategory, string> = {
    "frontend": "bg-blue-500/15 text-blue-300 border-blue-500/30",
    "backend": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    "devops": "bg-red-500/15 text-red-300 border-red-500/30",
    "tools": "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

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
            onClick={handleClick}
            style={{
                animationDelay: `${index * 0.2}s`
            }}
        >
            {/* Image Section */}
            <div className="project-image">
                <img
                    src={project.screenshot}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                        isHovered ? 'scale-110' : 'scale-100'
                    } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                />

                {/* Fallback gradient if image fails to load */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] to-[#764ba2]" />
                )}

                {/* Type Badge - Positioned on image */}
                <div className="absolute top-4 right-4 z-10">
                    <span className={`project-type-badge ${typeColorMap[project.type]} px-4 py-2 rounded-full text-sm font-semibold border inline-block`}>
                        {project.type}
                    </span>
                </div>

                {/* Overlay on hover */}
                {isHovered && (
                    <div className="project-overlay">
                        <ExternalLink size={28} className="text-white" />
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technology Tags with Categories */}
                <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className={`tech-tag ${techCategoryColor[tech.category]} border`}
                            title={tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
