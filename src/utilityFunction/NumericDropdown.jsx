import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCartItemQuantity } from '../../redux/actions';

function NumericDropdown({ itemId, selectedNumber, onNumberChange }) {

    const dispatch = useDispatch();

    const numbers = [...Array(11).keys()];

    const handleNumberChange = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
        dispatch(updateCartItemQuantity({ itemId, newQuantity: selectedValue }));
    }

    return (
        <Form className='quantity--dropdown' style={{marginLeft:"30px"}}>
            <Form.Group controlId="numericDropdown">
                <div className="d-flex align-items-center">
                    <Form.Control
                        as="select"
                        value={selectedNumber}
                        onChange={handleNumberChange}
                        className="flex-grow-1 text-center custom-select"
                        style={{width: '70px'}} 
                    >
                        {numbers.map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                        ))}                    
                    </Form.Control>               
                </div>
            </Form.Group>
        </Form>    
    );
}

export default NumericDropdown;