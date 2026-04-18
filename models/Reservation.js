// ============================================
// VICKY RESTAURANT - RESERVATION MODEL (PostgreSQL)
// ============================================

const { pool } = require('../config/database');

const ReservationModel = {
    async getAll() {
        try {
            const result = await pool.query(
                'SELECT * FROM reservations ORDER BY date DESC, time DESC'
            );
            return result.rows;
        } catch (error) {
            console.error('Error fetching reservations:', error);
            return [];
        }
    },

    async getById(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM reservations WHERE id = $1',
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching reservation:', error);
            return null;
        }
    },

    async create(reservation) {
        try {
            const result = await pool.query(
                `INSERT INTO reservations (name, email, phone, date, time, guests, message, status) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending') RETURNING *`,
                [
                    reservation.name,
                    reservation.email,
                    reservation.phone,
                    reservation.date,
                    reservation.time,
                    reservation.guests,
                    reservation.message || ''
                ]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Error creating reservation:', error);
            return null;
        }
    },

    async updateStatus(id, status) {
        try {
            const result = await pool.query(
                'UPDATE reservations SET status = $1 WHERE id = $2',
                [status, id]
            );
            return result.rowCount > 0;
        } catch (error) {
            console.error('Error updating reservation status:', error);
            return false;
        }
    },

    async delete(id) {
        try {
            const result = await pool.query(
                'DELETE FROM reservations WHERE id = $1',
                [id]
            );
            return result.rowCount > 0;
        } catch (error) {
            console.error('Error deleting reservation:', error);
            return false;
        }
    }
};

module.exports = ReservationModel;
