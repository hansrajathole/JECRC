import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from './store/counterSlice'

const App = () => {

  const count = useSelector((state)=> state.counter.value)
  const dispatch =  useDispatch()
  return (
    <div className='container'>
        <button
        onClick={()=>{
          dispatch(decrement())
        }}
        >-</button>
        <h1>{count}</h1>
        <button 
        onClick={()=>{
          dispatch(increment())
        }}
        >+</button>
    </div>
  )
}

export default App
