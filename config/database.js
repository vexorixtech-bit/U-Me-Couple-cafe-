// ============================================
// VICKY RESTAURANT - DATABASE CONFIG (PostgreSQL)
// ============================================

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Test connection
const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('✅ Database connected successfully!');
        client.release();
        return true;
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        return false;
    }
};

module.exports = { pool, testConnection };
