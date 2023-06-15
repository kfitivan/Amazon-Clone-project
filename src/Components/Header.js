import React, { useContext } from 'react';
import "./Headerstyles.css";
import logo from "../assets/amazonelogo.PNG";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';

function Header() {
  const { state } = useContext(AppContext); // Access the state directly from context
  const { basket } = state; // Extract the basket from the state

  return (
    <div className='header'>
      <Link to='/Products'>
        <img className='header__logo' src={logo} alt="imglogo"/>
      </Link>
      <div className='header_location'>
        <Link to="/Products">
            <span className='header__option1'>Deliver to</span>
            <span className='header__option2'>Uganda</span> 
        </Link>
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
