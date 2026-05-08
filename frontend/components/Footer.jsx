// ============================================
// VICKY RESTAURANT - FOOTER COMPONENT
// ============================================

const { useState, useEffect } = React;

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Map Section */}
            <div className="map-section">
                <div>
                    <i className="fas fa-map-marked-alt"></i>
                    <h3>Find Us Here</h3>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153167!3d-37.81627997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f5a2f1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1"
                    width="100%" 
                    height="300" 
                    style={{border: 0, borderRadius: '12px'}} 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Restaurant Location"
                ></iframe>
            </div>

            {/* Footer */}
            <footer>
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#home" className="logo">
                            <img src="frontend/images/u and me.jpeg" alt="Vicky Logo" className="logo-img" />
                            <span className="logo-text">
                                <span className="logo-name">U&Me</span>
                                <span className="logo-tagline">Couple Cafe</span>
                            </span>
                        </a>
                        <p>Your 24-hour destination for authentic Indian cuisine. Veg & Non-Veg. Pure flavor. Pure love.</p>
                        <div className="footer-contact">
                            <a href="mailto:ume@couplecafe.com" className="footer-email">
                                <i className="fas fa-envelope"></i>
                                u&me@couplecafe.com
                            </a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Our Menu</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#reservation">Reservations</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Our Menu</h4>
                        <ul>
                            <li><a href="#menu">Starters</a></li>
                            <li><a href="#menu">Main Course</a></li>
                            <li><a href="#menu">Breads & Naan</a></li>
                            <li><a href="#menu">Desserts</a></li>
                            <li><a href="#menu">Beverages</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 U & Me Couple Cafe. All Rights Reserved. | <a href="mailto:Vexorix.tech@gmail.com">Vexorix.tech@gmail.com</a></p>
                </div>
            </footer>

            {/* Scroll to Top */}
            <button className={`scroll-top ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop}>
                <i className="fas fa-chevron-up"></i>
            </button>

            {/* WhatsApp Float */}
            <a href="https://wa.me/15551234567" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    );
};
