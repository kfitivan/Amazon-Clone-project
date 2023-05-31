import './App.css';
import Header from './Components/Header';
import HomeSlider from './Components/HomeSlider';
import Navbar from './Components/Navbar';
import ShopCard from './Components/ShopCard';
import data from "./Components/Data"
import Shops from "./Components/Shops";
import {BrowserRouter as Router} from "react-router-dom"
import { useState } from 'react';

function App() {
  const {productItems} = data;
  // we initialise the array to an empty array using hooks (useState)
  const [cartitems, setcartitems]= useState([]);

  // now we define handleAddProduct function for adding products in cart and check if the cart is empty or has products
  const handleAddProduct =(product) =>{
    const ProductExist = cartitems.find((item) => item.id === product.id);
    if(ProductExist){
      setcartitems(cartitems.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)); //this adds a new item to the cart if there was none
    } else{
      setcartitems([...cartitems, {...product, quantity: 1}])
    }

  }
// now we handleRemoveProduct for removing products in cart
const handleRemoveProduct =(product) =>{
  const ProductExist = cartitems.find((item) => item.id === product.id); //first check if product exist
  if(ProductExist.quantity === 1){
    setcartitems(cartitems.filter((item) => item.id !== product.id))
  }else{
    setcartitems(
      cartitems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
    )
  }

}
// now we write a function to help us clear the cart with one click
const handleCartClearance = () =>{
  setcartitems([]);
}

  return (
    <div className="App">
      <Header cartitems={cartitems} />
      <Navbar/>
      <HomeSlider />
      <Router>
      <Shops productItems={productItems} cartitems={cartitems} 
      handleAddProduct={handleAddProduct} 
      handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
      </Router>
    </div>
  );
}

export default App;
