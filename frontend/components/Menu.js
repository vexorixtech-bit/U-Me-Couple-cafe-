// ============================================
// VICKY RESTAURANT - MENU COMPONENT
// ============================================

const { useState, useEffect } = React;

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [menuItems, setMenuItems] = useState([]);
    
    const categories = ['all', 'veg_starters', 'veg_mains', 'veg_breads', 'nonveg_starters', 'nonveg_mains'];
    
    useEffect(() => {
        loadMenu();
        window.addEventListener('menuUpdated', (e) => {
            setMenuItems(e.detail);
        });
    }, []);
    
    const loadMenu = () => {
        const staticData = [
            { id: 1, name: 'Paneer Tikka', price: 120, description: 'Marinated cottage cheese grilled to perfection', category: 'veg_starters', tags: 'Popular', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300' },
            { id: 2, name: 'Hara Bhara Kebab', price: 80, description: 'Spinach and pea patties with spices', category: 'veg_starters', tags: 'Healthy', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300' },
            { id: 3, name: 'Crispy Corn', price: 70, description: 'Golden fried corn with special seasoning', category: 'veg_starters', tags: 'Crunchy', image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=300' },
            { id: 4, name: 'Veg Manchurian', price: 90, description: 'Crispy vegetable balls in spicy sauce', category: 'veg_starters', tags: 'Spicy', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300' },
            { id: 5, name: 'Aloo Tikki', price: 60, description: 'Crispy potato patties with chutneys', category: 'veg_starters', tags: 'Classic', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300' },
            { id: 6, name: 'Paneer Butter Masala', price: 160, description: 'Rich tomato gravy with soft paneer cubes', category: 'veg_mains', tags: 'Bestseller', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300' },
            { id: 7, name: 'Shahi Paneer', price: 170, description: 'Royal paneer in creamy cashew gravy', category: 'veg_mains', tags: 'Premium', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300' },
            { id: 8, name: 'Dal Makhani', price: 130, description: 'Slow-cooked black lentils in butter cream', category: 'veg_mains', tags: 'Signature', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300' },
            { id: 9, name: 'Palak Paneer', price: 150, description: 'Fresh spinach curry with paneer cubes', category: 'veg_mains', tags: 'Healthy', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300' },
            { id: 10, name: 'Chole Masala', price: 120, description: 'Spiced chickpeas in tangy tomato gravy', category: 'veg_mains', tags: 'Popular', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300' },
            { id: 11, name: 'Butter Naan', price: 40, description: 'Soft leavened bread brushed with butter', category: 'veg_breads', tags: 'Classic', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300' },
            { id: 12, name: 'Garlic Naan', price: 50, description: 'Naan topped with garlic and butter', category: 'veg_breads', tags: 'Popular', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300' },
            { id: 13, name: 'Chicken Tikka', price: 140, description: 'Tender chicken marinated and grilled', category: 'nonveg_starters', tags: 'Popular', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300' },
            { id: 14, name: 'Tandoori Chicken', price: 200, description: 'Full chicken marinated in yogurt spices', category: 'nonveg_starters', tags: 'Bestseller', image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300' },
            { id: 15, name: 'Mutton Seekh Kebab', price: 160, description: 'Minced mutton kebabs with spices', category: 'nonveg_starters', tags: 'Premium', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300' },
            { id: 16, name: 'Chicken 65', price: 130, description: 'Spicy deep-fried chicken South Indian style', category: 'nonveg_starters', tags: 'Spicy', image: 'https://images.unsplash.com/photo-1610057099443-fde1c9e6f1c9?w=300' },
            { id: 17, name: 'Lamb Chops', price: 180, description: 'Grilled lamb chops with mint sauce', category: 'nonveg_starters', tags: 'Premium', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300' },
            { id: 18, name: 'Butter Chicken', price: 180, description: 'Creamy tomato chicken curry', category: 'nonveg_mains', tags: 'Bestseller', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300' },
            { id: 19, name: 'Chicken Biryani', price: 200, description: 'Aromatic rice with spiced chicken', category: 'nonveg_mains', tags: 'Signature', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300' },
            { id: 20, name: 'Mutton Curry', price: 190, description: 'Slow-cooked mutton in rich gravy', category: 'nonveg_mains', tags: 'Premium', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300' },
        ];
        setMenuItems(staticData);
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
                {categories.map(cat => {
                    const labels = {
                        'all': 'All Items',
                        'veg_starters': 'Veg Starters',
                        'veg_mains': 'Veg Mains',
                        'veg_breads': 'Veg Breads',
                        'nonveg_starters': 'Non-Veg Starters',
                        'nonveg_mains': 'Non-Veg Mains'
                    };
                    return (
                        <button 
                            key={cat} 
                            className={`menu-tab ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {labels[cat] || cat}
                        </button>
                    );
                })}
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
                                    {item.tags && <span className="menu-tag">{item.tags}</span>}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};