import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, Col } from 'react-bootstrap';

function NumericDropdown(props) {
    const [selectedNumber, setSelectedNumber] = useState(1);

    const numbers = [];
    for(let i = 0; i <= 10; i++) {
        numbers.push(i);
    }

    const handleNumberChange = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
        setSelectedNumber(selectedValue);
    }
    /* const handleNumberChange = (number) => {
        setSelectedNumber(number);
      }; */

    return (
        <Form className='quantity--dropdown' style={{marginLeft:"30px"}}>
            <Form.Group controlId="numericDropdown">
                <div className="d-flex align-items-center">
                    <Form.Control
                        as="select"
                        value={selectedNumber}
                        onChange={handleNumberChange}
                        className="flex-grow-1 text-center custom-select"
                        style={{width: '100px'}} 
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