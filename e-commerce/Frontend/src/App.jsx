import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import {Routes , Route} from "react-router-dom"
import Register from './pages/Register'
const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/'  element={<h1>Home page</h1>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

    </div>
  )
}

export default App
