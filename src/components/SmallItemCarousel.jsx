import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SmallItemCarousel({images}) {
/*     const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1800 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1800, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 576 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 2
        }
      }; */
      const imagePaths = images.map((image) => image.img);
      const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
      }
      
      console.log(images);
   /*    const customStyles = {
        track: {
          transition: 'none', // Remove the transition
          overflow: 'visible', // Set overflow to visible
        },
        item: {
          flex: '0 0 auto',
          position: 'relative',
          width: 'auto', // Set width to auto or your desired width
          marginRight: '10px', // Optional: Adjust margin between items
        },
      }; */

    return (  
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                <img style={{width:"50px", height:"50px"}} src={image} alt={`Item Image ${index + 1}`} />
                </div>
            ))}
        </Slider>

    );
}


export default SmallItemCarousel;