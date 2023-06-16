import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomeSlider from './Components/HomeSlider';
import Navbar from './Components/Navbar';
import data from './Components/Data';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Checkout from './Components/Checkout';

function App() {
  const { productItems } = data;

  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <HomeSlider />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Products" element={<Products productItems={productItems} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
