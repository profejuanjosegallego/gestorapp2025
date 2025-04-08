import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import BookingService from '../../../services/BookingService';
import facilitiesData from '../../../lib/facilitiesData';

// Calendar component with localStorage persistence
const CalendarView = ({ facilityName, onSlotSelect }) => {
    // State for reserved slots based on localStorage
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

    // Days of the week
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

    // Load reserved slots from both API data and localStorage
    useEffect(() => {
        // Find the selected facility in the data
        const selectedFacilities = facilitiesData.filter(
            facility => facility.nombreEspacio === facilityName
        );

        // Create initial reserved slots based on the calendars of all matching facilities
        const apiReservedSlots = [];

        selectedFacilities.forEach(facility => {
            facility.calendario.forEach(slot => {
                const day = dayTranslation[slot.dia];
                const time = getTimeFormat(slot.hora);

                if (day && time) {
                    apiReservedSlots.push({ day, hour: time, source: 'api' });
                }
            });
        });

        // Get user bookings from localStorage
        const userReservedSlots = BookingService.getReservedSlots(facilityName);

        // Combine both sources of reserved slots
        setReservedSlots([...apiReservedSlots, ...userReservedSlots]);
    }, [facilityName]);

    // Function to check if a slot is reserved
    const isReserved = (day, hour) => {
        return reservedSlots.some(slot => slot.day === day && slot.hour === hour);
    };

    // Function to get booking details for a reserved slot
    const getBookingDetails = (day, hour) => {
        return reservedSlots.find(slot => slot.day === day && slot.hour === hour);
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
                                {days.map((day, dayIndex) => {
                                    const reserved = isReserved(day, hour);
                                    const booking = reserved ? getBookingDetails(day, hour) : null;

                                    return (
                                        <td key={`${day}-${hour}`} className="border border-gray-200 p-3 h-20 min-w-28 text-center">
                                            {reserved ? (
                                                <div>
                                                    <button
                                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm transition-colors cursor-not-allowed opacity-90 shadow-sm w-full mb-1"
                                                        disabled
                                                    >
                                                        Reserved
                                                    </button>
                                                    {booking?.source !== 'api' && booking?.fullBooking && (
                                                        <div className="text-xs text-gray-600 mt-1">
                                                            {booking.fullBooking.name ?
                                                                `Booked by: ${booking.fullBooking.name.split(' ')[0]}` :
                                                                'User Booking'}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm transition-colors shadow-sm hover:shadow-md w-full"
                                                    onClick={() => handleSlotSelect(day, hour)}
                                                >
                                                    Reserve
                                                </button>
                                            )}
                                        </td>
                                    );
                                })}
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

export default CalendarView;