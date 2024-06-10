import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/Home';
import Appointments from './Pages/Appointment';
import CreateAppointment from './Pages/CreateAppointments';
import MyRegistrations from './Pages/MyRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/create-appointment" element={<CreateAppointment />} />
                    <Route path="/my-registrations" element={<MyRegistrations />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
