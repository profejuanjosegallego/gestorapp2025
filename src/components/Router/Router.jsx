import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../../components/pages/Home/Home.jsx"
import Dashboard from "../../components/pages/Dashboard/Dashboard.jsx"
import Booking from "../../components/pages/Booking/Booking.jsx"

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/booking' element={<Booking />} />
        </Routes>
    )
}

export default Router