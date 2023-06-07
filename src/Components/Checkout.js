import React from 'react'
import "./Checkoutstyles.css"
import Subtotal from "./Subtotal"
function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__title'>
        <h3>Your shopping Basket</h3>
      </div>
      <div className='checkout__right'>
      <h3>Your Sub-Total</h3>
      <Subtotal />
      </div>
      
    </div>
  )
}

export default Checkout
