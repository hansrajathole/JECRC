import React, { useState } from 'react'

const App = () => {

  const [number, setNumber] = useState(0)



  return (
    <div className='container'>
      <h1>Counter App</h1>
      <div className='counter'>
        <button
        onClick={()=>{
          setNumber(number - 1)
        }}
        >-</button>
        <p>{number}</p>
        <button 
        onClick={()=>{
          setNumber(number+1)
        }}
        >+</button>
      </div>
    </div>
  )
}

export default App
