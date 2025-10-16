import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center'>
      <form className='border p-6 flex flex-col w-[400px] rounded-2xl bg-white'>
        <h1 className='text-center text-2xl font-sans font-semibold'>Register here</h1>
        <label htmlFor="username">username :</label>
        <input type="text" id='username' className='outline-none border px-2 py-1 rounded' />
        <br />
        <label htmlFor="email">Email :</label>
        <input type="text" id='email' className='outline-none border px-2 py-1 rounded' />
        <br />
        
        <label htmlFor="password">Password :</label>
        <input type="password" id='password' className='outline-none border px-2 py-1 rounded' />
        <br />
        <button className='bg-green-700 m-auto text-white px-2 py-1.5 rounded text-xl'>Register</button>
        <br />
        <p>if you have an account?  <Link to={"/login"} className='text-blue-800'> login here</Link></p>
      </form> 
    </div>
  )
}

export default Register
