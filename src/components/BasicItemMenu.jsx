import { Container, Breadcrumb, Row, Col, Tabs, Tab, InputGroup, FormControl, Button } from "react-bootstrap"
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import NumericDropdown from "../utilityFunction/NumericDropdown";
import SmallCarousel from "./SmallCarousel";
import AddToCartBtn from "../utilityFunction/AddToCartBtn";
import AddToWishListBtn from "../utilityFunction/AddToWishListBtn";
import { selectItemQuantity } from "../../redux/selectors";



function BasicItemMenu() {
    const { firebaseId } = useParams();
    const [item, setItem] = useState(null);

    const selectedNumber = useSelector(state => selectItemQuantity(state, firebaseId));

    useEffect(() => {
        const fetchItemData = async () => {
            try {    
            const itemDocRef = doc(firestore, 'items', firebaseId);
            const itemDocSnap = await getDoc(itemDocRef);   

            if (itemDocSnap.exists()) {
                console.log('Item found:', itemDocSnap.data());
                setItem(itemDocSnap.data());
            } else {
                console.error('Item not found');
            }
            } catch (error) {
            console.error('Error fetching item data:', error);
            }
        }; 

        fetchItemData();
    }, [firebaseId]);

    if (!item) {
        return <div>Loading...</div>;
    }  

    const paragraphs = item.description;
    let listItems;

    if (Array.isArray(paragraphs) && paragraphs.length > 0) {
        listItems = paragraphs.map((paragraph, index) => 
            <li key={index}>{paragraph}</li>
        );
    } else {
        listItems = null;
    }



    const avaiable = 
    item.numberInStorage > 0 
        ? "In stock. Ready to ship!" 
        : `Sorry, ${item.name} is unavailable`;

    return(
        <Container className="item--container">
            <Breadcrumb className="item--breadcrumbs">
                <Breadcrumb.Item href="#home">Avitas Bio </Breadcrumb.Item>
                <Breadcrumb.Item className="item--category">
                    {!item.category  ? "Category" : item.category}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="item--active">{item.name}</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="item--row">
                <Col className="img--col" lg={5} sm={12}>
                    <SmallCarousel
                        mainImage={item.img}
                        smallImages={item.images}
                     />
                </Col>
                         
                <Col className="text--col" lg={7} sm={12}>
                    <section className="item--descriptiion--section">
                        <h1 className="item--name">{item.name}</h1>
                        <span className="item--subText">{item.subText}</span>
                        <span className="item--caution">{item.caution}</span>
                        <span className="item--code">{item.code}</span>
                        <div className='star--container'>
                            {Array.from({ length: 5 }, (_, i) => (
                            <FontAwesomeIcon className='item--star' key={i} icon={faStar} />
                            ))}
                            <span className="item--rating">( {item.rating} )</span>
                        </div>                        
                        <ul className="item--list">
                            {listItems}
                        </ul>
                        <span className="item--price">${item.price.toFixed(2)}</span>
                        <span className="item--availability">{avaiable}</span>
                        <span className="item--quantity">Quantity 
                            <NumericDropdown
                                itemId={firebaseId}
                                selectedNumber={selectedNumber}
                            />
                        </span>
                        <div className="item--buttons">
                            <AddToWishListBtn />                                                      
                            <AddToCartBtn firebaseId={item.firebaseId} />
                        </div>
                    </section>                   
                </Col>
            </Row>

            <Tabs
            defaultActiveKey="product details"
            id="fill-tab-example"
            className="mb-3 item--tabs"
            fill
            >
                <Tab eventKey="product details" title="Product Details">
                    <h2 className="title">What is {item.name} ?</h2>
                    <p className="product--details">{item.productDetails}</p>
                </Tab>
                <Tab eventKey="ingredients" title="Ingredients">
                    Tab content for Ingredients
                </Tab>
                <Tab eventKey="how to use" title="How to Use">
                    Tab content for How To Use
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    Tab content for Reviews
                </Tab>
                <Tab eventKey="QA" title="Q & A">
                    Tab content for Q & A
                </Tab>
            </Tabs>

        </Container>
    )
}
export default BasicItemMenu