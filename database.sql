-- ============================================
-- VICKY RESTAURANT - DATABASE SCHEMA
-- For DBeaver / MySQL Database
-- ============================================

-- Create Database
CREATE DATABASE IF NOT EXISTS vicky_restaurant;
USE vicky_restaurant;

-- ============================================
-- MENU TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category ENUM('starters', 'mains', 'breads', 'desserts', 'drinks') NOT NULL,
    tags VARCHAR(255),
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Menu Data
INSERT INTO menu (name, price, description, category, tags, image) VALUES
('Crispy Samosa', 6.00, 'Golden crispy pastry filled with spiced potatoes and peas. Served with mint chutney.', 'starters', 'Popular,Vegan', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300'),
('Mixed Veg Pakora', 8.00, 'Assorted vegetables dipped in spiced chickpea batter and deep fried to perfection.', 'starters', 'Crispy,Vegan', 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300'),
('Paneer Tikka', 12.00, 'Grilled cottage cheese marinated in tandoori spices with bell peppers and onions.', 'starters', 'Grilled,Popular', 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=300'),
('Paneer Butter Masala', 18.00, 'Creamy tomato gravy with soft paneer cubes, butter, and aromatic spices.', 'mains', 'Bestseller,Creamy', 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300'),
('Dal Makhani', 15.00, 'Slow-cooked black lentils in rich butter and cream gravy. A Punjab classic.', 'mains', 'Signature,Rich', 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300'),
('Chole Masala', 14.00, 'Spiced chickpeas cooked in tangy tomato sauce with traditional spices.', 'mains', 'Protein Rich,Vegan', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300'),
('Veg Biryani', 16.00, 'Fragrant basmati rice layered with vegetables, saffron, and aromatic spices.', 'mains', 'Festive,Popular', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300'),
('Malai Kofta', 17.00, 'Soft cottage cheese dumplings in creamy cashew gravy. Pure indulgence.', 'mains', 'Premium,Rich', 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300'),
('Butter Naan', 4.00, 'Soft leavened bread brushed with butter, baked in traditional tandoor.', 'breads', 'Tandoor,Classic', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300'),
('Garlic Naan', 5.00, 'Butter naan topped with fresh garlic and coriander. Irresistible aroma.', 'breads', 'Aromatic,Popular', 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300'),
('Rasmalai', 8.00, 'Soft cottage cheese patties soaked in sweet saffron milk. Royal treat.', 'desserts', 'Premium,Rich', 'https://images.unsplash.com/photo-1571006682582-78bcdd93e3b8?w=300'),
('Masala Chai', 4.00, 'Traditional spiced tea brewed with ginger, cardamom, and secret spices.', 'drinks', 'Hot,Popular', 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300'),
('Mango Lassi', 6.00, 'Creamy yogurt smoothie blended with fresh mango pulp. Refreshingly delicious.', 'drinks', 'Cold,Refreshing', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300');

-- ============================================
-- RESERVATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    guests INT NOT NULL,
    message TEXT,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Sample Reservations
INSERT INTO reservations (name, email, phone, date, time, guests, message, status) VALUES
('Priya Sharma', 'priya@example.com', '+1-555-0101', '2024-12-20', '19:00:00', 4, 'Birthday celebration', 'confirmed'),
('Raj Patel', 'raj@example.com', '+1-555-0102', '2024-12-21', '20:00:00', 2, NULL, 'pending'),
('Sarah Johnson', 'sarah@example.com', '+1-555-0103', '2024-12-22', '18:30:00', 6, 'Anniversary dinner', 'confirmed');

-- ============================================
-- CONTACTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status ENUM('unread', 'read') DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Sample Contacts
INSERT INTO contacts (name, email, subject, message, status) VALUES
('John Doe', 'john@example.com', 'Catering Inquiry', 'Hi, I would like to inquire about catering services for a corporate event of 50 people.', 'read'),
('Jane Smith', 'jane@example.com', 'Opening Hours', 'What are your opening hours on public holidays?', 'unread');

-- ============================================
-- TESTIMONIALS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    text TEXT NOT NULL,
    image VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Testimonials
INSERT INTO testimonials (name, role, text, image) VALUES
('Priya Sharma', 'Food Blogger', 'The best vegan Indian food I have ever had! The Paneer Butter Masala was absolutely divine. And being open 24/7 is a game-changer for late-night cravings.', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'),
('Raj Patel', 'Regular Customer', 'Finally a restaurant that understands authentic vegetarian cuisine! The Dal Makhani tastes exactly like my grandmother recipe. Absolutely love this place!', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'),
('Sarah Johnson', 'Local Resident', 'I am not even vegan but the food here converted me! Everything is so flavorful and fresh. The 24/7 service is perfect for our night shift workers.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150');

-- ============================================
-- GALLERY TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(255),
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Gallery Images
INSERT INTO gallery (image_url, alt_text, display_order) VALUES
('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800', 'Indian Food Platter', 1),
('https://images.unsplash.com/photo-1567337710282-00832b415979?w=500', 'Curry Dish', 2),
('https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500', 'Naan Bread', 3),
('https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500', 'Samosa', 4),
('https://images.unsplash.com/photo-1574484284002-952d92456975?w=500', 'Dal', 5),
('https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500', 'Spices', 6);

-- ============================================
-- SETTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(255) UNIQUE NOT NULL,
    setting_value TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Default Settings
INSERT INTO settings (setting_key, setting_value) VALUES
('restaurant_name', 'Vicky'),
('restaurant_tagline', 'Pure Vegetarian. Pure Flavor. Pure Love.'),
('address', '123 Main Street, Downtown, City, State 12345'),
('phone', '+1 (555) 123-4567'),
('email', 'hello@vickyrestaurant.com'),
('opening_hours', 'Monday - Sunday: 9:00 AM - 10:00 PM'),
('delivery_fee', '0'),
('minimum_order', '20'),
('whatsapp_number', '+15551234567');

-- ============================================
-- INDEXES FOR BETTER PERFORMANCE
-- ============================================
CREATE INDEX idx_menu_category ON menu(category);
CREATE INDEX idx_reservations_date ON reservations(date);
CREATE INDEX idx_reservations_status ON reservations(status);
CREATE INDEX idx_contacts_status ON contacts(status);

-- ============================================
-- END OF DATABASE SCHEMA
-- ============================================