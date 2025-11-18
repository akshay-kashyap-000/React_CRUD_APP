import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='h-20 w-full px-2 shadow-xl flex items-center justify-between'>
            
            <Link to='/' className='font-bold text-2xl '>Crud App</Link>

            <nav className='hidden md:flex gap-8 font-semibold '>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>

            <div className='font-semibold '>
                <Link to='/login'>
                    <button className='hover:bg-black hover:text-white cursor-pointer  border rounded px-6 py-2 text-blue-600 border-blue-600'>
                        Login
                    </button>
                </Link>
                <Link to='/signup'>
                    <button className='cursor-pointer border rounded px-6 py-2 ms-2 bg-blue-600 text-white'>
                        Signup
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar