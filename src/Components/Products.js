import React from 'react';
import { useStateValue } from './AppContext';
import data from './Data';
import './Productsstyles.css'

const Products = () => {
  const { addToBasket } = useStateValue();

  return (
    <div className='products'>
      {data.productItems.map((productItem) => (
        <div className='card' key={productItem.id}>
          <div className='product-name'>
            <h3>{productItem.title}</h3>
          </div>
          <div className='product-homeimage'>
            <a href={productItem.url} className='home-images'>
              <img src={productItem.image} alt={productItem.name} />
            </a>
          </div>
          <div className='product-price'>{productItem.heading}</div>
          <div className='product-price'>${productItem.price}</div>
          <div>
            <button
              className='product-add-button'
              onClick={() => addToBasket(productItem)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
