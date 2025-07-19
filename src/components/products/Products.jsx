import React from 'react'
import "./Products.css"
import { useNavigate } from 'react-router-dom'

const Products = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className='wrapper'>
        {
            data?.map((product) => (
                <div key={product.id} className='card'>
                    <img onClick={()=> navigate(`/product/${product.id}`)} src={product.thumbnail} alt="" />
                    <h3>{product.title}</h3>
                    <strong>{product.price} USD</strong>
                </div>
            ))
        }
    </div>
  )
}

export default Products