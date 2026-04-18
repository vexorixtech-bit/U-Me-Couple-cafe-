// ============================================
// VICKY RESTAURANT - MENU MODEL (MySQL)
// ============================================

const { pool } = require('../config/database');

const MenuModel = {
    async getAll() {
        try {
            const [rows] = await pool.query('SELECT * FROM menu ORDER BY category, id');
            return rows;
        } catch (error) {
            console.error('Error fetching menu:', error);
            return [];
        }
    },

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

    async getById(id) {
        try {
            const [rows] = await pool.query('SELECT * FROM menu WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            console.error('Error fetching menu item:', error);
            return null;
        }
    },

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
