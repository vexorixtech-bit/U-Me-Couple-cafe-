// ============================================
// VICKY RESTAURANT - ABOUT COMPONENT
// ============================================

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-grid">
                <div className="about-images">
                    <img src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=800" alt="Indian Food" />
                </div>
                <div className="about-content">
                    <p className="section-subtitle">Our Story</p>
                    <h2>A Legacy of <span className="highlight">Flavor & Faith</span></h2>
                    <p>Welcome to Vicky - your neighborhood 24-hour Veg&Non-Veg U&Me Couple Cafe. Founded with a passion for authentic Veg&Non-Veg cuisine, we bring the rich traditions of Indian cooking to your table, every hour of every day.</p>
                    <p>Every dish at U&Me Couple Cafe is prepared with fresh, locally-sourced ingredients and traditional spices imported directly from India. Our recipes have been passed down through generations, ensuring authentic taste in every bite.</p>
                    <p>Whether it's an early morning breakfast or a late-night craving, we're always here to serve you the best of U&Me Couple Cafe Veg&Non-Veg cuisine.</p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Menu Items</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Always Open</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};