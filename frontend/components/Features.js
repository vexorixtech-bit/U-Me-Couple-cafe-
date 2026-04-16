// ============================================
// VICKY RESTAURANT - FEATURES COMPONENT
// ============================================

const Features = () => {
    return (
        <div className="features-bar">
            <div className="feature-item">
                <i className="fas fa-clock"></i>
                <h4>24 Hours Open</h4>
                <p>Available round the clock</p>
            </div>
            <div className="feature-item">
                <i className="fas fa-leaf"></i>
                <h4>100% Vegan</h4>
                <p>Pure vegetarian delights</p>
            </div>
            <div className="feature-item">
                <i className="fas fa-motorcycle"></i>
                <h4>Free Delivery</h4>
                <p>On orders above $20</p>
            </div>
            <div className="feature-item">
                <i className="fas fa-star"></i>
                <h4>4.9 Rating</h4>
                <p>Loved by 5000+ customers</p>
            </div>
        </div>
    );
};