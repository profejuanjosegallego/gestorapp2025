import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3 d-flex align-items-center">
              <Building2 className="me-2" size={24} />
              GestorApp
            </h5>
            <p className="text-muted">
              Simplifying common site management for communities and organizations.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-decoration-none text-light">Home</Link></li>
              <li className="mb-2"><Link to="/booking" className="text-decoration-none text-light">Book Now</Link></li>
              <li className="mb-2"><Link to="/about" className="text-decoration-none text-light">About Us</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <Mail size={18} className="me-2" />
                <a href="mailto:contact@gestorapp.com" className="text-decoration-none text-light">
                  contact@gestorapp.com
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Phone size={18} className="me-2" />
                <a href="tel:+1234567890" className="text-decoration-none text-light">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 bg-light" />

        <div className="row">
          <div className="col text-center">
            <p className="mb-0">© {new Date().getFullYear()} GestorApp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;