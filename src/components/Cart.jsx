import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import AddToCartBtn from '../utilityFunction/AddToCartBtn';
import AddToWishListBtn from '../utilityFunction/AddToWishListBtn';

function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems);
    console.log("cart" + cartItems);
    
    return (
        <Container className='cart--container'>
            <h1 className='cart--title'>Cart</h1>
            <Row className='cart'>
                <Col className='cart--content' lg={7} sm={12}>
                    {cartItems.map((item,index) => (
                        <div key={index}>
                            <img 
                                src={item.img}
                                alt={item.name}
                            />
                            <p>{item.name}</p>
                            <span>${item.price.toFixed(2)}</span>
                        </div>
                    ))}
                </Col>
                <Col className='cart--buttons' lg={5} sm={12}>
                    <AddToCartBtn />
                    <AddToWishListBtn />
                </Col>
            </Row>
            <img alt="imageName" />
     
        </Container>
    );
}

export default Cart;