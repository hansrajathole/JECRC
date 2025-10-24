import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {

  
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()


    axios.post("http://localhost:4000/users/login",{ email , password})
    .then((res)=>{
      
      localStorage.setItem("token",res.data.token)
      navigate("/")
    })
    .catch((err)=>{
      
      seterror(err.response.data.message)
      setTimeout(()=>{
        seterror('')
      },4000)
    })
  }


  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center'>
      <form
      onSubmit={(e)=>{
        handleSubmit(e)
      }}
      className='border p-6 flex flex-col w-[400px] rounded-2xl bg-white'>
        <h1 className='text-center text-2xl font-sans font-semibold'>Login here</h1>
        <br />
        <label htmlFor="email">Email :</label>
        <input type="text" id='email' className='outline-none border px-2 py-1 rounded' 
          value={email}
          onChange={(e)=>{
           
            setemail(e.target.value)
         }}
        />
        <br />
        
        <label htmlFor="password">Password :</label>
        <input type="password" id='password' className='outline-none border px-2 py-1 rounded'
        value={password}
         onChange={(e)=>{
            
            setpassword(e.target.value)
         }}
        />
        <br />
        <button className='bg-blue-700 m-auto text-white px-2 py-1.5 rounded text-xl'>Login</button>
        {
          error && <p className='text-red-600'>{error}</p>
        }
        <br />

        <p>if you don't have an account?  <Link to={"/register"} className='text-blue-700'> register here</Link></p>
      </form> 
    </div>
  )
}

export default Register
