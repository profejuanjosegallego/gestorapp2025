// Service for managing bookings with localStorage
const BOOKINGS_STORAGE_KEY = 'facility_bookings';

// Get all bookings from localStorage
const getAllBookings = () => {
    const storedBookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    return storedBookings ? JSON.parse(storedBookings) : [];
};

// Add a new booking
const addBooking = (booking) => {
    const bookings = getAllBookings();

    // Generate a unique ID for the booking
    const newBooking = {
        ...booking,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
    };

    bookings.push(newBooking);
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
};

// Check if a slot is already booked
const isSlotBooked = (facilityName, date, time) => {
    const bookings = getAllBookings();

    return bookings.some(booking =>
        booking.facility === facilityName &&
        booking.date === date &&
        booking.time === time
    );
};

// Get all bookings for a specific facility
const getBookingsByFacility = (facilityName) => {
    const bookings = getAllBookings();
    return bookings.filter(booking => booking.facility === facilityName);
};

// Delete a booking by ID
const deleteBooking = (bookingId) => {
    const bookings = getAllBookings();
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updatedBookings));
    return updatedBookings;
};

// Get all reserved slots for a specific facility
const getReservedSlots = (facilityName) => {
    const facilityBookings = getBookingsByFacility(facilityName);

    return facilityBookings.map(booking => {
        // Convert ISO date to day of week
        const bookingDate = new Date(booking.date);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = dayNames[bookingDate.getDay()];

        // Convert 24h time format to 12h format for display
        const [hours, minutes] = booking.time.split(':');
        let hour = parseInt(hours, 10);
        const period = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
        const formattedTime = `${hour}:${minutes} ${period}`;

        return {
            day,
            hour: formattedTime,
            bookingId: booking.id,
            fullBooking: booking
        };
    });
};

export const BookingService = {
    getAllBookings,
    addBooking,
    isSlotBooked,
    getBookingsByFacility,
    deleteBooking,
    getReservedSlots
};

export default BookingService;