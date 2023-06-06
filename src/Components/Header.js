import React from 'react'
import "./Headerstyles.css"
import logo from "../assets/amazonelogo.PNG"
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import Signup from './Signup';

function Header(props, cartitems) {
  return (
    <div className='header'>
      <a href='/'>
        <img className='header__logo' src={logo} alt="imglogo"/>
      </a>
      <div className='header_location'>
        <a href="/">
            <span className='header__option1'>Deliver to</span>
            <span className='header__option2'>Uganda</span> 
        </a>
      </div>
      <div className='header__search'>
        <input placeholder='Search Amazon'/>
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className='header-nav'>
        <div className='header__options'>
            <Link to="/Signup">
           <span className='header__option1'>Hello,sign in</span> 
           </Link>
           <span className='header__option2'>Accounts & Lists</span>
        </div>
        <div className='header__options'>
            <a href='/'>
            <span className='header__option1'>Returns </span>
            <span className='header__option2'>& Orders</span>  
            </a>  
        </div>
        <div className='header__options'>
            <Link to='/Cart'>
            <AddShoppingCartIcon className='shopping_icon'/>
            {/* create a span with a function to enable us count items in the cart */}
            {cartitems.length === 0 ? "" : cartitems.length}
            <span className='header__option2'>Cart</span> 
            </Link>
        </div>
      </div>

    </div>
  )
}

export default Header
