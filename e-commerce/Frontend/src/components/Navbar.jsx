import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  return (
    <div className='h-15 w-full bg-red-200 flex justify-between items-center px-5'>
      <h1 className='font-semibold text-2xl'>Shoppy</h1>
      <div className="search border py-1 px-3 rounded-2xl w-[40%]">
        <input type="text" className='outline-none w-[95%]' />
        <i className="ri-search-line"></i>
      </div>
      <div className='flex gap-3'>
        {
          token &&  <button className='border px-2.5 py-1 rounded bg-neutral-500 text-white'
          onClick={()=>{
            navigate("/product/create")
          }}
          >Create</button>
        }
        {
          token ?  <button
          onClick={()=>{
            localStorage.removeItem("token")
            navigate('/login')
          }}
           className='border px-2.5 py-1 rounded bg-blue-400 text-white'>Logout</button> :  
          <Link to={"/login"} className='border px-2.5 py-1 rounded bg-blue-400 text-white'>Login</Link>


        }
      </div>
    </div>
  )
}

export default Navbar
