import React from 'react';
import Slider from 'react-slick';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <Slider {...settings}>
            <div>
                    <img src={require("../assets/d2.jpg")} alt="Decorative slide two" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={require("../assets/d1.avif")} alt="Decorative slide one" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                </div>
                
                <div>
                    <img src={require("../assets/d3.webp")} alt="Decorative slide three" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                </div>
            </Slider>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={require("../assets/d4.jpg")} alt="Project Detail" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h1>About Our Appointment Management System</h1>
                        <p>
                            The Appointment Management System is designed to streamline the process of scheduling and managing appointments across multiple departments. Our system provides a user-friendly interface for both administrators and clients, ensuring efficient handling of appointments with real-time updates and notifications.
                        </p>
                        <p>
                            Key features include automated scheduling, integration with existing calendars, and customizable booking options that cater to various business requirements.
                        </p>
                    </div>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Project Overview
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                            <div className="accordion-body">
                                <strong>Detailed explanation of the project.</strong> This section can include specifics of how the system works and the technologies used, such as React for the frontend, Node.js for the backend, and integration with databases for persistent storage.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Features
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                            <div className="accordion-body">
                                <strong>Comprehensive features list.</strong> Detail the various features the system offers, like appointment booking, notifications, and more.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
