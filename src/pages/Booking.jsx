import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Info, User, Mail, Phone } from 'lucide-react';
import facilitiesData from '../lib/facilitiesData';

// Calendar component with enhanced styling
const CalendarView = ({ facilityName, onSlotSelect }) => {
  // Mock reserved slots based on the selected facility
  const [reservedSlots, setReservedSlots] = useState([]);

  // Hours from 10am to 5pm
  const hours = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ];

  // Days of the week with Spanish to English mapping for API compatibility
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  // Day translation mapping for API data
  const dayTranslation = {
    'lunes': 'Monday',
    'martes': 'Tuesday',
    'miercoles': 'Wednesday',
    'jueves': 'Thursday',
    'viernes': 'Friday',
    'sabado': 'Saturday',
    'domingo': 'Sunday'
  };

  // Time conversion mapping for API data
  const getTimeFormat = (apiTime) => {
    const startTimePart = apiTime.split('-')[0].trim();

    if (startTimePart.includes('10:00')) return '10:00 AM';
    if (startTimePart.includes('11:00')) return '11:00 AM';
    if (startTimePart.includes('12:00')) return '12:00 PM';
    if (startTimePart.includes('1:00')) return '1:00 PM';
    if (startTimePart.includes('2:00')) return '2:00 PM';
    if (startTimePart.includes('3:00')) return '3:00 PM';
    if (startTimePart.includes('4:00')) return '4:00 PM';
    if (startTimePart.includes('5:00')) return '5:00 PM';

    return null;
  };

  // Load reserved slots when facility changes
  useEffect(() => {
    // Find the selected facility in the data
    const selectedFacilities = facilitiesData.filter(
      facility => facility.nombreEspacio === facilityName
    );

    // Create reserved slots based on the calendars of all matching facilities
    const newReservedSlots = [];

    selectedFacilities.forEach(facility => {
      facility.calendario.forEach(slot => {
        const day = dayTranslation[slot.dia];
        const time = getTimeFormat(slot.hora);

        if (day && time) {
          newReservedSlots.push({ day, hour: time });
        }
      });
    });

    setReservedSlots(newReservedSlots);
  }, [facilityName]);

  // Function to check if a slot is reserved
  const isReserved = (day, hour) => {
    return reservedSlots.some(slot => slot.day === day && slot.hour === hour);
  };

  // Function to format day for form submission
  const formatDateForInput = (day) => {
    // Get current date to determine the year and month
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Map days to numbers (0-6 starting from Sunday in JavaScript)
    const dayMap = {
      'Sunday': 0,
      'Monday': 1,
      'Tuesday': 2,
      'Wednesday': 3,
      'Thursday': 4,
      'Friday': 5,
      'Saturday': 6
    };

    // Find the next occurrence of the day
    const dayNumber = dayMap[day];
    const currentDayNumber = currentDate.getDay();

    let daysToAdd = dayNumber - currentDayNumber;
    if (daysToAdd <= 0) daysToAdd += 7; // If day has passed this week, go to next week

    const targetDate = new Date(year, month, currentDate.getDate() + daysToAdd);
    return targetDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  // Function to format time for form submission
  const formatTimeForInput = (hour) => {
    // Convert from "10:00 AM" format to "10:00" 24-hour format
    const [time, period] = hour.split(' ');
    const [hourPart, minutePart] = time.split(':');

    let hour24 = parseInt(hourPart, 10);
    if (period === 'PM' && hour24 !== 12) hour24 += 12;
    if (period === 'AM' && hour24 === 12) hour24 = 0;

    return `${hour24.toString().padStart(2, '0')}:${minutePart}`;
  };

  // Handle slot selection
  const handleSlotSelect = (day, hour) => {
    if (!isReserved(day, hour) && onSlotSelect) {
      const formattedDate = formatDateForInput(day);
      const formattedTime = formatTimeForInput(hour);
      onSlotSelect(formattedDate, formattedTime);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{facilityName} Calendar</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-200 p-3 bg-gray-50 rounded-tl-lg"></th>
              {days.map((day, index) => (
                <th key={day} className={`border border-gray-200 p-3 bg-gray-50 text-gray-700 ${index === days.length - 1 ? 'rounded-tr-lg' : ''}`}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour, hourIndex) => (
              <tr key={hour} className={hourIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border border-gray-200 p-3 font-medium text-gray-700">{hour}</td>
                {days.map((day, dayIndex) => (
                  <td key={`${day}-${hour}`} className="border border-gray-200 p-3 h-20 min-w-28 text-center">
                    {isReserved(day, hour) ? (
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm transition-colors cursor-not-allowed opacity-90 shadow-sm w-full"
                        disabled
                      >
                        Reserved
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm transition-colors shadow-sm hover:shadow-md w-full"
                        onClick={() => handleSlotSelect(day, hour)}
                      >
                        Reserve
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-6 w-full text-sm text-gray-600">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-sm mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 rounded-sm mr-2"></div>
          <span>Not Available</span>
        </div>
      </div>
    </div>
  );
};

// Refactored Booking Component with enhanced styling
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

  // Find the selected facility details
  const facilityDetails = facilitiesData.find(
    facility => facility.nombreEspacio === formData.facility
  );

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
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      alert('Booking request submitted successfully!');

      // Reset form and go back to step 1
      setFormData({
        date: '',
        time: '',
        duration: '1',
        facility: uniqueFacilities[0],
        attendees: '',
        purpose: '',
        name: '',
        email: '',
        phone: ''
      });
      setBookingStep(1);
      setShowCalendar(true);
    }
  };

  // Go back to calendar view
  const handleBack = () => {
    setBookingStep(1);
    setShowCalendar(true);
  };

  return (
    <div className="container py-8 max-w-screen-xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Book Your Facility</h1>

      {/* Facility selector tabs */}
      <div className="flex flex-wrap mb-8 border-b border-gray-200">
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

      {/* Facility details */}
      {facilityDetails && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">{facilityDetails.nombreEspacio}</h2>
          <p className="mb-4 text-gray-600">{facilityDetails.descripcion}</p>
          <div className="flex items-center text-gray-700">
            <Users size={20} className="mr-2 text-blue-500" />
            <span><strong>Ability:</strong> {facilityDetails.capacidad} People</span>
          </div>
        </div>
      )}

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
                        className="w-full p-3 border border-gray-300 rounded-md bg-white"
                        name="date"
                        value={formData.date}
                        readOnly
                      />
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
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;