import React from 'react'
import './checkoutproducts.css'
import { useAppContext } from './AppContext';


function CheckoutProducts({id, image, title, heading, price}) {

    const { state, dispatch } = useAppContext()
    const { basket } = state;
    
    const removeFromBasket = () => {
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          id: id,
        });
      };
      
      return (
        <div className='checkoutproducts'>
          <img className="checkoutproduct__image" src={image} alt='img' />
          <div className='checkoutproduct__info'>
            <p className='checkoutproduct__title'>{title}</p>
            <p className='checkoutproduct__heading'>{heading}</p>
            <p className='checkoutproduct__price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <button onClick={removeFromBasket}>Remove from Basket</button>
          </div>
        </div>
      );      
}

export default CheckoutProducts
