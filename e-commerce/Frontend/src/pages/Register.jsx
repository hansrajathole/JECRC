import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {

  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()


    axios.post("http://localhost:4000/users/register",{ username , email , password})
    .then((res)=>{
      console.log(res);
      localStorage.setItem("token",res.data.token)
      navigate("/")
    })
    .catch((err)=>{
      console.log(err.response.data.message);
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
        <h1 className='text-center text-2xl font-sans font-semibold'>Register here</h1>
        <label htmlFor="username">username :</label>
        <input type="text" id='username' className='outline-none border px-2 py-1 rounded'
         value={username}
         onChange={(e)=>{
            console.log(e.target.value);
            setusername(e.target.value)
         }}
        />
        <br />
        <label htmlFor="email">Email :</label>
        <input type="text" id='email' className='outline-none border px-2 py-1 rounded' 
          value={email}
          onChange={(e)=>{
            console.log(e.target.value);
            setemail(e.target.value)
         }}
        />
        <br />
        
        <label htmlFor="password">Password :</label>
        <input type="password" id='password' className='outline-none border px-2 py-1 rounded'
        value={password}
         onChange={(e)=>{
            console.log(e.target.value);
            setpassword(e.target.value)
         }}
        />
        <br />
        <button className='bg-green-700 m-auto text-white px-2 py-1.5 rounded text-xl'>Register</button>
        {
          error && <p className='text-red-600'>{error}</p>
        }
        <br />

        <p>if you have an account?  <Link to={"/login"} className='text-blue-800'> login here</Link></p>
      </form> 
    </div>
  )
}

export default Register
