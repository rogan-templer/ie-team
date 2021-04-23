import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='container'>
            <div className='grid'>
            <Link className='logo col' to='/'>
            <img className='logo col' src={'/images/logo.jpg'} alt='logo'/>
            </Link>
            </div>
        </div>
    )
}

export default Header
