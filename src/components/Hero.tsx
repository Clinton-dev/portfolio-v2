import CodeWindow from "./CodeWindow.tsx";
import { Github, Linkedin, Mail } from 'lucide-react';


const Hero: React.FC = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-greeting">👋 Hello there!</div>
                    <h1 className="hero-title">I'm Clinton<br />Wambugu</h1>
                    <div className="hero-subtitle">Fullstack Developer</div>
                    <p className="hero-description">
                        A Kenyan-based developer passionate about researching problems and solving them through innovative design while creating exceptional user experiences that make a difference.
                    </p>
                    <div className="hero-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollTo('work')}
                        >
                            View My Work
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollTo('contact')}
                        >
                            Let's Talk
                        </button>
                    </div>
                    <div className="social-links">
                        {/*<a href="#" className="social-link" aria-label="Twitter">*/}
                        {/*    <Twitter size={20} />*/}
                        {/*</a>*/}
                        <a href="https://www.linkedin.com/in/clintonwambugu/" className="social-link" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/Clinton-dev" className="social-link" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="#" className="social-link" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <CodeWindow />
                </div>
            </div>
        </section>
    );
};

export default Hero;