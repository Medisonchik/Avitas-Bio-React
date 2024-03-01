import React , { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

function RadioButtons(props) {
    const [selectedOption, setSelectedOption] = useState('oneTime');
    const [months, setMonths] = useState(3);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      // Reset months to 1 whenever radio button changes
      setMonths(3);
    };
  
    const handleMonthChange = (event) => {
      setMonths(parseInt(event.target.value, 10));
    };
  
    return (
      <Form>
        <Form.Group controlId="paymentOptions">
          <Form.Check
            type="radio"
            label="1 time"
            id="oneTime"
            checked={selectedOption === 'oneTime'}
            onChange={handleOptionChange}
          />
  
          <Form.Check
            type="radio"
            label={`Every ${months} month`}
            id="monthly"
            checked={selectedOption === 'monthly'}
            onChange={handleOptionChange}
          />
          {selectedOption === 'monthly' && (
            <Form.Row>
              <Form.Label column sm={2}>
                Select Number of Months:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  value={months}
                  onChange={handleMonthChange}
                >
                  {[3, 4, 6, 9, 12].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                </Form.Control>
              </Col>
            </Form.Row>
          )}
        </Form.Group>
      </Form>
    );
  };

export default RadioButtons;