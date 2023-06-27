import React, { useEffect, useState } from 'react';
import './paymentstyles.css';
import CurrencyFormat from 'react-currency-format';
import CheckoutProducts from './CheckoutProducts';
import { useAppContext, getBasketTotal } from './AppContext'; // Import getBasketTotal
import { Link, useNavigate } from 'react-router-dom';
import axios from './axios';
import { db }  from '../firebase';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment({ user }) {
  const { state } = useAppContext();
  const { basket } = state;
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
  
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }).then(({ paymentIntent, error }) => {
      if (error) {
        setError(`Payment failed: ${error.message}`);
        setProcessing(false);
      } else {
        db.collection("user")
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          });
  
        setSucceeded(true);
        setError(null);
        setProcessing(false);
  
        dispatchEvent({
          type: "EMPTY_BASKET"
        });
  
        navigate('/orders');
      }
    });
  };  

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
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
          {basket.map((item) => (
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={basket.reduce(
                    (amount, item) => item.price + amount,
                    0
                  )}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>processing</p> :
                    'Buy Now'}</span> 
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
