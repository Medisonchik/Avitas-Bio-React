// SmallItemCarousel.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SmallCarousel.css';


function SmallCarousel({ mainImage, smallImages }) {
    const [selectedImage, setSelectedImage] = useState(mainImage);
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    if (!Array.isArray(smallImages)) {
      smallImages = []; 
    }
  
    return (
      <div className='images--container'>
        <img className='item--image' alt="Main Image" src={selectedImage} />
        <div className='carousel--container'>
          <Slider {...settings}>
            {smallImages.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image)}>
                <img
                  className='small--image'
                  alt={`Small Image ${index + 1}`}
                  src={image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  
  export default SmallCarousel;
  