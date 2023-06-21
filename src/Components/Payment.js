import React from 'react'
import "./paymentstyles.css"
import CheckoutProducts from './CheckoutProducts'
import { useAppContext } from './AppContext';
import { Link } from 'react-router-dom';

function Payment({user}) {

    const { state} = useAppContext()
    const { basket } = state;
  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
            Checkout (<Link to="/checkout">{basket?.length}items</Link >)
        </h1>
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p>{user?.email}</p>
                <p>Naguru Kla, Mbarara</p>
                <p>+256 777122972</p>
            </div>
        </div>

        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review items and delivery</h3>
            </div>
        </div>

        <div className='payment__items'>
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
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Payment Method</h3>
            </div>
            <div className='payment__details'>
                {/* stripe code goes here! including cloud functions and firebase*/}
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
