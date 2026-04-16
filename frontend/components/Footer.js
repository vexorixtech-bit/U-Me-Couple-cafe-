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

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <>
            {/* Map Section */}
            <div className="map-section">
                <div>
                    <i className="fas fa-map-marked-alt"></i>
                    <h3>Find Us Here</h3>
                    <p>123 Main Street, Downtown, City</p>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#home" className="logo">
                            <img src="frontend/images/vexorix.png" alt="Vicky Logo" className="logo-img" />
                            <span className="logo-text">
                                <span className="logo-name">VICKY</span>
                                <span className="logo-tagline">RESTAURANT</span>
                            </span>
                        </a>
                        <p>Your 24-hour destination for authentic Indian cuisine. Pure vegetarian. Pure flavor. Pure love.</p>
                        <div className="footer-contact">
                            <a href="mailto:vicky@restaurant.com" className="footer-email">
                                <i className="fas fa-envelope"></i>
                                vicky@restaurant.com
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
                    <div className="footer-col">
                        <h4>Opening Hours</h4>
                        <ul className="footer-hours">
                            {days.map(day => (
                                <li key={day}><span>{day}</span><span>9AM - 10PM</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 U & Me Restaurant. All Rights Reserved. | <a href="mailto:cvvignesh1620@gmail.com">cvvignesh1620@gmail.com</a></p>
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
