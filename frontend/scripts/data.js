// ============================================
// VICKY RESTAURANT - DATA (Supabase Direct)
// ============================================

const SUPABASE_URL = 'https://nhonnpgddaeapesvvngt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ob25ucGdkZGFlYXBlc3Z2bmd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDI2MDMsImV4cCI6MjA5MTkxODYwM30.rhi2RDxm77OfEPw-CJj-Nna9lecEbZkifyZLc1EUdT4';

let menuData = [];

const testimonialsData = [
    { id: 1, text: 'The best vegan Indian food I have ever had! The Paneer Butter Masala was absolutely divine. And being open 24/7 is a game-changer for late-night cravings.', name: 'Priya Sharma', role: 'Food Blogger', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 2, text: 'Finally a restaurant that understands authentic vegetarian cuisine! The Dal Makhani tastes exactly like my grandmother recipe. Absolutely love this place!', name: 'Raj Patel', role: 'Regular Customer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 3, text: 'I am not even vegan but the food here converted me! Everything is so flavorful and fresh. The 24/7 service is perfect for our night shift workers.', name: 'Sarah Johnson', role: 'Local Resident', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
];

const galleryImages = [
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    'https://images.unsplash.com/photo-1567337710282-00832b415979?w=500',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500',
    'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500',
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500',
];

async function fetchMenuFromDB() {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/menu?select=*&order=category,id`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
        const data = await response.json();
        menuData = data;
        window.dispatchEvent(new CustomEvent('menuUpdated', { detail: menuData }));
    } catch (error) {
        console.error('Error fetching menu:', error);
        menuData = [];
    }
}

function getMenuData() {
    return menuData;
}

async function submitReservation(data) {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/reservations`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                date: data.date,
                time: data.time,
                guests: data.guests,
                message: data.message || '',
                status: 'pending'
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: 'Failed to submit reservation' };
    }
}

async function submitContact(data) {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/contacts`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject || '',
                message: data.message,
                status: 'unread'
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: 'Failed to submit message' };
    }
}

window.menuData = menuData;
window.testimonialsData = testimonialsData;
window.galleryImages = galleryImages;
window.fetchMenuFromDB = fetchMenuFromDB;
window.getMenuData = getMenuData;
window.submitReservation = submitReservation;
window.submitContact = submitContact;
