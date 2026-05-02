// ============================================
// VICKY RESTAURANT - DATA (Static - No Database)
// ============================================

let menuData = [];

const testimonialsData = [
    { id: 1, text: 'Best Indian food ever! Paneer Butter Masala amazing. 24/7 open-ga midnight cravings satisfy pannum!', name: 'Priya Sharma', role: 'Food Blogger', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 2, text: 'Authentic veg cuisine! Dal Makhana my grandma recipe mothaali. Super love!', name: 'Raj Patel', role: 'Regular Customer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 3, text: 'Non-veg-aan converting! Ennayum fresh and flavorful. Night shift workers-ga perfect!', name: 'Saravana', role: 'Local Resident', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
    { id: 4, text: 'Tandoori Chicken motham! 24/7 open-ga late night-ga foodOrder pannalam. Super!', name: 'Kumar R', role: 'Software Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 5, text: 'Best biryani in town! Ambience-ga paathuka. Definitely revisit pannalam!', name: 'Anbu Selvan', role: 'Business', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
];

const galleryImages = [
    'https://images.pexels.com/photos/31783383/pexels-photo-31783383.jpeg?w=800',
    'https://images.pexels.com/photos/31771054/pexels-photo-31771054.jpeg?w=800',
    'https://images.pexels.com/photos/5775684/pexels-photo-5775684.jpeg?w=800',
    'https://images.pexels.com/photos/32825910/pexels-photo-32825910.jpeg?w=800',
    'https://images.pexels.com/photos/32825916/pexels-photo-32825916.jpeg?w=800',
    'https://images.pexels.com/photos/35539329/pexels-photo-35539329.jpeg?w=800',
    'https://images.pexels.com/photos/7868115/pexels-photo-7868115.jpeg?w=800',
    'https://images.pexels.com/photos/23547666/pexels-photo-23547666.jpeg?w=800',
];

const menuItems = [
    { id: 1, name: 'Paneer Tikka', price: 120, description: 'Marinated cottage cheese grilled to perfection', category: 'veg_starters', tags: ['Popular'], image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300' },
    { id: 2, name: 'Hara Bhara Kebab', price: 80, description: 'Spinach and pea patties with spices', category: 'veg_starters', tags: ['Healthy'], image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300' },
    { id: 3, name: 'Crispy Corn', price: 70, description: 'Golden fried corn with special seasoning', category: 'veg_starters', tags: ['Crunchy'], image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=300' },
    { id: 4, name: 'Veg Manchurian', price: 90, description: 'Crispy vegetable balls in spicy sauce', category: 'veg_starters', tags: ['Spicy'], image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300' },
    { id: 5, name: 'Aloo Tikki', price: 60, description: 'Crispy potato patties with chutneys', category: 'veg_starters', tags: ['Classic'], image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300' },
    { id: 6, name: 'Paneer Butter Masala', price: 160, description: 'Rich tomato gravy with soft paneer cubes', category: 'veg_mains', tags: ['Bestseller'], image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300' },
    { id: 7, name: 'Shahi Paneer', price: 170, description: 'Royal paneer in creamy cashew gravy', category: 'veg_mains', tags: ['Premium'], image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300' },
    { id: 8, name: 'Dal Makhani', price: 130, description: 'Slow-cooked black lentils in butter cream', category: 'veg_mains', tags: ['Signature'], image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300' },
    { id: 9, name: 'Palak Paneer', price: 150, description: 'Fresh spinach curry with paneer cubes', category: 'veg_mains', tags: ['Healthy'], image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300' },
    { id: 10, name: 'Chole Masala', price: 120, description: 'Spiced chickpeas in tangy tomato gravy', category: 'veg_mains', tags: ['Popular'], image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300' },
    { id: 11, name: 'Butter Naan', price: 40, description: 'Soft leavened bread brushed with butter', category: 'veg_breads', tags: ['Classic'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300' },
    { id: 12, name: 'Garlic Naan', price: 50, description: 'Naan topped with garlic and butter', category: 'veg_breads', tags: ['Popular'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300' },
    { id: 13, name: 'Chicken Tikka', price: 140, description: 'Tender chicken marinated and grilled', category: 'nonveg_starters', tags: ['Popular'], image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300' },
    { id: 14, name: 'Tandoori Chicken', price: 200, description: 'Full chicken marinated in yogurt spices', category: 'nonveg_starters', tags: ['Bestseller'], image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300' },
    { id: 15, name: 'Mutton Seekh Kebab', price: 160, description: 'Minced mutton kebabs with spices', category: 'nonveg_starters', tags: ['Premium'], image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300' },
    { id: 16, name: 'Chicken 65', price: 130, description: 'Spicy deep-fried chicken South Indian style', category: 'nonveg_starters', tags: ['Spicy'], image: 'https://images.unsplash.com/photo-1610057099443-fde1c9e6f1c9?w=300' },
    { id: 17, name: 'Grilled Prawns', price: 180, description: 'Juicy prawns grilled with spices', category: 'nonveg_starters', tags: ['Premium'], image: 'https://images.unsplash.com/photo-1599084993091-1ee5c0768d89?w=300' },
    { id: 18, name: 'Butter Chicken', price: 180, description: 'Creamy tomato chicken curry', category: 'nonveg_mains', tags: ['Bestseller'], image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300' },
    { id: 19, name: 'Chicken Biryani', price: 200, description: 'Aromatic rice with spiced chicken', category: 'nonveg_mains', tags: ['Signature'], image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300' },
    { id: 20, name: 'Fish Curry', price: 190, description: 'Fresh fish in coconut curry', category: 'nonveg_mains', tags: ['Special'], image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=300' },
];

function fetchMenuFromDB() {
    menuData = menuItems;
    window.dispatchEvent(new CustomEvent('menuUpdated', { detail: menuData }));
}

function getMenuData() {
    return menuData;
}

async function submitReservation(data) {
    alert('Reservation submitted!\n\nName: ' + data.name + '\nDate: ' + data.date + '\nGuests: ' + data.guests);
    return { success: true };
}

async function submitContact(data) {
    alert('Message sent!\n\nThank you ' + data.name + '!');
    return { success: true };
}

window.menuData = menuData;
window.testimonialsData = testimonialsData;
window.galleryImages = galleryImages;
window.fetchMenuFromDB = fetchMenuFromDB;
window.getMenuData = getMenuData;
window.submitReservation = submitReservation;
window.submitContact = submitContact;
