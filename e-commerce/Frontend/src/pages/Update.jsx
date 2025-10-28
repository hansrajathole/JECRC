import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Update = () => {

    const [title, settitle] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const [price, setprice] = useState(0)
    const [error, seterror] = useState('')
    const [productDetail, setproductDetail] = useState({})
    
    const token = localStorage.getItem("token")

  const params = useParams()
  const navigate = useNavigate()
  const productId = params.productId



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
            settitle(res.data.product.title)
            setdescription(res.data.product.description)
            setimage(res.data.product.image)
            setprice(res.data.product.price)
            setcategory(res.data.product.category)

            setproductDetail(res.data.product);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
      }



    const handleSubmit = (e)=>{
        e.preventDefault()
        
        axios.patch(`http://localhost:4000/products/update/${productId}`,{title, image , description, category, price},
            {
                headers : {
                    Authorization : `bearer ${token}`
                }
            }
        )
        .then((res)=>{
            console.log(res.data);
            navigate(`/product/detail/${productId}`)

        })
        .catch((err)=>{
            console.log(err.response.data.message);
            seterror(err.response.data.message);
            
        })
    }

  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center'>
      <form
      onSubmit={(e)=>{
        handleSubmit(e)
      }}
      className='border p-6 flex flex-col w-[400px] rounded-2xl bg-white'>
        <h1 className='text-center text-2xl font-sans font-semibold'>Update Product</h1>
        <label htmlFor="title">Title :</label>
        <input type="text" id='title' className='outline-none border px-2 py-1 rounded'
         value={title}
         onChange={(e)=>{
           
            settitle(e.target.value)
         }}
        />
        <br />
        <label htmlFor="description">Description :</label>
        <input type="text" id='description' className='outline-none border px-2 py-1 rounded' 
          value={description}
          onChange={(e)=>{
            setdescription(e.target.value)
         }}
        />
        <br />
        
        <label htmlFor="image">Image :</label>
        <input type="text" id='image' className='outline-none border px-2 py-1 rounded'
        value={image}
         onChange={(e)=>{
            setimage(e.target.value)
         }}
        />
        <br />

        <label htmlFor="price">Price :</label>
        <input type="number" id='price' className='outline-none border px-2 py-1 rounded'
        value={price}
         onChange={(e)=>{
            setprice(e.target.value)
         }}
        />
        <br />
        <label htmlFor="category">Category :</label>
        <input type="text" id='category' className='outline-none border px-2 py-1 rounded'
        value={category}
         onChange={(e)=>{
            setcategory(e.target.value)
         }}
        />
        <br />
        <button className='bg-green-700 m-auto text-white px-2 py-1.5 rounded text-xl'>Submit</button>
        {
          error && <p className='text-red-600'>{error}</p>
        }

      </form> 
    </div>
  )
}

export default Update
