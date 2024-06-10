const express = require('express');
const router = express.Router();
const pool = require('../config/databse');

// Route to get all registrations for a user
router.get('/my-registrations', async (req, res) => {
    // You'll need to implement user authentication to get the user ID, assuming user ID is 1 for now
    const userId = 1;
    try {
        const result = await pool.query(`
            SELECT appointments.*, registrations.registered_on
            FROM registrations
            JOIN appointments ON appointments.id = registrations.appointment_id
            WHERE registrations.user_id = $1
        `, [userId]);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error fetching registrations');
    }
});

module.exports = router;
