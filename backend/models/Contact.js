// ============================================
// VICKY RESTAURANT - CONTACT MODEL
// ============================================

const { pool } = require('../config/database');

const ContactModel = {
    // Get all contacts
    async getAll() {
        try {
            const [rows] = await pool.query(
                'SELECT * FROM contacts ORDER BY created_at DESC'
            );
            return rows;
        } catch (error) {
            console.error('Error fetching contacts:', error);
            return [];
        }
    },

    // Get contact by ID
    async getById(id) {
        try {
            const [rows] = await pool.query(
                'SELECT * FROM contacts WHERE id = ?',
                [id]
            );
            return rows[0];
        } catch (error) {
            console.error('Error fetching contact:', error);
            return null;
        }
    },

    // Create contact (message)
    async create(contact) {
        try {
            const [result] = await pool.query(
                `INSERT INTO contacts (name, email, subject, message, status) 
                 VALUES (?, ?, ?, ?, 'unread')`,
                [
                    contact.name,
                    contact.email,
                    contact.subject || '',
                    contact.message
                ]
            );
            return { id: result.insertId, ...contact, status: 'unread' };
        } catch (error) {
            console.error('Error creating contact:', error);
            return null;
        }
    },

    // Mark contact as read
    async markAsRead(id) {
        try {
            const [result] = await pool.query(
                'UPDATE contacts SET status = ? WHERE id = ?',
                ['read', id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error marking contact as read:', error);
            return false;
        }
    },

    // Delete contact
    async delete(id) {
        try {
            const [result] = await pool.query(
                'DELETE FROM contacts WHERE id = ?',
                [id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error deleting contact:', error);
            return false;
        }
    }
};

module.exports = ContactModel;