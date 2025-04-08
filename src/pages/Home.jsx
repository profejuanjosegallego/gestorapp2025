import React from 'react';
import { Calendar, Users, Building, ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to GestorApp</h1>
              <p className="text-xl mb-8 text-blue-100">Streamline your common site management with our comprehensive booking platform.</p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Book Now <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Modern building"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Features</h2>
            <p className="text-gray-600">Discover how GestorApp can help you manage your space efficiently</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Easy Booking</h3>
                <p className="text-gray-600 text-center mb-6">Simple and efficient booking system for all common areas with real-time availability.</p>
                <div className="text-center">
                  <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Community Management</h3>
                <p className="text-gray-600 text-center mb-6">Efficient tools for managing community resources and coordinating events.</p>
                <div className="text-center">
                  <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Facility Overview</h3>
                <p className="text-gray-600 text-center mb-6">Complete visibility of all available facilities with detailed information.</p>
                <div className="text-center">
                  <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl font-bold mb-4">About GestorApp</h2>
              <p className="text-xl text-blue-600 mb-6">We're dedicated to making common site management simple and efficient.</p>
              <p className="text-gray-600 mb-8">Our platform provides comprehensive tools for booking management, maintenance scheduling, and community organization. With GestorApp, you can streamline operations and improve community satisfaction.</p>
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800&q=80"
                alt="Community gathering"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">500+</div>
                    <div className="text-gray-600 text-sm">Happy Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of users who trust GestorApp for their facility management needs.</p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
            Start Booking Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;