import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Col, Row, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import AddToCartBtn from '../utilityFunction/AddToCartBtn';
import AddToWishListBtn from '../utilityFunction/AddToWishListBtn';

import { textStyling, colors, price, code} from '../../styling/styling';
import NumericDropdown from '../utilityFunction/NumericDropdown';
import RadioButtons from '../utilityFunction/RadioButtons';
import Check from './Check';
import CheckoutPage from '../CheckoutPage';

import { updateCartItemQuantity } from '../../redux/actions';
import { removeFromCart } from '../../redux/actions';

function Cart() {
  const dispatch  = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/checkout', { state: { cartItems, total } });
  };

  const handleHomeBtnClick = () => {
    navigate('/');
  }

  const handleQuantityChange = (index, newQuantity) => {
    dispatch(updateCartItemQuantity({index, newQuantity }));
  }

  

  

    const emptyCart = cartItems.length === 0 ? (
        <Container className='cart--container'>
          <h1 className='cart--title'>Cart is empty</h1>
          <Row className='cart'>  
            <h2 style={textStyling}>Your cart is empty!</h2>
            <span style={{...textStyling, marginBottom: "20px"}}>You can click this button to start your shopping</span> 
            <button onClick={handleHomeBtnClick} className='greenBtn' alt="home-btn">Click me</button>     
          </Row>
        </Container>
      ) : (
        <Container className='cart--container'>
          <h1 className='cart--title'>Cart</h1>
          <Row className='cart'>
            <Col className='cart--content' lg={7} sm={12}>
              
              {cartItems.map((item, index) => (
                <div className="cart--item" key={index}>
                  <div className="cart-item-image">
                    <img 
                      src={item.img}
                      alt={item.name}
                      className='cart--image'
                    />
                  </div>
                  <div className="cart-item-details">
                    <span style={{ fontSize: textStyling.fontSize, color: colors.titleColor }}>{item.name}</span><br />
                    <span>{item.subText}</span><br />
                    <span style={code}>{item.code}</span><br/>
                    <span style={price}>${(item.price * item.quantity).toFixed(2)}</span><br />
                  
                    <div className="cart-item-actions">
                      <span> Quantity </span>
                      {/* numberic dropdown */}
                      <NumericDropdown 
                      itemId={item.id}

                        selectedNumber={item.quantity}
                        onNumberChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}                      
                      />   
                    </div>
                    <RadioButtons />
                    <div style={{ textAlign: "center", margin: "20px 0" }}>
                      <hr style={{ borderTop: "2px solid black", display: "inline-block", width: "100%" }} />
                      <span onClick={() => dispatch(removeFromCart(item.id))}className='remove--btn' style={{ display: "inline-block", padding: "0 10px" }}>Remove this item</span>
                      <hr style={{ borderTop: "2px solid black", display: "inline-block", width: "100%"}} />
                    </div>
                  </div> 
                </div>
              ))}             
            </Col>

            <Col className='cart--buttons' lg={5} sm={12}>
              <button onClick={handleBtnClick} className='checkout--btn greenBtn'>Proceed to Checkout</button>
              <AddToWishListBtn />
              <div>
              <Form.Group controlId="shippingEstimate" style={{ display: "flex", alignItems: "center", flexDirection:"column", marginTop:"20px" }}>
                <Form.Label style={{ marginRight: "10px" }}>Estimate Shipping and Taxes</Form.Label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Control type="text" placeholder="Enter Zip Code" style={{ marginRight: "20px", textAlign: "center" }} />
                  <Form.Text>
                    <span style={{ textDecoration: "underline", color: "#383838", fontSize: "small" }}>Apply</span>
                  </Form.Text>
                </div>
            </Form.Group>

              <Form>
                <Form.Group controlId="promoCode" style={{marginTop: "20px", display: "flex", flexDirection: "column",
               alignItems: "center"}}>
                  <Form.Label>Have Promo/Source Code?</Form.Label>
                  <Form.Control type="text" placeholder="Enter Promo Code" style={{textAlign: "center"}} />
                </Form.Group>
              </Form>
              </div>              
            </Col>
          </Row>

          <Row className='sum--container'>
            <hr />
            <Col style={{display: "flex", justifyContent:"center"}} lg={7} sm={12}>
              <span style={{fontSize: "20px"}}>Item total: <span style={{fontWeight: "bold", fontSize: "25px"}}>${total.toFixed(2)}</span> </span>
            </Col>
            <Col style={{display: "flex", justifyContent: "center"}}lg={5} sm={12}>
              <Check
              sum = {total}              
              />
            </Col>
          </Row>
        </Container>
      );

    
    return emptyCart;
}

export default Cart;