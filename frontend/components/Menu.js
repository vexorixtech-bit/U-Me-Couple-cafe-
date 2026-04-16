// ============================================
// VICKY RESTAURANT - MENU COMPONENT
// ============================================

const { useState, useEffect } = React;

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [menuItems, setMenuItems] = useState([]);
    
    const categories = ['all', 'starters', 'mains', 'breads', 'desserts', 'drinks'];
    
    useEffect(() => {
        // Fetch menu from database
        loadMenu();
        
        // Listen for menu updates
        window.addEventListener('menuUpdated', (e) => {
            setMenuItems(e.detail);
        });
    }, []);
    
    const loadMenu = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/menu');
            const result = await response.json();
            if (result.success) {
                setMenuItems(result.data);
            }
        } catch (error) {
            console.log('Using static menu data');
        }
    };
    
    const filteredMenu = activeCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section className="menu" id="menu">
            <div className="section-header">
                <p className="section-subtitle">Taste the Tradition</p>
                <h2 className="section-title">Our Menu</h2>
                <div className="section-line"></div>
            </div>
            
            <div className="menu-tabs">
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        className={`menu-tab ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat === 'all' ? 'All Items' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>
            
            <div className="menu-grid">
                {filteredMenu.length === 0 ? (
                    <p style={{textAlign: 'center', color: '#999', gridColumn: '1/-1'}}>
                        No menu items found. Add items in MySQL database.
                    </p>
                ) : (
                    filteredMenu.map(item => (
                        <div key={item.id} className="menu-card">
                            <div className="menu-card-image">
                                <img src={item.image || 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300'} alt={item.name} />
                            </div>
                            <div className="menu-card-content">
                                <div className="menu-card-header">
                                    <h3 className="menu-card-name">{item.name}</h3>
                                    <span className="menu-card-price">${item.price}</span>
                                </div>
                                <p className="menu-card-desc">{item.description}</p>
                                <div className="menu-card-tags">
                                    {item.tags && item.tags.split(',').map((tag, idx) => (
                                        <span key={idx} className="menu-tag">{tag.trim()}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};