import React from 'react'
import "./cart.css"

const Cart = ({cartitems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {

    // calculate the price of the items
    const totalPrice = cartitems.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <div className='cart-items'>
        <h2 className='cart-items-header'>Cart Items</h2>
        {/* create a div with function to enable us clear the cart */}
        <div className='clear-cart'>
            {cartitems.length >=1 &&(
                <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
            )}
        </div>
{/* we check if there are items added in the basket yet */}
        {cartitems.length ===0 && (
            <div className='cart-items-empty'>No items are added.</div>
        )}

        <div>
            {cartitems.map((item) =>(
                <div key={item.id} className='cart-items-list'>
                    <img className='cart-items-image' src={item.image} alt={item.name}/>
                    {/* add a div to display image name and buttons to add and remove from cart*/}
                    <div className='cart-items-name'>{item.name}</div>
                    <div className='cart-items-function'>
                        <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                        <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                    </div>
                    {/* add a div to display item prices */}
                    <div className='cart-items-price'>
                        {item.quantity} * {item.price}
                    </div>
                </div>
            ))}
        </div>
        
        <div className='cart-items-total-price-name'>
            Total Price
            <div className='cart-items-total-price'>${totalPrice}</div>
        </div>
    </div>
  )
}

export default Cart
