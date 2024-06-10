import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/appointment.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/appointments')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="appointments-container">
            <h1>Appointments</h1>
            <ul className="appointment-list">
                {appointments.map(appointment => (
                    <li key={appointment.id} className="appointment-item">
                        <span>{appointment.name}</span>
                        <span>{appointment.date} at {appointment.location}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Appointments;
