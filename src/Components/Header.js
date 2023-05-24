import React from 'react'
import "./Headerstyles.css"
import logo from "../assets/amazonelogo.PNG"
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header(props) {
  return (
    <div className='header'>
      <img className='header__logo' src={logo} alt="imglogo"/>
      <div className='header_location'>
        <a href="/">
            <span className='header__option1'>Deliver to</span>
            <span className='header__option2'>Uganda</span> 
        </a>
      </div>
      <div className='header__search'>
        <input placeholder='search'/>
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className='header-nav'>
        <div className='header__options'>
            <a href='/'>
           <span className='header__option1'>Hello,sign in</span>
           <span className='header__option2'>Accounts & Lists</span> 
           </a>
        </div>
        <div className='header__options'>
            <a href='/'>
            <span className='header__option1'>Returns </span>
            <span className='header__option2'>& Orders</span>  
            </a>  
        </div>
        <div className='header__options'>
            <a href='/'>
            <AddShoppingCartIcon className='shopping_icon'/>
            <span className='header__option2'>Cart</span> 
            </a>
        </div>
      </div>

    </div>
  )
}

export default Header
