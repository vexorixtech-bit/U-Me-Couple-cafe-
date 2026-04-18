// ============================================
// VICKY RESTAURANT - CONTACT COMPONENT
// ============================================

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        
        try {
            const response = await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                alert('✅ Thank you for your message! We will get back to you soon.');
                e.target.reset();
            } else {
                alert('❌ Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('✅ Thank you for your message! (Offline mode - we will contact you soon)');
            e.target.reset();
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="section-header">
                <p className="section-subtitle">Get in Touch</p>
                <h2 className="section-title">Contact Us</h2>
                <div className="section-line"></div>
            </div>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h3>Visit U&Me Couple Cafe</h3>
                    <p>Come experience the authentic taste of India. We're open 24 hours, 7 days a week to serve you the best Veg & Non-Veg Indian cuisine.</p>
                    
                    <div className="contact-card">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Our Location</h4>
                            <p>123 Main Street, Downtown<br />City, State 12345</p>
                        </div>
                    </div>
                    
                    <div className="contact-card">
                        <i className="fas fa-phone"></i>
                        <div>
                            <h4>Call Us</h4>
                            <p>+91 9655058949</p>
                        </div>
                    </div>
                    
                    <div className="contact-card">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>Email Us</h4>
                            <p>u&mecouplecafe@gmail .com</p>
                        </div>
                    </div>
                    
                    <div className="contact-card">
                        <i className="fas fa-clock"></i>
                        <div>
                            <h4>Opening Hours</h4>
                            <p>Monday - Sunday<br />9:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div className="contact-form">
                    <h3>Send us a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="subject" placeholder="Subject" />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn">
                            <i className="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};