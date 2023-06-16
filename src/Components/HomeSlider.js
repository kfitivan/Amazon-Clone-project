import React, { useState, useEffect } from 'react';
import './Homestyles.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function HomeSlider() {
  const sliderImages = [
    {
      url: require('../assets/Capture1.PNG'),
    },
    {
      url: require('../assets/cloth2.jpg'),
    },
    {
      url: require('../assets/phone.jpg'),
    },
    {
      url: require('../assets/cloth1.jpg'),
    },
    {
      url: require('../assets/laptop.jpg'),
    },
  ];

  const [activeImageNum, setActiveImageNum] = useState(0);

  const length = sliderImages.length;

  useEffect(() => {
    // Auto slide interval
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeImageNum]);

  const nextSlide = () => {
    setActiveImageNum((prevNum) => (prevNum === 0 ? length - 1 : prevNum - 1));
  };

  const prevSlide = () => {
    setActiveImageNum((prevNum) => (prevNum === length - 1 ? 0 : prevNum + 1));
  };

  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="image-slider">
        <div className="left">
          <ArrowBackIosIcon onClick={prevSlide} />
        </div>
        <div className="right">
          <ArrowForwardIosIcon onClick={nextSlide} />
        </div>
        {sliderImages.map((currentSlide, index) => {
          return (
            <div className={index === activeImageNum ? 'currentSlide active' : 'currentSlide'} key={index}>
              {index === activeImageNum && <img src={currentSlide.url} className="image" alt="sliderimages" />}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default HomeSlider;
