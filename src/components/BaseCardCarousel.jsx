import { Link, useNavigate, useParams } from 'react-router-dom';
import {Card, Row, Col, Container} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating';


function BaseCardCarousel({items}) {
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
     /*  const history = useNavigate();
      const handleItemClick = (item) => {
        console.log('link clicked for itme:', item);
        const itemId = String(item.firebaseId);
        history(`/item/${item.firebaseId}`);

      }
 */


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
          <div className='product--price'>{item.price}</div>
          <button className='product--button'>Add to Cart</button>
          <p className='product--description'>{item.subText}</p>
          <div className='star--container'>
            {Array.from({ length: 5 }, (_, i) => (
              <FontAwesomeIcon className='product--star' key={i} icon={faStar} />
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
            >
            {itemsEl}
            </Carousel>
        </Container>
       
    );
  }
  

/* function BaseCardCarousel(){
    return(
        <Carousel>
            {items.map(item => {
                return(
                    <Carousel.Item key={item.id}>
                        <Row xs={1} md={4} className='cards'>                            
                            <Col>
                                <Card>
                                    <Card.Img variant='top' src={item.img} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col> 
                        </Row>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
} */

export default BaseCardCarousel;