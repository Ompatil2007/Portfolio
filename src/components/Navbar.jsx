import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex gap-4 p-4 bg-gray-800 text-white justify-end 
    pr-12 fsize-500 font-bold'>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/Projects">Projects</Link>


    </div>
  )
}

export default Navbar