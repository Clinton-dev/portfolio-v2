// import './App.css'

import {useEffect, useState} from "react";
import FloatingParticles from "./components/FloatingParticles.tsx";
import Navigation from "./components/Navigation.tsx";

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

    </div>
  )
}

export default App
