const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="footer">
        <div className="footer-content">
            <div className="footer-left">
                <div className="footer-logo">Clinton Wambugu</div>
                <p className="footer-tagline">Fullstack Developer & Cloud Enthusiast</p>
            </div>

            <div className="footer-right">
                <p>&copy; {currentYear} Clinton Wambugu. All rights reserved.</p>
                <p>Built with React & passion in Nairobi, Kenya 🇰🇪</p>
            </div>
        </div>
    </div>
    )
}
export default Footer;