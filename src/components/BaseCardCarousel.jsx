import { Link, useNavigate, useParams } from 'react-router-dom';
import {Card, Row, Col, Container} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating';

import AddToCartBtn from '../utilityFunction/AddToCartBtn';
import { useState } from 'react';


function BaseCardCarousel({ items }) {
  const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1400 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 1400, min: 900 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 900, min: 576 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1
      }
    };

    const [showMessage, setShowMessage] = useState(false);

    const handleShowMessage = () => {
      setShowMessage(true);
    }

  const itemsEl = items.map((item, index) => {
    return (
      <div className='card' key={index}>
        <Link to={`/item/${item.firebaseId}`} >        
        <img
          src={item.img}
          alt={item.name}
          className={`item--image ${item.type === 'cream' ? 'cream-image' : ''}`}
          style={{ width: item.type === 'cream' ? '150px' : '100%' }}
        />
      </Link>
      <h2 className='item--name'>{item.name}</h2>
      <div className='item--price'>${item.price.toFixed(2)}</div>
      <AddToCartBtn
        firebaseId={item.firebaseId}
        /* cartCount={cartCount}  */   
      />
      <p className='item--description'>{item.subText}</p>
      <div className='star--container'>
        {Array.from({ length: 5 }, (_, i) => (
          <FontAwesomeIcon className='item--star' key={i} icon={faStar} />
        ))}
        <span>( {item.rating} )</span>
      </div>
    </div>
    );
  });
      
    return (
        <Container>
            <Carousel
            responsive={responsive}
            containerClass="carousel--container"  
            infinite={true}          
            >
            {itemsEl}
            </Carousel>
        </Container>
       
    );
  }
  
export default BaseCardCarousel;