// ============================================
// VICKY RESTAURANT - RESERVATION MODEL
// ============================================

const { pool } = require('../config/database');

const ReservationModel = {
    // Get all reservations
    async getAll() {
        try {
            const [rows] = await pool.query(
                'SELECT * FROM reservations ORDER BY date DESC, time DESC'
            );
            return rows;
        } catch (error) {
            console.error('Error fetching reservations:', error);
            return [];
        }
    },

    // Get reservation by ID
    async getById(id) {
        try {
            const [rows] = await pool.query(
                'SELECT * FROM reservations WHERE id = ?',
                [id]
            );
            return rows[0];
        } catch (error) {
            console.error('Error fetching reservation:', error);
            return null;
        }
    },

    // Create reservation
    async create(reservation) {
        try {
            const [result] = await pool.query(
                `INSERT INTO reservations (name, email, phone, date, time, guests, message, status) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')`,
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
            return { id: result.insertId, ...reservation, status: 'pending' };
        } catch (error) {
            console.error('Error creating reservation:', error);
            return null;
        }
    },

    // Update reservation status
    async updateStatus(id, status) {
        try {
            const [result] = await pool.query(
                'UPDATE reservations SET status = ? WHERE id = ?',
                [status, id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error updating reservation status:', error);
            return false;
        }
    },

    // Delete reservation
    async delete(id) {
        try {
            const [result] = await pool.query(
                'DELETE FROM reservations WHERE id = ?',
                [id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error deleting reservation:', error);
            return false;
        }
    }
};

module.exports = ReservationModel;