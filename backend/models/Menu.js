// ============================================
// VICKY RESTAURANT - MENU MODEL
// ============================================

const { pool } = require('../config/database');

const MenuModel = {
    // Get all menu items
    async getAll() {
        try {
            const [rows] = await pool.query('SELECT * FROM menu ORDER BY category, id');
            return rows;
        } catch (error) {
            console.error('Error fetching menu:', error);
            return [];
        }
    },

    // Get menu by category
    async getByCategory(category) {
        try {
            const [rows] = await pool.query(
                'SELECT * FROM menu WHERE category = ? ORDER BY id',
                [category]
            );
            return rows;
        } catch (error) {
            console.error('Error fetching menu by category:', error);
            return [];
        }
    },

    // Get single menu item
    async getById(id) {
        try {
            const [rows] = await pool.query('SELECT * FROM menu WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            console.error('Error fetching menu item:', error);
            return null;
        }
    },

    // Create menu item
    async create(item) {
        try {
            const [result] = await pool.query(
                'INSERT INTO menu (name, price, description, category, tags, image) VALUES (?, ?, ?, ?, ?, ?)',
                [item.name, item.price, item.description, item.category, item.tags, item.image]
            );
            return { id: result.insertId, ...item };
        } catch (error) {
            console.error('Error creating menu item:', error);
            return null;
        }
    },

    // Update menu item
    async update(id, item) {
        try {
            const [result] = await pool.query(
                'UPDATE menu SET name = ?, price = ?, description = ?, category = ?, tags = ?, image = ? WHERE id = ?',
                [item.name, item.price, item.description, item.category, item.tags, item.image, id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error updating menu item:', error);
            return false;
        }
    },

    // Delete menu item
    async delete(id) {
        try {
            const [result] = await pool.query('DELETE FROM menu WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error deleting menu item:', error);
            return false;
        }
    }
};

module.exports = MenuModel;