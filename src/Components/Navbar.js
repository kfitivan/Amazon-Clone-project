import React from 'react'
import "./Navbarstyles.css"
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="navbar-elements">
        <ul className='item-listing'>
            <a href='/'>
                <li className='menu-icon'><MenuIcon/>All</li>
            </a>
            <a href='/'>
                <li>Today's Deals</li>
            </a>
            <a href='/'>
                <li>Customer Service</li>
            </a>
            <a href='/'>
                <li>Registry</li>
            </a>
            <a href='/'>
                <li>Gift Cards</li>
            </a>
            <a href='/'>
                <li>Sell</li>
            </a>
            <a href='/'>
                <li className='shop-deals'>Shop greater deals now</li>
            </a>
        </ul>
      </nav>
  )
}

export default Navbar
