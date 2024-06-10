import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/registration.css';

const MyRegistrations = () => {
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/my-registrations')
            .then(response => {
                setRegistrations(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="registrations-container">
            <h1>My Registrations</h1>
            <ul className="registration-list">
                {registrations.map(reg => (
                    <li key={reg.id} className="registration-item">
                        <span>{reg.name} - {reg.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyRegistrations;
