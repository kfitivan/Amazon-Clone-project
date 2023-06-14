import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Signup from './Signup';
import { AppProvider } from './AppContext';

function Shops() {
  return (
    <div>
      <AppProvider>
        <Routes>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default Shops;
