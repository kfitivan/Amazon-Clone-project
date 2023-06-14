import React from 'react'
import "./Homestyles.css"
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function HomeSlider() {
  const sliderImages = [ 
    {
       url: require("../assets/Capture1.PNG")
    },
    {
       url: require("../assets/cloth2.jpg")
    },
    {
       url: require("../assets/phone.jpg")
    },
    {
      url: require("../assets/cloth1.jpg")
   },
    {
       url: require("../assets/laptop.jpg")
    },
 ];
 const [activeImageNum, setCurrent] = useState(0);
 const length = sliderImages.length;
 const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
 };
 const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
 };
 if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
 }
  return (
    <div>
      <section className = "image-slider">
            <div class = "left">
               <ArrowBackIosIcon onClick = {prevSlide} />
            </div>
            <div class="right"> 
               <ArrowForwardIosIcon onClick = {nextSlide} />
            </div>
            {sliderImages.map((currentSlide, index) => {
               return (
                  <div
                     className={index === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={index}
                  >
                     {index === activeImageNum && <img src={currentSlide.url} className="image"  alt="slinderimages"/>}
                  </div>
               );
            })}
         </section>
    </div>
  )
}

export default HomeSlider

