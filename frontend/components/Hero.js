// ============================================
// VICKY RESTAURANT - HERO COMPONENT
// ============================================

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="hero-badge">
                    <i className="fas fa-leaf"></i>
                    <span>100% Veg & Non-Veg</span>
                    <i className="fas fa-clock"></i>
                    <span>24/7 Open</span>
                </div>
                <p className="hero-subtitle">Authentic Indian Cuisine</p>
                <h1 className="hero-title">U & Me</h1>
                <p className="hero-tagline">Veg & Non-Veg. Pure Flavor. Pure Love.</p>
                <p className="hero-desc">
                    Experience the authentic taste of India with our completely plant-based menu. 
                    Traditional recipes, modern presentation, available round the clock.
                </p>
                <div className="hero-buttons">
                    <a href="#menu" className="btn">
                        <i className="fas fa-utensils"></i>
                        Explore Menu
                    </a>
                    <a href="#reservation" className="btn btn-outline">
                        <i className="fas fa-calendar-alt"></i>
                        Book a Table
                    </a>
                </div>
            </div>
        </section>
    );
};
