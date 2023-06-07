import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"

function Subtotal() {
    // install a library for the currency formart
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value)=>(
            <>
           <p>
            Subtotal (0 items): 
            <strong>0</strong>
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
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

