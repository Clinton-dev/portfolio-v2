import {useEffect, useState} from "react";
import {Code, ExternalLink, Github} from "lucide-react";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const skills = {
        frontend: ["HTML","JavaScript", "CSS", "SASS", "Tailwind","Context API", "Redux", "React", "Next.js"],
        backend: ["Python", "Django", "Flask"],
        cloud: ["Nginx", "Docker", "Kubernetes", "Bash Scripting", "AWS", "Ansible", "Linux", "Automation"]
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('about');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`about ${isVisible ? 'visible' : ''}`} id="about">
            <div className="about-container">
                <h2 className="section-title">ABOUT ME</h2>

                <div className="about-content">
                    <div className="about-text">
                        <div className="about-intro">
                            <p>
                                I'm a versatile developer and cloud enthusiast with a unique background in
                                <strong> Industrial Biotechnology (BSc, JKUAT)</strong> and
                                <strong> Software Engineering (Moringa School)</strong>. My journey began in the sciences,
                                but my passion for building, problem-solving, and automation led me into technology.
                            </p>

                            <p>
                                Through the <strong>Ajira ReStart program</strong>, I deepened my expertise in
                                <strong> AWS Cloud</strong> and system administration, bridging software development
                                with DevOps and infrastructure.
                            </p>

                            <p>
                                I enjoy creating solutions that are not only functional but also scalable, reliable,
                                and user-friendly — from sleek <strong>frontend experiences</strong> to robust
                                <strong> backend systems</strong> and automated <strong>cloud deployments</strong>.
                            </p>

                            <p>
                                I thrive at the intersection of <strong>development and operations</strong>, where I can
                                design, build, and scale applications that make an impact.
                            </p>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3 className="skills-title">My Core Skills</h3>

                        <div className="skills-grid">
                            <div className="skill-category">
                                <div className="skill-category-header">
                                    <Code size={24} />
                                    <h4>Frontend</h4>
                                </div>
                                <div className="skill-tags">
                                    {skills.frontend.map((skill, index) => (
                                        <span key={index} className="skill-tag frontend-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-category">
                                <div className="skill-category-header">
                                    <Github size={24} />
                                    <h4>Backend</h4>
                                </div>
                                <div className="skill-tags">
                                    {skills.backend.map((skill, index) => (
                                        <span key={index} className="skill-tag backend-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-category">
                                <div className="skill-category-header">
                                    <ExternalLink size={24} />
                                    <h4>Cloud & DevOps</h4>
                                </div>
                                <div className="skill-tags">
                                    {skills.cloud.map((skill, index) => (
                                        <span key={index} className="skill-tag cloud-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;