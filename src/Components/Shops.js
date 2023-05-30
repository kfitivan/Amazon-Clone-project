import React from 'react'
import {Routes, Route} from "react-router-dom"
import Products from "./Products"

function Shops({productItems}) {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Products productItems={productItems}/>}>     
        </Route>
      </Routes>
    </div>
  )
}

export default Shops
