// ============================================
// VICKY RESTAURANT - NAVBAR COMPONENT
// ============================================

const { useState, useEffect } = React;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <a href="#home" className="logo">
                <img src="frontend/images/vexorix.png" alt="Vicky Logo" className="logo-img" />
                
                <span className="logo-text">
                    <span className="logo-name">U & Me</span>
                    <span className="logo-tagline">RESTAURANT</span>
                </span>
            </a>
            <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                <li><a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
                <li><a href="#specialties" onClick={() => setMobileMenuOpen(false)}>Specials</a></li>
                <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
                <li><a href="#reservation" onClick={() => setMobileMenuOpen(false)}>Book Table</a></li>
                <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
            <a href="#reservation" className="nav-cta">Book Now</a>
            <button className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
        </nav>
    );
};
