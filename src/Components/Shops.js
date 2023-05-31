import React from 'react'
import {Routes, Route} from "react-router-dom"
import Products from "./Products"
import Signup from './Signup'
import Cart from './Cart'

function Shops({productItems, cartitems, handleAddProduct, handleRemoveProduct, handleCartClearance}) {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Products productItems={productItems} 
        handleAddProduct={handleAddProduct}/>}>     
        </Route>
        <Route exact path='./Front/Signup' element={<Signup/>}>     
        </Route>
        <Route exact path='./Front/Cart' element={<Cart cartitems={cartitems} 
        handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} 
        handleCartClearance={handleCartClearance}/>}>     
        </Route>
      </Routes>
    </div>
  )
}

export default Shops
