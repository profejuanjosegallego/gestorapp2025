import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Info, User, Mail, Phone, Trash2, BookOpen } from 'lucide-react';
import facilitiesData from '../lib/facilitiesData';
import BookingService from '../services/BookingService';
import CalendarView from '../components/common/Calendar/CalendarView';

// Refactored Booking Component with localStorage persistence
const Booking = () => {
  // Get unique facility names from the API data
  const uniqueFacilities = [...new Set(facilitiesData.map(facility => facility.nombreEspacio))];

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '1',
    facility: uniqueFacilities[0], // Default to first facility
    attendees: '',
    purpose: '',
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [showCalendar, setShowCalendar] = useState(true);
  const [bookingStep, setBookingStep] = useState(1); // 1: Select slot, 2: Fill details
  const [userBookings, setUserBookings] = useState([]);
  const [showUserBookings, setShowUserBookings] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Find the selected facility details
  const facilityDetails = facilitiesData.find(
    facility => facility.nombreEspacio === formData.facility
  );

  // Load user bookings from localStorage on component mount
  useEffect(() => {
    const allBookings = BookingService.getAllBookings();
    setUserBookings(allBookings);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle facility change
  const handleFacilityChange = (facilityName) => {
    setFormData(prev => ({
      ...prev,
      facility: facilityName,
      // Reset date and time when changing facility
      date: '',
      time: ''
    }));

    // Go back to calendar view when changing facility
    setShowCalendar(true);
    setBookingStep(1);
    setShowUserBookings(false);
  };

  // Handle slot selection from calendar
  const handleSlotSelect = (date, time) => {
    setFormData(prev => ({
      ...prev,
      date,
      time
    }));
    setBookingStep(2); // Move to details step
    setShowCalendar(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.facility) newErrors.facility = 'Facility selection is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Check if slot is already booked (double-check)
      if (BookingService.isSlotBooked(formData.facility, formData.date, formData.time)) {
        setErrors({
          ...errors,
          date: 'This slot has already been booked. Please select another time.'
        });
        return;
      }

      // Add booking to localStorage
      const newBooking = BookingService.addBooking(formData);

      // Update user bookings state
      setUserBookings([...userBookings, newBooking]);

      // Show success message
      setBookingSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          date: '',
          time: '',
          duration: '1',
          facility: formData.facility, // Keep the same facility
          attendees: '',
          purpose: '',
          name: '',
          email: '',
          phone: ''
        });
        setBookingStep(1);
        setShowCalendar(true);
        setBookingSuccess(false);
      }, 3000);
    }
  };

  // Go back to calendar view
  const handleBack = () => {
    setBookingStep(1);
    setShowCalendar(true);
    setShowUserBookings(false);
  };

  // Delete a booking
  const handleDeleteBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      // Delete from localStorage
      BookingService.deleteBooking(bookingId);

      // Update user bookings state
      const updatedBookings = userBookings.filter(booking => booking.id !== bookingId);
      setUserBookings(updatedBookings);
    }
  };

  // Toggle user bookings view
  const toggleUserBookings = () => {
    setShowUserBookings(!showUserBookings);
    if (!showUserBookings) {
      setShowCalendar(false);
    } else {
      setShowCalendar(true);
    }
    setBookingStep(1);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Format time for display
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${period}`;
  };

  return (
    <div className="container py-8 max-w-screen-xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Book Your Facility</h1>



      {/* Navigation buttons */}
      <div className="flex justify-between mb-8">
        <div className="flex space-x-4">
          {/* Facility selector tabs */}
          <div className="flex flex-wrap border-b border-gray-200">
            {uniqueFacilities.map(facility => (
              <button
                key={facility}
                className={`px-6 py-3 mr-2 mb-0 rounded-t-lg transition-colors font-medium ${formData.facility === facility
                  ? 'bg-blue-500 text-white border-b-2 border-blue-600'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                onClick={() => handleFacilityChange(facility)}
              >
                {facility}
              </button>
            ))}
          </div>
        </div>
        {/* My Bookings button */}
        <button
          onClick={toggleUserBookings}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${showUserBookings
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
        >
          <BookOpen size={18} className="mr-2" />
          {userBookings.length > 0 ? `My Bookings (${userBookings.length})` : 'My Bookings'}
        </button>
      </div>

      {/* Facility details */}
      {facilityDetails && !showUserBookings && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">{facilityDetails.nombreEspacio}</h2>
          <p className="mb-4 text-gray-600">{facilityDetails.descripcion}</p>
          <div className="flex items-center text-gray-700">
            <Users size={20} className="mr-2 text-blue-500" />
            <span><strong>Ability:</strong> {facilityDetails.capacidad} People</span>
          </div>
        </div>
      )}

      {/* User Bookings View */}
      {showUserBookings ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">My Bookings</h2>

            {userBookings.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <div className="mb-4">
                  <Calendar size={48} className="mx-auto text-gray-400" />
                </div>
                <p className="text-lg">You don't have any bookings yet.</p>
                <button
                  onClick={handleBack}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Make a Booking
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {userBookings.map(booking => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{booking.facility}</h3>
                        <div className="flex items-center mt-2 text-gray-600">
                          <Calendar size={16} className="mr-2 text-blue-500" />
                          <span>{formatDate(booking.date)}</span>
                        </div>
                        <div className="flex items-center mt-1 text-gray-600">
                          <Clock size={16} className="mr-2 text-blue-500" />
                          <span>{formatTime(booking.time)} ({booking.duration} {booking.duration === '1' ? 'hour' : 'hours'})</span>
                        </div>
                        {booking.purpose && (
                          <div className="mt-2 text-gray-600">
                            <span className="font-medium">Purpose:</span> {booking.purpose}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleDeleteBooking(booking.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                        title="Cancel Booking"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{booking.name}</span>
                        </div>
                        <div>
                          Booked on {new Date(booking.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Step indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${bookingStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                <Calendar size={20} />
              </div>
              <div className={`w-24 h-1 mx-2 transition-colors duration-300 ${bookingStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'
                }`}></div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${bookingStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                <User size={20} />
              </div>
            </div>
          </div>

          {/* Calendar or booking form based on step */}
          {showCalendar ? (
            <CalendarView
              facilityName={formData.facility}
              onSlotSelect={handleSlotSelect}
            />
          ) : (
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Complete Your Booking</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Selected Date and Time (readonly) */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <label className="block mb-2 font-medium text-gray-700 flex items-center">
                            <Calendar size={18} className="mr-2 text-blue-500" />
                            Selected Date
                          </label>
                          <input
                            type="date"
                            className={`w-full p-3 border rounded-md bg-white ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                            name="date"
                            value={formData.date}
                            readOnly
                          />
                          {errors.date && <div className="text-red-500 text-sm mt-1">{errors.date}</div>}
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <label className="block mb-2 font-medium text-gray-700 flex items-center">
                            <Clock size={18} className="mr-2 text-blue-500" />
                            Selected Time
                          </label>
                          <input
                            type="time"
                            className="w-full p-3 border border-gray-300 rounded-md bg-white"
                            name="time"
                            value={formData.time}
                            readOnly
                          />
                        </div>

                        {/* Duration */}
                        <div>
                          <label className="block mb-2 font-medium text-gray-700">Duration (hours)</label>
                          <select
                            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                          >
                            <option value="1">1 hour</option>
                            <option value="2">2 hours</option>
                            <option value="3">3 hours</option>
                          </select>
                        </div>

                        <div>
                          <label className="block mb-2 font-medium text-gray-700 flex items-center">
                            <Users size={18} className="mr-2 text-blue-500" />
                            Number of Attendees
                          </label>
                          <input
                            type="number"
                            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                            name="attendees"
                            value={formData.attendees}
                            onChange={handleChange}
                            min="1"
                            max={facilityDetails?.capacidad || 100}
                            placeholder={`Max: ${facilityDetails?.capacidad || 100} people`}
                          />
                        </div>

                        {/* Purpose */}
                        <div className="md:col-span-2">
                          <label className="block mb-2 font-medium text-gray-700 flex items-center">
                            <Info size={18} className="mr-2 text-blue-500" />
                            Purpose of Booking
                          </label>
                          <textarea
                            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Describe the purpose of your booking..."
                          ></textarea>
                        </div>

                        {/* Contact Information */}
                        <div className="md:col-span-2">
                          <h3 className="font-bold text-lg mb-4 text-gray-700 border-b pb-2">Contact Information</h3>
                        </div>

                        <div>
                          <label className="block mb-2 font-medium text-gray-700 flex items-center">
                            <User size={18} className="mr-2 text-blue-500" />
                            Full Name
                          </label>
                          <input
                            type="text"
                            className={`w-full p-3 border rounded-md focus:ring-2 transition-colors ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                          />
                          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                        </div>

                        <div>
                          <label className="block mb-2 font-medium text-gray-700 flex items-center">
                            <Mail size={18} className="mr-2 text-blue-500" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            className={`w-full p-3 border rounded-md focus:ring-2 transition-colors ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                          />
                          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                        </div>

                        <div className="md:col-span-2">
                          <label className="block mb-2 font-medium text-gray-700 flex items-center">
                            <Phone size={18} className="mr-2 text-blue-500" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className={`w-full p-3 border rounded-md focus:ring-2 transition-colors ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (123) 456-7890"
                          />
                          {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
                        </div>

                        <div className="md:col-span-2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                          <button
                            type="button"
                            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-gray-700 font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-300 md:w-1/3"
                            onClick={handleBack}
                          >
                            <Calendar size={18} className="mr-2" />
                            Back to Calendar
                          </button>
                          <button
                            type="submit"
                            className="p-3 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors text-white font-medium shadow-md hover:shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300 md:w-2/3"
                          >
                            Confirm Booking
                          </button>

                          {/* Success message */}
                          {bookingSuccess && (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 rounded shadow-md">
                              <div className="flex items-center">
                                <div className="py-1">
                                  <svg className="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-bold">Booking Successful!</p>
                                  <p>Your reservation has been confirmed. You'll find it in your bookings list.</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Booking;