import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomeSlider from './Components/HomeSlider';
import Navbar from './Components/Navbar';
import data from './Components/Data';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import { auth } from './firebase';
import { loadStripe} from "@stripe/stripe-js"
import { Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51NLjCFLrB2rNVQQDM20E8wXe4VLhueIESLW8i1k7UMlyvSTpI4otJHiBchTq04bPEDjILtayWGtOJdLSmnT7nYjx00eJ7etQLX')

function App() {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State variable for controlling popup visibility
  const { productItems } = data;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        setUser(authUser);
        handleLogin(); // Call handleLogin when the user logs in
      } else {
        // The user is logged out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogin = () => {
    setShowPopup(true); // Show the popup
    setTimeout(() => {
      setShowPopup(false); // Hide the popup after 5 seconds
    }, 5000);
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setUser(null); // Update the user state immediately
      })
      .catch(error => {
        console.log('Error occurred during sign out:', error);
      });
  };

  return (
    <div className="App">
      <Router>
        <Header user={user} onLogout={handleLogout} />
        <Navbar />
        <HomeSlider />
        {showPopup && (
          <div className="popup">
            <p>Successfully!</p>
          </div>
        )}
        <Routes>
          <Route path="/payment" element={<Elements stripe={promise}><Payment user={user}/></Elements>} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/checkout" element={<Checkout user={user} />} />
          <Route path="/" element={<Products productItems={productItems} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
