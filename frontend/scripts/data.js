// ============================================
// VICKY RESTAURANT - DATA (From Database)
// ============================================

const API_BASE = 'http://localhost:5000/api';

// Menu Data
let menuData = [];

// Testimonials Data
const testimonialsData = [
    { id: 1, text: 'The best vegan Indian food I have ever had! The Paneer Butter Masala was absolutely divine. And being open 24/7 is a game-changer for late-night cravings.', name: 'Priya Sharma', role: 'Food Blogger', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 2, text: 'Finally a restaurant that understands authentic vegetarian cuisine! The Dal Makhani tastes exactly like my grandmother recipe. Absolutely love this place!', name: 'Raj Patel', role: 'Regular Customer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 3, text: 'I am not even vegan but the food here converted me! Everything is so flavorful and fresh. The 24/7 service is perfect for our night shift workers.', name: 'Sarah Johnson', role: 'Local Resident', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
];

// Gallery Images
const galleryImages = [
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    'https://images.unsplash.com/photo-1567337710282-00832b415979?w=500',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500',
    'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500',
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500',
];

// Fetch Menu from Database
async function fetchMenuFromDB() {
    try {
        const response = await fetch(`${API_BASE}/menu`);
        const result = await response.json();
        if (result.success) {
            menuData = result.data;
            // Trigger update if Menu component is loaded
            window.dispatchEvent(new CustomEvent('menuUpdated', { detail: menuData }));
        }
    } catch (error) {
        // Static fallback menu data - DISABLED (using database menu)
        menuData = [];
        // window.dispatchEvent(new CustomEvent('menuUpdated', { detail: menuData }));
    }
}

// Get Menu Data
function getMenuData() {
    return menuData;
}

// Submit Reservation to Database
async function submitReservation(data) {
    try {
        const response = await fetch(`${API_BASE}/reservations`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: 'Failed to submit reservation' };
    }
}

// Submit Contact to Database
async function submitContact(data) {
    try {
        const response = await fetch(`${API_BASE}/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: 'Failed to submit message' };
    }
}

// Export for use in components
window.menuData = menuData;
window.testimonialsData = testimonialsData;
window.galleryImages = galleryImages;
window.API_BASE = API_BASE;
window.fetchMenuFromDB = fetchMenuFromDB;
window.getMenuData = getMenuData;
window.submitReservation = submitReservation;
window.submitContact = submitContact;