import React from 'react';
import { Building2, Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h5 className="flex items-center text-xl font-semibold mb-4">
              <Building2 className="mr-2" size={24} />
              GestorApp
            </h5>
            <p className="text-gray-400">
              Simplifying common site management for communities and organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@gestorapp.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  contact@gestorapp.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} GestorApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;