import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';

import { colors, code, greyBtn } from '../../styling/styling';
import ShippingOption from '../utilityFunction/ShippingOption';
import { useLocation } from 'react-router-dom';
import Stepper from '../utilityFunction/Stepper';

import { setCartCount } from '../../redux/actions';

import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/actions';

function StepperCheckout({ items, total }) {
    const [currentStep, setCurrentStep] = useState(1);

    const dispatch = useDispatch();

    const handleContinueToPayment = () => {
        setCurrentStep(2);
    };

    const handleReviewYourOrder = () => {
        setCurrentStep(3);
    };

    const handlePlaceOrder = () => {
        setCurrentStep(4);
        dispatch(resetCart());
    }

    const [formData, setFormData] = useState({
        name: "",
        address1: "",
        address2: "",
        state: "",
        zip: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const{ id,value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);

    const handleSelect = (method) => {
        setSelectedShippingMethod(method);
    };

    const [showForm, setShowForm] = useState(false);
    
    const onCreditCardBtnClick = () => {
        setShowForm(!showForm);
    }

      const itemElements = items.map((item, index) => (
        <div className='stepper--cart' key={index}>
            <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                <span style={{paddingTop: "20px", fontSize: "20px", color: colors.titleColor}}>
                    {`${items.length === 1 ? `${1} item in cart` : `${items.length} items in cart`}`}
                </span>
                <h3 style={{paddingTop:"20px", fontWeight: "bold"}}>{item.name}</h3>

            </div>            
            <div style={{display: "flex"}}>
                <img 
                    src={item.img} 
                    alt={item.name} 
                />
                <div style={{display: "flex", flexDirection: "column", marginLeft: "20px", justifyContent: "center"}}>
                    <span style={{fontSize: "20px"}}>Qty: {items.length}</span>
                    <span style={{color: "#383838", fontWeight: "bold", fontSize: "20px"}}>${item.price.toFixed(2)}</span>    
                </div>
            </div>
            <hr style={{border:"1px solid #53644A", opacity:"100%"}} />
                
        </div>
      ))
      
    const renderContent = () => {
        switch(currentStep) {
            case 1:
                return (
                    <section style={{}}>
                        <h2 style={{color: colors.greyColor, marginBottom:"10px"}}>Shipping adress</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Enter your name" onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control placeholder="Enter your address" onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose..." onChange={handleInputChange}>
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3"controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control placeholder='Enter your Zip code' onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" onChange={handleInputChange} />
                            </Form.Group>
                        </Form>
                        <hr style={{width: "100%", border: "2px solid #53644A", opacity: "100%"}} />
                        <h2>Shipping Method</h2>
                        <ShippingOption 
                            deliveryTime="Delivered in 4 days"
                            shippingType="Economy"
                            price="Free!"
                            onSelect={() => handleSelect('Economy')}
                        />
                        <ShippingOption 
                            deliveryTime="Delivered in 2 days"
                            shippingType="Premium"
                            price="$3.99"
                            onSelect={() => handleSelect('Premium')}
                        />
                        <ShippingOption 
                            deliveryTime="Delivered Next Day"
                            shippingType="Next Business Day"
                            price="$6.99"
                            onSelect={() => handleSelect('NextDay')}
                        />
                        <Row style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                            <button className='greenBtn' onClick={handleContinueToPayment}>Continue to payment</button>            
                        </Row> 
                    </section>                     
                );

            case 2:
                return (    
                    <section style={{marginLeft: ""}}>
                        <Row>
                            <h3>Payment</h3>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Button className='creditCard--btn' onClick={onCreditCardBtnClick}>Credit card </Button>
                                <span style={{fontWeight: "bold"}}>OR</span>
                                <Button>PayPal Checkout</Button>
                            </div>
                            {showForm && (
                                <Form>
                                    <Form.Group style={{display: "flex", alignItems: "center", height: "40px", marginTop: "20px"}} className="mb-3" controlId="formGridCardNumber">
                                        <Form.Label style={{width:"250px"}}>Credit Card Number</Form.Label>
                                        <Form.Control style={{}} placeholder="Enter your Credit Card Number" />
                                    </Form.Group>
                                    <div style={{display: "flex", justifyContent:"flex-end", alignItems: "center"}}>
                                            <DropdownButton className="dropdown--month" title="Month">
                                                {/* Month */}
                                            </DropdownButton>
                                        
                                            <DropdownButton className="dropdown--year" title="Year">
                                                    {/* Month */}
                                            </DropdownButton>
                                    
                                        <Form.Control placeholder="CVV" />
                                        
                                    </div>
                                </Form>
                            )}

                            <div style={{marginTop: "40px"}}>
                                <h3>Billing adress</h3>
                                <div style={{display:"flex"}}>
                                    <Form.Check type="radio" aria-label="radio 1" />
                                    <span style={{marginLeft: "20px"}}>Same as shipping</span>
                                </div>
                            </div>                           
                        </Row>  

                        <Row style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                            <button className='greenBtn' onClick={handleReviewYourOrder}>Review your order</button>            
                        </Row>                    
                    </section>
                );

            case 3: 
                return (
                    <section style={{}}>
                        <Row>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                                <span>Shipping address</span>
                                <p>{formData.name}</p>
                                <p>{formData.address1}</p>
                                <p>{formData.address2}, {formData.state}, {formData.zip}</p>
                                <p>{formData.email}</p>
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <span>Shipping method</span>
                                <p>{selectedShippingMethod}</p>
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <span>Payment</span>
                            </div>
                        </Row>

                        <Row style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                            <button className='greenBtn' onClick={handlePlaceOrder}>Place order</button>            
                        </Row>  
                    </section>                  
                );
            
            case 4:
                return (
                    <>
                        {/* order summary */}
                        <section style={{}}>
                            <h1 style={{color: colors.titleColor}}>Order Summary</h1>
                            <span style={{...code, textDecoration: "underscore"}}>Print receipt</span>
                            <Row>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                                    <span>Shipping address</span>
                                    <p>{formData.name}</p>
                                    <p>{formData.address1}</p>
                                    <p>{formData.address2}, {formData.state}, {formData.zip}</p>
                                    <p>{formData.email}</p>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <span>Shipping method</span>
                                    <p>{selectedShippingMethod}</p>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <span>Payment</span>
                                </div>
                            </Row>
                        </section>   
                    </>
                )
            
        }
    }

    return (
        <Container className='stepper--checkout' style={{backgroundColor: colors.containerColor}}>
            {currentStep !==4 && (
                <>
                <Row>
                    <Stepper 
                    currentStep={currentStep}                    
                    />
                </Row>
                    <Row className='title--row'>
                        <Col className='title--container' sm={12} lg={7}>
                            <h1 style={{color: colors.titleColor, fontWeight: "bold"}}>Checkout</h1>
                        </Col>
                        <Col className='cart--section' sm={12} lg={5}>
                            <span className='cart--title' style={{color: colors.titleColor, fontSize: "25px"}}>Your cart</span>
                            <span style={{...code, textDecoration: "underline"}}>Edit</span>
                        </Col>            
                    </Row> 
                </>
            )}
           
            {currentStep === 4 && (
                <Row>
                    <section style={{marginTop: "20px", textAlign: "center"}}>
                        <h1 style={{ color: colors.titleColor }}>Purchase complete</h1>
                        <h2>Thank you for your purchase!</h2>
                        <p>You will receive a detailed confirmation email to your email address {formData.email}.
                            It will include a detailed summary of your order.
                        </p>
                    </section>
                </Row>
            )}

            <Row className="form-cart-section" style={{marginTop: "20px"}}>
                
                <Col lg={7} sm={12}>
                   {renderContent()}                    
                </Col>

                <Col style={{display:"flex", justifyContent:"center", alignItems:"baseline"}} lg={5} sm={12}>
                    <section className='checkout-cart-section'>
                        {itemElements}
                        <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px", paddingLeft:"8px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", alignItems: "center" }}>
                                <h3 style={{color:colors.titleColor, marginTop:"10px"}}>Subtotal</h3>
                                <span style={{textAlign: "center", fontWeight: "bold", fontSize: "20px"}}>${total.toFixed(2)}</span>


                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                                <span>Handling</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                                <span>Shipping</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                                <span>Taxes</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                <span>Promotion Code</span>
                            </div>
                            <hr style={{border:"1px solid #53644A", opacity:"100%"}} />
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                <span>Total</span>
                            </div>

                        </div>
                    </section>
                </Col>                 
            </Row>
            
            
        </Container>
    );
}

export default StepperCheckout;