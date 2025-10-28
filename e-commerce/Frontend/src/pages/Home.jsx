import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
const Home = () => {
    
    const [productData, setProductData] = useState([])

    useEffect(() => {
      getData()
    }, [])
    

    const getData = ()=>{
        axios.get("http://localhost:4000/")
        .then((res)=>{
            console.log(res);
            setProductData(res.data.productData)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

  return (
    <div className='h-screen w-full bg-gray-300 flex gap-3 p-4' >
      {
        productData?.map((product , index)=>{
           return <Product key={index} product={product}/>
        })
      }
    </div>
  )
}

export default Home
