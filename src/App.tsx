// import './App.css'

import {useEffect, useState} from "react";
import FloatingParticles from "./components/FloatingParticles.tsx";
import Navigation from "./components/Navigation.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div>
        <div className='bg-animation'></div>
        <FloatingParticles />
        <Navigation scrolled={scrolled} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
