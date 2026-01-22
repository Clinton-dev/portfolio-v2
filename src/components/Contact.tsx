import {useEffect, useState} from "react";
import {Github, Linkedin, Mail} from "lucide-react";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const rawSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    const siteKey = typeof rawSiteKey === 'string' ? rawSiteKey : '';

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {threshold: 0.1}
        );

        const section = document.getElementById('contact');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            // Reset form
            setFormData({username: '', email: '', message: ''});

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus(''), 3000);
        }, 2000);
    };

    return (
        <section className={`contact ${isVisible ? 'visible' : ''}`} id="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2 className="section-title">LET'S WORK TOGETHER</h2>
                        <p className="contact-description">
                            Have a project in mind? Whether it's a web application, cloud infrastructure,
                            or DevOps automation, I'd love to hear about it and help bring your ideas to life.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="contact-icon"/>
                                <div>
                                    <h4>Email</h4>
                                    <p>clintonwambugu@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Github className="contact-icon"/>
                                <div>
                                    <h4>GitHub</h4>
                                    <p>github.com/Clinton-dev</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Linkedin className="contact-icon"/>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p>linkedin.com/in/clintonwambugu</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input"
                                    placeholder=" "
                                />
                                <label className="form-label">Your Name</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input"
                                    placeholder=" "
                                />
                                <label className="form-label">Email Address</label>
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input form-textarea"
                                    placeholder=" "
                                    rows={5}
                                ></textarea>
                                <label className="form-label">Your Message</label>
                            </div>

                            {siteKey ? (
                                <div className="pt-2">
                                    <Turnstile
                                        ref={turnstileRef}
                                        siteKey={siteKey}
                                        onSuccess={(token) => setTurnstileToken(token)}
                                        onExpire={() => setTurnstileToken(null)}
                                        onError={() => setTurnstileToken(null)}
                                    />
                                </div>
                            ) : null}

                            <div>

                                <button
                                    type="submit"
                                    className="form-submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div className="loading-spinner"></div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="submit-success">
                                        ✨ Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;