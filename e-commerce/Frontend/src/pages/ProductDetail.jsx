import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const ProductDetail = () => {

  const params = useParams()
  const navigate = useNavigate()
  const productId = params.productId
  const [productDetail, setproductDetail] = useState({})
  
  const token = localStorage.getItem("token")

  useEffect(() => {
   getProductDetail()
  }, [])
  

  const getProductDetail = ()=>{
    axios.get(`http://localhost:4000/products/detail/${productId}`,{
        headers : {
            Authorization : `bearer ${token}`
        }
    })
    .then((res)=>{
        console.log(res.data.product);
        setproductDetail(res.data.product);
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
  }

  const deleteHandler = ()=>{
    axios.delete(`http://localhost:4000/products/delete/${productId}`,{
      headers : {
        Authorization : `bearer ${token}`
      }
    })
    .then((res)=>{
      console.log(res);
      navigate("/")
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }

  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center'>
      <div className='h-[400px] w-[700px] border rounded-2xl bg-white flex overflow-hidden'>
        <div className="left w-[50%] overflow-hidden">
            <img src={productDetail.image} alt="" className='h-[100%] w-[100%] object-cover '/>
        </div>
        <div className="right p-2.5 w-[50%] flex flex-col gap-2">
            <h1 className='font-semibold text-2xl'>{productDetail.title}</h1>
            <p className=''>{productDetail.description}</p>
            <div className='flex justify-between text-xl'>
                <h2>Price : {productDetail.price}</h2>
                <p>{productDetail.category}</p>
            </div>
            <div className="bottom flex justify-between py-5">
                <button className='bg-red-500 text-white px-2.5 py-1 rounded'
                onClick={deleteHandler} >Delete</button>
                <button className='bg-blue-500 text-white px-2.5 py-1 rounded'
                onClick={()=>{
                    navigate(`/product/update/${productDetail._id}`)
                }}
                >Update</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
