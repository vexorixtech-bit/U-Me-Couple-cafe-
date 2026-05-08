// ============================================
// VICKY RESTAURANT - SPECIALTIES COMPONENT
// ============================================

const Specialties = () => {
    const specialties = [
        {
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600',
            icon: 'fa-utensils',
            title: 'Traditional Recipes',
            desc: 'Authentic Indian recipes passed down through generations'
        },
{
            image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600',
            icon: 'fa-leaf',
            title: '100% Plant-Based',
            desc: 'Pure vegetarian, no animal products ever'
        }
    ];

    return (
        <section className="specialties" id="specialties">
            <div className="section-header">
                <p className="section-subtitle">What We Offer</p>
                <h2 className="section-title">Our Specialties</h2>
                <div className="section-line"></div>
            </div>
            <div className="specialty-cards">
                {specialties.map((item, index) => (
                    <div key={index} className="specialty-card">
                        <img src={item.image} alt={item.title} />
                        <div className="specialty-card-icon">
                            <i className={`fas ${item.icon}`}></i>
                        </div>
                        <div className="specialty-card-content">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};