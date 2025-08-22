// import {useState} from "react";

interface NavigationProps {
    scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo">CW</div>
                <ul className="nav-links">
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('work')}>Work</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;