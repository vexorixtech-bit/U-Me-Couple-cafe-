// ============================================
// VICKY RESTAURANT - TESTIMONIALS COMPONENT
// ============================================

const { useState, useEffect } = React;

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % window.testimonialsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials animate-on-scroll">
            <div className="section-header">
                <p className="section-subtitle">What People Say</p>
                <h2 className="section-title">Customer Reviews</h2>
                <div className="section-line"></div>
            </div>
            <div className="testimonial-container">
                {window.testimonialsData.map((testimonial, index) => (
                    <div key={testimonial.id} className={`testimonial-card ${currentSlide === index ? 'active' : ''}`}>
                        <div className="testimonial-quote">"</div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="testimonial-author">
                            <img src={testimonial.image} alt={testimonial.name} />
                            <div className="author-info">
                                <h4>{testimonial.name}</h4>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="testimonial-dots">
                {window.testimonialsData.map((_, index) => (
                    <span 
                        key={index} 
                        className={currentSlide === index ? 'active' : ''}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};