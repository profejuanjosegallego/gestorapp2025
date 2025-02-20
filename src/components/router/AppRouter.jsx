import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home/Home.jsx"
import Dashboard from "../pages/Dashboard/Dashboard.jsx"
import Booking from "../pages/Booking/Booking.jsx"
import NotFound from '../pages/NotFound/NotFound.jsx'
import Footer from "../common/Footer/Footer.jsx"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRouter;