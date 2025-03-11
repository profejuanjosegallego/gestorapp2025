import React from 'react';
import { Shield, Users, Building2, Clock, Award, Heart } from 'lucide-react';

const About = () => {
    return (
        <>
            <div className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold">About GestorApp</h1>
                            <p className="lead">Transforming community space management through innovative solutions.</p>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team collaboration"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                                alt="Modern workspace"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="mb-4">Our Mission</h2>
                            <p className="lead text-muted">
                                At GestorApp, we're committed to simplifying common space management while fostering community engagement and collaboration.
                            </p>
                            <p className="text-muted">
                                Our platform streamlines the booking process, enhances facility management, and creates a seamless experience for both administrators and users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Core Values</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <Shield size={48} className="text-primary mb-3" />
                                    <h3 className="h5">Trust & Security</h3>
                                    <p className="text-muted">We prioritize the security of your data and maintain transparent operations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <Users size={48} className="text-primary mb-3" />
                                    <h3 className="h5">Community First</h3>
                                    <p className="text-muted">Building stronger communities through efficient space management.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <Heart size={48} className="text-primary mb-3" />
                                    <h3 className="h5">User Experience</h3>
                                    <p className="text-muted">Dedicated to providing an intuitive and enjoyable platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Why Choose GestorApp?</h2>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex align-items-start">
                                <Building2 size={24} className="text-primary me-3 flex-shrink-0" />
                                <div>
                                    <h3 className="h5 mb-2">Space Management</h3>
                                    <p className="text-muted">Efficient booking and management of common spaces.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex align-items-start">
                                <Clock size={24} className="text-primary me-3 flex-shrink-0" />
                                <div>
                                    <h3 className="h5 mb-2">Real-time Updates</h3>
                                    <p className="text-muted">Instant availability updates and notifications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex align-items-start">
                                <Award size={24} className="text-primary me-3 flex-shrink-0" />
                                <div>
                                    <h3 className="h5 mb-2">Quality Service</h3>
                                    <p className="text-muted">Dedicated support and maintenance services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex align-items-start">
                                <Users size={24} className="text-primary me-3 flex-shrink-0" />
                                <div>
                                    <h3 className="h5 mb-2">Community Focus</h3>
                                    <p className="text-muted">Building stronger communities together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary text-white py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Ready to Get Started?</h2>
                    <p className="lead mb-4">Join our growing community of satisfied users today.</p>
                    <button className="btn btn-light btn-lg">Start Booking Now</button>
                </div>
            </div>
        </>
    );
};

export default About;