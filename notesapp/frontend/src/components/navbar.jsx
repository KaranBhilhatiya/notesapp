import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flx-grow h-12 w-full bg-amber-950'>
      <div className='flex flex-grow p-6 items-center justify-between '>
        <h1 className='flex items-center text-white font-semibold text-2xl '>
          Notespad
        </h1>
        <div className='flex gap-4'>
        <Link to="/login"><button className='bg-white p-1 rounded-md font-semibold '>Login</button></Link>
        <Link to="/signup"><button className='bg-white p-1 rounded-md font-semibold '>Signup</button></Link>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar