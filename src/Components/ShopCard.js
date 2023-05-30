import React from 'react'
import "./Shopcardstyles.css"
import ShopcardData from "./ShopcardData"
import Img1 from "../assets/headset.PNG"
import Img2 from "../assets/keyboard.PNG"
import Img3 from "../assets/mice.PNG"
import Img4 from "../assets/chair.PNG"
import Img5 from "../assets/tablet.PNG"
import Img6 from "../assets/jeans.PNG"
import Img7 from "../assets/sweater.PNG"
import Img8 from "../assets/nights.PNG"
import Img9 from "../assets/shoes.PNG"


function ShopCard() {

  return (
    <>
    <div className="shop">
        <h1>Gaming accessories</h1>
            <ShopcardData
                image1={Img1}
                title1="Headsets"
                image2={Img2}
                title2="Keyboards"
                image3={Img3}
                title3="Computer mice"
                image4={Img4}
                title4="Flexible Chairs"
            /> 
        <a href='/'>See all</a>
    </div>

    <div className='shop'>
        <h1>Top Deal</h1>
            <ShopcardData
                image5={Img5}
                url="/"
                heading="Top deal"
                title="Samsung Tablets"
            /> 
        <a href='/'>See all</a>
    </div>

    <div className='shop'>
        <h1>Shop deals in Fashion</h1>
            <ShopcardData
                image6={Img6}
                title6="Jeans under $50"
                image7={Img7}
                title7="Tops under $25"
                image8={Img8}
                title8="Dresses under $30"
                image9={Img9}
                title9="Shoes under $50"
            /> 
        <a href='/'>See all</a>
        </div>
    </>
  )
}

export default ShopCard
