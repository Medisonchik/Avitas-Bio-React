import { Link, useNavigate, useParams } from 'react-router-dom';
import {Card, Row, Col, Container} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating';

import AddToCartBtn from '../utilityFunction/AddToCartBtn';
import useCart from '../utilityFunction/useCart';


function BaseCardCarousel({ items }) {
  //const { cartCount, handleAddToCart, showCart, openCart, closeCart } = useCart();
  //const { addToCart } = useCart();

  const responsive = {
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
        items: 1
      }
    };

  const itemsEl = items.map((item, index) => {
    return (
      <div className='card' key={index}>
        <Link to={`/home/item/${item.firebaseId}`}
        /* to={{
          pathname: `/home/item/${item.firebaseId}`,
          state: { itemData: item }, // Pass the item data as state
        }} */
        onClick={()=> console.log(item)}
        
        //onClick={()=> handleItemClick(item)}
        >
        {console.log(`/home/item/${item.firebaseId}`)}
        
        <img
          src={item.img}
          alt={item.name}
          className={`product--image ${item.type === 'cream' ? 'cream-image' : ''}`}
          style={{ width: item.type === 'cream' ? '150px' : '100%' }}
        />
      </Link>
      <h2 className='product--name'>{item.name}</h2>
      <div className='product--price'>${item.price.toFixed(2)}</div>
      {/* <button className='product--button'>Add to Cart</button> */}
      <AddToCartBtn
        firebaseId={item.firebaseId}
        /* cartCount={cartCount}  */   
      />
      <p className='product--description'>{item.subText}</p>
      <div className='star--container'>
        {Array.from({ length: 5 }, (_, i) => (
          <FontAwesomeIcon className='product--star' key={i} icon={faStar} />
        ))}
        <span>{item.rating}</span>
      </div>
    </div>
    );
  });
      
    return (
        <Container>
            <Carousel
            responsive={responsive}
            containerClass="carousel--container"            
            >
            {itemsEl}
            </Carousel>
        </Container>
       
    );
  }
  
export default BaseCardCarousel;