import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='h-15 w-full bg-red-200 flex justify-between items-center px-5'>
      <h1 className='font-semibold text-2xl'>Shoppy</h1>
      <div className="search border py-1 px-3 rounded-2xl w-[40%]">
        <input type="text" className='outline-none w-[95%]' />
        <i className="ri-search-line"></i>
      </div>
      <div className='flex gap-3'>
        <button className='border px-2.5 py-1 rounded bg-neutral-500 text-white'>Create</button>
    <Link to={"/login"} className='border px-2.5 py-1 rounded bg-blue-400 text-white'>Login</Link>

      </div>
    </div>
  )
}

export default Navbar
