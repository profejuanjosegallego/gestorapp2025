import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='not-found__tittle'>NotFound - 404</h1>
            <Link to={'/home'}>Back to Home</Link>
        </div>
    )
}

export default NotFound