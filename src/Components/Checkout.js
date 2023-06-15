import React, { useContext } from 'react';
import "./Checkoutstyles.css";
import Subtotal from "./Subtotal";
import { AppContext } from './AppContext';
import CheckoutProducts from './CheckoutProducts';

function Checkout() {
  const { state } = useContext(AppContext);
  const { basket } = state;

  // Calculate the subtotal amount
  const calculateSubtotal = () => {
    let subtotal = 0;
    basket.forEach(item => {
      subtotal += item.price;
    });
    return subtotal;
  };

  return (
    <div className='checkout'>
      <div className='checkout__title'>
        <h3>Your shopping Basket</h3>
        {basket.map(item =>(
          <CheckoutProducts
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            heading={item.heading}
          />
        ))}
      </div>
      <div className='checkout__right'>
        <h3>Your Sub-Total: ${calculateSubtotal()}</h3>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
