import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Building } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">Welcome to GestorApp</h1>
              <p className="lead">Streamline your common site management with our comprehensive platform.</p>
              <Link to="/booking" className="btn btn-light btn-lg">
                Book Now
              </Link>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Modern building" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Calendar size={48} className="text-primary mb-3" />
                  <h3 className="h5">Easy Booking</h3>
                  <p className="text-muted">Simple and efficient booking system for all common areas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Users size={48} className="text-primary mb-3" />
                  <h3 className="h5">Community Management</h3>
                  <p className="text-muted">Efficient tools for managing community resources.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Building size={48} className="text-primary mb-3" />
                  <h3 className="h5">Facility Overview</h3>
                  <p className="text-muted">Complete visibility of all available facilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800&q=80" 
                alt="Community gathering" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2>About GestorApp</h2>
              <p className="lead">We're dedicated to making common site management simple and efficient.</p>
              <p>Our platform provides comprehensive tools for booking management, maintenance scheduling, and community organization.</p>
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;