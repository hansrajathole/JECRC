import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center'>
      <form className='border p-6 flex flex-col w-[400px] rounded-2xl bg-white'>
        <h1 className='text-center text-2xl font-sans font-semibold'>Login here</h1>
        <label htmlFor="email">Email :</label>
        <input type="text" id='email' className='outline-none border px-2 py-1 rounded' />
        <br />
        
        <label htmlFor="password">Password :</label>
        <input type="password" id='password' className='outline-none border px-2 py-1 rounded' />
        <br />
        <button className='bg-blue-500 m-auto text-white px-2 py-1.5 rounded text-xl'>Login</button>
        <br />
        <p>if you don't have an account?  <Link to={"/register"}> Register here</Link></p>
      </form> 
    </div>
  )
}

export default Login
