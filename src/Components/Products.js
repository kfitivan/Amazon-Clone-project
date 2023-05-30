import React from 'react'
import "./Productsstyles.css"

const Products= ({productItems}) =>{
    
  return (
    <div className='products'>
      {productItems.map((productItem)=>(
        <div className='card'>
            <div className='product-name'><h3>{productItem.title}</h3></div>
            <div>
                <img src={productItem.image} alt={productItem.name}/>
            </div>
            
            <div className='product-price'>{productItem.heading}</div>
            <div ><button className='product-add-button'>Add to Cart</button></div>
        </div>
      ))}
    </div>
  )
}

export default Products
