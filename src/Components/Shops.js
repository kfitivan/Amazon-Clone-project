import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Signup from './Signup';
import { AppProvider } from '../Components/AppContext';

function Shops({ productItems }) {
  return (
      <AppProvider>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/products" element={<Products productItems={productItems} />} />
        </Routes>
      </AppProvider>
  );
}

export default Shops;
