import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '1',
    facility: '',
    attendees: '',
    purpose: '',
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const facilities = [
    'Conference Room A',
    'Conference Room B',
    'Event Hall',
    'Garden Area',
    'Sports Court'
  ];

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
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Make a Booking</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Date and Time Selection */}
                  <div className="col-md-6">
                    <label className="form-label d-flex align-items-center">
                      <Calendar size={18} className="me-2" />
                      Date
                    </label>
                    <input
                      type="date"
                      className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label d-flex align-items-center">
                      <Clock size={18} className="me-2" />
                      Time
                    </label>
                    <input
                      type="time"
                      className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                    />
                    {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                  </div>

                  {/* Facility and Duration */}
                  <div className="col-md-6">
                    <label className="form-label">Facility</label>
                    <select
                      className={`form-select ${errors.facility ? 'is-invalid' : ''}`}
                      name="facility"
                      value={formData.facility}
                      onChange={handleChange}
                    >
                      <option value="">Select a facility</option>
                      {facilities.map(facility => (
                        <option key={facility} value={facility}>{facility}</option>
                      ))}
                    </select>
                    {errors.facility && <div className="invalid-feedback">{errors.facility}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label d-flex align-items-center">
                      <Users size={18} className="me-2" />
                      Number of Attendees
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="attendees"
                      value={formData.attendees}
                      onChange={handleChange}
                      min="1"
                    />
                  </div>

                  {/* Purpose */}
                  <div className="col-12">
                    <label className="form-label">Purpose of Booking</label>
                    <textarea
                      className="form-control"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      rows="3"
                    ></textarea>
                  </div>

                  {/* Contact Information */}
                  <div className="col-md-4">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit Booking Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;