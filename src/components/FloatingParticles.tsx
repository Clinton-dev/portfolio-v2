import {useEffect, useState} from "react";

type Particle = {
    id: number;
    left: number;
    animationDuration: number;
};

const FloatingParticles = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newParticle = {
                id: Date.now() + Math.random(),
                left: Math.random() * 100,
                animationDuration: 4 + Math.random() * 2
            };

            setParticles(prev => [...prev, newParticle]);

            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, (newParticle.animationDuration + 1) * 1000);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="floating-particles">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: `${particle.left}%`,
                        animationDuration: `${particle.animationDuration}s`
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;