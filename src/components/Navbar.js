import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-secondary py-2'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-2 fw-bold'>My Contact List</Link>
                <Link to='/add' className='btn btn-outline-light '>Add Contact</Link>
            </div>
            
        </nav >
    )
}

export default Navbar