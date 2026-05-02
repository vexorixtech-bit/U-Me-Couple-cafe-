// ============================================
// VICKY RESTAURANT - GALLERY COMPONENT
// ============================================

const Gallery = () => {
    return (
        <section className="gallery" id="gallery">
            <div className="section-header">
                <p className="section-subtitle">Visual Delight</p>
                <h2 className="section-title">Gallery</h2>
                <div className="section-line"></div>
            </div>
            <div className="gallery-grid">
                {window.galleryImages.filter(img => img).map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery ${index + 1}`} onError={(e) => {e.target.style.display='none'}} />
                    </div>
                ))}
            </div>
        </section>
    );
};