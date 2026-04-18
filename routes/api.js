// ============================================
// VICKY RESTAURANT - API ROUTES
// ============================================

const express = require('express');
const router = express.Router();
const MenuModel = require('../models/Menu');
const ReservationModel = require('../models/Reservation');
const ContactModel = require('../models/Contact');

// ============================================
// MENU ROUTES
// ============================================

// Get all menu items
router.get('/menu', async (req, res) => {
    try {
        const { category } = req.query;
        let menu;
        
        if (category) {
            menu = await MenuModel.getByCategory(category);
        } else {
            menu = await MenuModel.getAll();
        }
        
        res.json({ success: true, data: menu });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get single menu item
router.get('/menu/:id', async (req, res) => {
    try {
        const menu = await MenuModel.getById(req.params.id);
        
        if (!menu) {
            return res.status(404).json({ success: false, error: 'Menu item not found' });
        }
        
        res.json({ success: true, data: menu });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create menu item
router.post('/menu', async (req, res) => {
    try {
        const menu = await MenuModel.create(req.body);
        
        if (!menu) {
            return res.status(400).json({ success: false, error: 'Failed to create menu item' });
        }
        
        res.status(201).json({ success: true, data: menu });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Update menu item
router.put('/menu/:id', async (req, res) => {
    try {
        const success = await MenuModel.update(req.params.id, req.body);
        
        if (!success) {
            return res.status(404).json({ success: false, error: 'Menu item not found' });
        }
        
        res.json({ success: true, message: 'Menu item updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete menu item
router.delete('/menu/:id', async (req, res) => {
    try {
        const success = await MenuModel.delete(req.params.id);
        
        if (!success) {
            return res.status(404).json({ success: false, error: 'Menu item not found' });
        }
        
        res.json({ success: true, message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ============================================
// RESERVATION ROUTES
// ============================================

// Get all reservations
router.get('/reservations', async (req, res) => {
    try {
        const reservations = await ReservationModel.getAll();
        res.json({ success: true, data: reservations });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get single reservation
router.get('/reservations/:id', async (req, res) => {
    try {
        const reservation = await ReservationModel.getById(req.params.id);
        
        if (!reservation) {
            return res.status(404).json({ success: false, error: 'Reservation not found' });
        }
        
        res.json({ success: true, data: reservation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create reservation
router.post('/reservations', async (req, res) => {
    try {
        const reservation = await ReservationModel.create(req.body);
        
        if (!reservation) {
            return res.status(400).json({ success: false, error: 'Failed to create reservation' });
        }
        
        res.status(201).json({ success: true, data: reservation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Update reservation status
router.patch('/reservations/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const success = await ReservationModel.updateStatus(req.params.id, status);
        
        if (!success) {
            return res.status(404).json({ success: false, error: 'Reservation not found' });
        }
        
        res.json({ success: true, message: 'Reservation status updated' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete reservation
router.delete('/reservations/:id', async (req, res) => {
    try {
        const success = await ReservationModel.delete(req.params.id);
        
        if (!success) {
            return res.status(404).json({ success: false, error: 'Reservation not found' });
        }
        
        res.json({ success: true, message: 'Reservation deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ============================================
// CONTACT ROUTES
// ============================================

// Get all contacts
router.get('/contacts', async (req, res) => {
    try {
        const contacts = await ContactModel.getAll();
        res.json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get single contact
router.get('/contacts/:id', async (req, res) => {
    try {
        const contact = await ContactModel.getById(req.params.id);
        
        if (!contact) {
            return res.status(404).json({ success: false, error: 'Contact not found' });
        }
        
        res.json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create contact (send message)
router.post('/contacts', async (req, res) => {
    try {
        const contact = await ContactModel.create(req.body);
        
        if (!contact) {
            return res.status(400).json({ success: false, error: 'Failed to create contact' });
        }
        
        res.status(201).json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Mark contact as read
router.patch('/contacts/:id/read', async (req, res) => {
    try {
        const success = await ContactModel.markAsRead(req.params.id);
        
        if (!success) {
            return res.status(404).json({ success: false, error: 'Contact not found' });
        }
        
        res.json({ success: true, message: 'Contact marked as read' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete contact
router.delete('/contacts/:id', async (req, res) => {
    try {
        const success = await ContactModel.delete(req.params.id);
        
        if (!success) {
            return res.status(404).json({ success: false, error: 'Contact not found' });
        }
        
        res.json({ success: true, message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;