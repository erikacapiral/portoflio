import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-20 h-10 rounded-md bg-white items-center justify-center flex font-bold shadow-md">
            <p className='text-[#121b3a] font-["Poppins"]'>Erika</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium font-["Poppins"]'>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#2D3A5A] underline' : 'text-white'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-[#2D3A5A] underline' : 'text-white'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
