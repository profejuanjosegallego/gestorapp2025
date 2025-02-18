import React, { useState, useEffect } from 'react'
import "./Dashboard.css"
import Header from "../../common/Header/Header.jsx"
import Room from '../../common/Room/Room.jsx'
import { dbRooms } from '../../../database/dataRooms.js'
import Promotion from '../../../components/common/Promotion/Promotion.jsx'
import { dbPromotions } from '../../../database/dataPromosAndOffers.js'

const Dashboard = () => {
    const [rooms, setRooms] = useState([]);
    const [promotions, setPromotions] = useState([]);
    useEffect(() => {
        setRooms(dbRooms)
        setPromotions(dbPromotions);
    })
    return (
        <>
            <Header />
            <div className='dashboard'>
                <h1 className='dashboard__tittle'>Accommodations</h1>
                <div className='dashboard__rooms'>
                    {
                        rooms.map((room) => <Room key={room.id} object={room} />)
                    }
                </div>
                <h2 className='dashboard__tittle-promos'>Promos and Offers</h2>
                <div className='dashboard__promos'>{
                    promotions.map((promotion) => <Promotion key={promotion.id} object={promotion} />)
                }
                </div>
            </div>
        </>
    )
}

export default Dashboard