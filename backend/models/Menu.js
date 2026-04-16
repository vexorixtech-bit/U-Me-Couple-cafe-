// ============================================
// VICKY RESTAURANT - MENU MODEL (PostgreSQL)
// ============================================

const { pool } = require('../config/database');

const MenuModel = {
    async getAll() {
        try {
            const result = await pool.query('SELECT * FROM menu ORDER BY category, id');
            return result.rows;
        } catch (error) {
            console.error('Error fetching menu:', error);
            return [];
        }
    },

    async getByCategory(category) {
        try {
            const result = await pool.query(
                'SELECT * FROM menu WHERE category = $1 ORDER BY id',
                [category]
            );
            return result.rows;
        } catch (error) {
            console.error('Error fetching menu by category:', error);
            return [];
        }
    },

    async getById(id) {
        try {
            const result = await pool.query('SELECT * FROM menu WHERE id = $1', [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching menu item:', error);
            return null;
        }
    },

    async create(item) {
        try {
            const result = await pool.query(
                'INSERT INTO menu (name, price, description, category, tags, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [item.name, item.price, item.description, item.category, item.tags, item.image]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Error creating menu item:', error);
            return null;
        }
    },

    async update(id, item) {
        try {
            const result = await pool.query(
                'UPDATE menu SET name = $1, price = $2, description = $3, category = $4, tags = $5, image = $6 WHERE id = $7',
                [item.name, item.price, item.description, item.category, item.tags, item.image, id]
            );
            return result.rowCount > 0;
        } catch (error) {
            console.error('Error updating menu item:', error);
            return false;
        }
    },

    async delete(id) {
        try {
            const result = await pool.query('DELETE FROM menu WHERE id = $1', [id]);
            return result.rowCount > 0;
        } catch (error) {
            console.error('Error deleting menu item:', error);
            return false;
        }
    }
};

module.exports = MenuModel;
