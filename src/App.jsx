import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Footer from './components/common/Footer/Footer';
import About from './pages/About';
import Espacios from './pages/Facilities';

function App() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-slate-800 border-b border-slate-700">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo and brand */}
              <Link className="flex items-center" to="/">
                <Building2 className="text-slate-300 mr-2" size={22} />
                <span className="text-lg font-semibold text-white">
                  GestorApp
                </span>
              </Link>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-slate-300 hover:text-white focus:outline-none"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop navigation */}
              <div className="hidden md:block">
                <ul className="flex space-x-1">
                  <li>
                    <Link
                      className="px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded text-sm font-medium transition-colors duration-200"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded text-sm font-medium transition-colors duration-200"
                      to="/booking"
                    >
                      Book Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded text-sm font-medium transition-colors duration-200"
                      to="/facilities"
                    >
                      Facilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded text-sm font-medium transition-colors duration-200"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            {/* Mobile navigation */}
            <div className={`${isMenuOpen ? 'max-h-48' : 'max-h-0'} md:hidden overflow-hidden transition-all duration-200 ease-in-out`}>
              <ul className="py-2 space-y-1 border-t border-slate-700">
                <li>
                  <Link
                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded text-sm font-medium"
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded text-sm font-medium"
                    to="/booking"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded text-sm font-medium"
                    to="/facilities"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded text-sm font-medium"
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Espacios />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;