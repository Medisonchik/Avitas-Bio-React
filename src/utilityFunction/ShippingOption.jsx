import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { greyBtn, code } from '../../styling/styling';

function ShippingOption({deliveryTime, shippingType, price, onSelect}) {
    return (
        <Row>
            <Col className='shipping--method' lg={6} sm={6}>
            <div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                <span>{deliveryTime}</span>
                <span style={code}>{shippingType}</span>
                </div>
            </div>
            </Col>
            <Col className='shipping--price' style={{ display: "flex", alignItems: "center" }} lg={6} sm={6}>
            <div>
                <span>{price}</span>
                <Button style={{...greyBtn, marginBottom: "10px", marginTop: "10px" }} onClick={onSelect}>Select</Button>
            </div>
            </Col>
        </Row>
    );
}

export default ShippingOption;