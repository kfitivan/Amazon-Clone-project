import React from 'react'
import "./Productsstyles.css"
import { useStateValue } from './StateProvider'

const Products= ({productItems, id, title, image, price, heading}) =>{

  // const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {

    // throwing a typoerror ... next week ...
    // dispatch the item into the basket
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id: id,
    //     title: title,
    //     image: image,
    //     price: price,
    //     heading: heading,
    //   }
    // });
  }
    
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
              <button className='product-add-button' onClick={addToBasket}>Add to Cart</button>
              </div>
        </div>
      ))}
    </div>
  )
}

export default Products
