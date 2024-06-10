import React, { useState } from 'react';
import axios from 'axios';
import './styles/create.css';

const CreateAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/appointments', formData)
            .then(response => {
                alert('Appointment created!');
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="create-appointment-container">
            <h1>Create Appointment</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <label>Location:</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateAppointment;
