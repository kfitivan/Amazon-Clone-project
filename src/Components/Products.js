import React from 'react'
import "./Productsstyles.css"
import { Link } from 'react-router-dom'

const Products= ({productItems, handleAddProduct}) =>{
    
  return (
    <div className='products'>
      {productItems.map((productItem)=>(
        <div className='card'>
            <div className='product-name'><h3>{productItem.title}</h3></div>
            <div className='product-homeimage'>
              <a href={productItem.url} className='home-images'>
                <img src={productItem.image} alt={productItem.name}/>
              </a>
            </div>
            <div className='product-price'>{productItem.heading}</div>
            <div className='product-price'>${productItem.price}</div>
            <div >
              <button className='product-add-button' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
              </div>
        </div>
      ))}
    </div>
  )
}

export default Products
