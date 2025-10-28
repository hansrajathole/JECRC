import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    console.log(product);

    const navigate = useNavigate()
    
  return (
    <div className='h-[400px] w-[300px] rounded bg-white'>
      <div className="top h-[60%] flex justify-center items-center">
        <img
        onClick={()=>{
          navigate(`/product/detail/${product._id}`)
        }}
        src={product.image} alt="" className='h-full '/>
      </div>
      <br />
      <div className="bottom p-2.5">
        <h1 className='font-semibold text-2xl'>{product.title}</h1>
        <div>
            <h1 className='font-semibold text-xl'>{product.price}</h1>
            <h1>{product.category}</h1>
        </div>
      </div>
    </div>
  )
}

export default Product
