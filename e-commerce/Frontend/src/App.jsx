import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import {Routes , Route} from "react-router-dom"
import Register from './pages/Register'
import Create from './pages/Create'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Update from './pages/Update'
const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/create' element={<Create/>}/>
        <Route path='/product/detail/:productId' element={<ProductDetail/>}/>
        <Route path='/product/update/:productId' element={<Update/>}/>

      </Routes>

    </div>
  )
}

export default App
