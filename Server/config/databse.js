const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'appointment',
    password: '2102003',  // Ensure this is a string
    port: 5432,
});

module.exports = pool;
