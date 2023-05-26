import React from 'react'
import ShopCard from "./ShopCard"
import "./Shopcardstyles.css"

function ShopcardData(props) {
  return (
    <>
    <div className='s-card'>
        <a href="/">
        <div className='shop-card'>
            <img src={props.image1} alt="images"/>
            <img src={props.image2} alt="images"/>
        </div>
        <div className='heading'>
            <h4>{props.title1}</h4>
            <h4>{props.title2}</h4>
        </div>
        <div className='shop-card'>
            <img src={props.image3} alt="images"/>
            <img src={props.image4} alt="images"/>
        </div>
        <div className='heading'>
            <h4>{props.title3}</h4>
            <h4>{props.title4}</h4>
        </div>
        </a>
    </div>

    <div className='s-card'>
        <a href="/">
        <div className='shop-card'>
            <img src={props.image5} alt="images"/>
        </div>
        <div className='btn-class'>
            <button className='btn'>Up to 37% off</button>
            <h4>{props.heading}</h4>
        </div>
        <div className='heading'>
            <h4>{props.title}</h4>
        </div>
        </a>
    </div>

    <div className='s-card'>
        <a href="/">
        <div className='shop-card'>
            <img src={props.image6} alt="images"/>
            <img src={props.image7} alt="images"/>
        </div>
        <div className='heading'>
            <h4>{props.title6}</h4>
            <h4>{props.title7}</h4>
        </div>
        <div className='shop-card'>
            <img src={props.image8} alt="images"/>
            <img src={props.image9} alt="images"/>
        </div>
        <div className='heading'>
            <h4>{props.title8}</h4>
            <h4>{props.title9}</h4>
        </div>
        </a>
    </div>
    </>
  )
}

export default ShopcardData
