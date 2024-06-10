const express = require('express');
const router = express.Router();
const pool = require('../config/databse');

// Get all appointments
router.get('/appointments', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM appointments');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Create a new appointment
// Instead of '/api/appointments', it should be '/appointments'
router.post('/appointments', async (req, res) => {
    console.log('Received data:', req.body);
    try {
        const { name, date, location, description } = req.body;
        const newAppointment = await pool.query(
            'INSERT INTO appointments (name, date, location, description) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, date, location, description]
        );
        console.log('Inserted data:', newAppointment.rows[0]);
        res.json(newAppointment.rows[0]);
    } catch (err) {
        console.error('Error at POST /appointments:', err);
        res.status(500).send('Server error');
    }
});


module.exports = router;
