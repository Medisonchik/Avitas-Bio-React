import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { whiteBtn, colors, code } from '../../styling/styling';

function Check(props) {
    return (
        <Col className='check--container' lg={5} sm={12}>
            <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px", paddingLeft:"8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", alignItems: "center" }}>
                    <h3 style={{color:colors.titleColor, marginTop:"10px"}}>Subtotal</h3>
                    <span style={{fontSize: "20px"}}>${props.sum.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span>Handling</span>
                    <span style={{...code, textAlign: "center"}}>Enter Zip Code Above</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span>Shipping</span>
                    <span style={{...code, textAlign: "center"}}>Enter Zip Code Above</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                    <span>Taxes</span>
                    <span style={{...code, textAlign: "center"}}>Enter Zip Code Above</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span>Promotion Code</span>
                </div>
            </div>
            
            {/* Total */}
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", paddingRight: "8px", paddingLeft: "8px" }}>
                <h2 style={{color: colors.titleColor}}>Total</h2>
                <span style={{fontSize: "25px", fontWeight: "bold"}}>${props.sum.toFixed(2)}</span>
            </div>
            <hr style={{borderColor:colors.borderColor}} />
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "20px"}}>
                <button className='greenBtn'>Proceed to Checkout</button>
                <hr />
                <div style={{ textAlign: "center" }}>
                    <span>or</span>
                </div>
                <hr />
                <button style={{...whiteBtn, marginBottom: "20px"}}>PayPal Checkout</button>
            </div>
            
        </Col>

    );
}

export default Check;