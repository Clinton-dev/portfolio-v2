import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard.tsx";
import CymelleScreenshot from '../assets/cymelle.png';
import CentipidAccess from '../assets/centipid-access.png';
import CentipidTechnologies from '../assets/centipidtechnologies.png';
import Yasil from '../assets/yasil.png';
import Acelitigator from '../assets/acelitigator.png';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    const projects = [
        {
            title: "Cymelle Technologies",
            description: "A modern, responsive website built for Cymelle, a company offering Equipment-as-a-Service (EaaS) solutions. The site showcases Cymelle's services with a clean design, optimized performance, and intuitive user experience, ensuring accessibility across all devices.",
            technologies: [
                { name: "React.js", category: "frontend" },
                { name: "Tailwind CSS", category: "frontend" },
                { name: "Vite", category: "frontend" },
                { name: "JavaScript", category: "frontend" },
            ],
            url: "https://cymelle.com/",
            screenshot: CymelleScreenshot,
            type: "SaaS/EaaS",
        },
        {
            title: "Centipid Technologies",
            description: "A modern, responsive website built for Centipid, offering comprehensive network management solutions. Built with React and deployed on Nginx with full backend infrastructure. Includes server setup, database configuration, monitoring & alerts, and SEO optimization for optimal performance and user experience.",
            technologies: [
                { name: "React.js", category: "frontend" },
                { name: "Tailwind CSS", category: "frontend" },
                { name: "Vite", category: "frontend" },
                { name: "Laravel", category: "backend" },
                { name: "Nginx", category: "devops" },
                { name: "Database Setup", category: "devops" },
                { name: "Monitoring & Alerts", category: "devops" },
                { name: "SEO", category: "tools" },
            ],
            url: "https://centipidtechnologies.com/",
            screenshot: CentipidTechnologies,
            type: "Website",
        },
        {
            title: "Yasil Ride Hailing Platform",
            description: "A sleek and modern web application for Yasil, a Nairobi-based ride-hailing platform. Features elegant design with cutting-edge backend infrastructure including Nginx server setup, database configuration, and comprehensive monitoring with alerts for reliability and performance.",
            technologies: [
                { name: "React.js", category: "frontend" },
                { name: "Tailwind CSS", category: "frontend" },
                { name: "Vite", category: "frontend" },
                { name: "Nginx", category: "devops" },
                { name: "Database Setup", category: "devops" },
                { name: "Monitoring & Alerts", category: "devops" },
                { name: "Google Analytics", category: "tools" },
            ],
            url: "https://yasil.co.ke/",
            screenshot: Yasil,
            type: "Web App",
        },
        {
            title: "Centipid Access",
            description: "A secure web application providing access management and network solutions. Features advanced security with Cloudflare Turnstile verification, Laravel backend with contact form automation using Resend for email delivery, Nginx deployment with CI/CD automation, and comprehensive Zabbix monitoring with performance alerts.",
            technologies: [
                { name: "React.js", category: "frontend" },
                { name: "Tailwind CSS", category: "frontend" },
                { name: "Vite", category: "frontend" },
                { name: "Laravel", category: "backend" },
                { name: "Resend", category: "backend" },
                { name: "Cloudflare Turnstile", category: "tools" },
                { name: "Nginx", category: "devops" },
                { name: "GitHub Actions", category: "devops" },
                { name: "Zabbix Monitoring", category: "devops" },
                { name: "SEO", category: "tools" },
                { name: "Google Analytics", category: "tools" },
            ],
            url: "https://centipidaccess.com/",
            screenshot: CentipidAccess,
            type: "Web App",
        },
        {
            title: "Netduka E-commerce Platform",
            description: "A responsive e-commerce platform built for Netduka as an Equipment-as-a-Service solution. Includes full backend infrastructure with Nginx server setup, database configuration, and monitoring with alerts for seamless transaction processing and optimal performance.",
            technologies: [
                { name: "React.js", category: "frontend" },
                { name: "SASS", category: "frontend" },
                { name: "Vite", category: "frontend" },
                { name: "Nginx", category: "devops" },
                { name: "Database Setup", category: "devops" },
                { name: "Monitoring & Alerts", category: "devops" },
            ],
            screenshot: CymelleScreenshot,
            type: "E-commerce",
        },
        {
            title: "AceLitigator Platform",
            description: "A legal services platform that provides Kenyans with access to customizable legal documents and online consultations. The site features a modern, responsive interface designed for ease of navigation, helping users quickly find and generate the legal resources they need.",
            technologies: [
                { name: "WordPress", category: "backend" },
                { name: "PHP", category: "backend" },
                { name: "Nginx", category: "devops" },
            ],
            url: "https://acelitigator.co.ke",
            screenshot: Acelitigator,
            type: "Website",
        },
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