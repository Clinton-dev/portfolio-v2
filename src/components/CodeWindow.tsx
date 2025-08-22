import {useEffect, useState} from "react";

const CodeWindow = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const codeLines = [
        { text: 'const developer = {', delay: 0 },
        { text: '  name: "Clinton Wambugu",', delay: 400 },
        { text: '  location: "Nairobi, Kenya",', delay: 800 },
        { text: '  skills: ["React", "Node.js", "Python"],', delay: 1200 },
        { text: '  passion: "Problem Solving",', delay: 1600 },
        { text: '  buildAmazingThings: () => {', delay: 2000 },
        { text: '    return "Always! 🚀";', delay: 2400 },
        { text: '  }', delay: 2800 },
        { text: '};', delay: 3200 },
        { text: '// Ready to collaborate!', delay: 3600 }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentLine < codeLines.length - 1) {
                setCurrentLine(prev => prev + 1);
            } else {
                // Reset animation after completion
                setTimeout(() => {
                    setCurrentLine(0);
                }, 2000);
            }
        }, codeLines[currentLine]?.delay || 400);

        return () => clearTimeout(timer);
    }, [currentLine, codeLines]);

    const formatCodeLine = (text) => {
        return text
            .replace(/(const|return)/g, '<span class="keyword">$1</span>')
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
            .replace(/(developer|buildAmazingThings)/g, '<span class="function">$1</span>')
            .replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
    };

    return (
        <div className="code-window">
            <div className="code-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="code-content">
                {codeLines.slice(0, currentLine + 1).map((line, index) => (
                    <div
                        key={index}
                        className={`code-line ${index === currentLine ? 'typing' : ''}`}
                        dangerouslySetInnerHTML={{ __html: formatCodeLine(line.text) }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CodeWindow;