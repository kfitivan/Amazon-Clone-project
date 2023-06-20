import React, { useContext } from 'react';
import "./Headerstyles.css";
import logo from "../assets/amazonelogo.PNG";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import { auth } from '../firebase';

function Header( {user, onLogout}) {
  const { state } = useContext(AppContext); // Access the state directly from context
  const { basket } = state; // Extract the basket from the state

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        // Handle any additional actions after signing out
      }).catch((error) => {
        // Handle any error that occurs during sign out
      });
    }
  };
  

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt="imglogo"/>
      </Link>
      <div className='header_location'>
        <Link to="/">
            <span className='header__option1'>Deliver to</span>
            <span className='header__option2'>Uganda</span> 
        </Link>
      </div>
      <div className='header__search'>
        <input placeholder='Search Amazon'/> 
        <SearchIcon className='header__searchIcon'/>
      </div>
    <div className='header-nav'>
    <div onClick={handleAuthentication} className='header__options'>
      <Link to="/Login">
      <span className='header__option1'>Create Account</span> 
      </Link>
       {user ? (
      <span className='header__option2'>Sign Out</span>
      ) : (
        <Link to={!user && '/Login'}>
        <span className="header__option2">Sign In</span>
      </Link>
   )}
  </div>

        <div className='header__options'>
            <Link to='/'>
            <span className='header__option1'>Returns </span>
            <span className='header__option2'>& Orders</span>  
            </Link>  
        </div>
        <div className='header__option1'>
            <Link to='/Checkout'>
            <AddShoppingCartIcon className='shopping_icon'/>
            <span className='basket_count'>{basket?.length}</span>
            <span className='header__option1'>Cart</span> 
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
