/* import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';


function SmallItemCarousel({mainImage, smallImages}) {
    const [selectedImage, setSelectedImage] = useState(mainImage);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    }
                     
    return (  
        <div className='images--container'>
            <img className='item--image' alt="Main Image" src={selectedImage} />
            <div className='img--carousel'>
                {smallImages.map((image, index) => (
                    <img
                        key={index}
                        className='small--image'
                        alt={`Small Image ${index + 1}`}
                        src={image}
                        onClick={() => handleImageClick(image)}
                     />
                ))}
            </div>
        </div>

    ); 
 } 
  
  export default SmallItemCarousel; */
  