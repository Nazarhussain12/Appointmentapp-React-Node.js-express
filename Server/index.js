const express = require('express');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointmentRoutes');
const registrationRoutes = require('./routes/registrationRoutes'); // import the registration routes
const app = express();

app.use(cors());
app.use(express.json());

// Use the appointment routes
app.use('/api', appointmentRoutes);

// Use the registration routes
app.use('/api', registrationRoutes); // Note: both are prefixed with '/api'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
