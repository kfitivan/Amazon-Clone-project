import React from 'react';
import "./Productsstyles.css";
import { useStateValue } from '../Components/AppContext';
import data from '../Components/Data';

const Products = () => {
  const [state, dispatch] = useStateValue();

  const addToBasket = (id, title, image, price, heading) => {
    // Dispatch the item into the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        heading: heading
      }
    });
  };

  return (
    <div className='products'>
      {Array.isArray(data.productItems) &&
        data.productItems.map((productItem) => (
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
                onClick={() =>
                  addToBasket(
                    productItem.id,
                    productItem.title,
                    productItem.image,
                    productItem.price,
                    productItem.heading
                  )
                }
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
