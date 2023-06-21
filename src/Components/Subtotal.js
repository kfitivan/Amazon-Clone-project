import React from 'react'
import { useContext } from 'react';
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"
import { AppContext } from './AppContext';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();

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
    // install a library for the currency formart
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value)=>(
            <>
           <p>
            Total ({basket?.length} items): 
            <strong>${calculateSubtotal()}</strong>
           </p>
           <small className='subtotal__gift'>
            <input type="checkbox"/> This order contains agift </small>
           </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

