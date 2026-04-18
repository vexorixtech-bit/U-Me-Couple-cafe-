// ============================================
// VICKY RESTAURANT - CONTACT MODEL (PostgreSQL)
// ============================================

const { pool } = require('../config/database');

const ContactModel = {
    async getAll() {
        try {
            const result = await pool.query(
                'SELECT * FROM contacts ORDER BY created_at DESC'
            );
            return result.rows;
        } catch (error) {
            console.error('Error fetching contacts:', error);
            return [];
        }
    },

    async getById(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM contacts WHERE id = $1',
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching contact:', error);
            return null;
        }
    },

    async create(contact) {
        try {
            const result = await pool.query(
                `INSERT INTO contacts (name, email, subject, message, status) 
                 VALUES ($1, $2, $3, $4, 'unread') RETURNING *`,
                [
                    contact.name,
                    contact.email,
                    contact.subject || '',
                    contact.message
                ]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Error creating contact:', error);
            return null;
        }
    },

    async markAsRead(id) {
        try {
            const result = await pool.query(
                'UPDATE contacts SET status = $1 WHERE id = $2',
                ['read', id]
            );
            return result.rowCount > 0;
        } catch (error) {
            console.error('Error marking contact as read:', error);
            return false;
        }
    },

    async delete(id) {
        try {
            const result = await pool.query(
                'DELETE FROM contacts WHERE id = $1',
                [id]
            );
            return result.rowCount > 0;
        } catch (error) {
            console.error('Error deleting contact:', error);
            return false;
        }
    }
};

module.exports = ContactModel;
