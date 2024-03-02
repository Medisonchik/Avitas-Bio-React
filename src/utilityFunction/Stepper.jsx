import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { code } from '../../styling/styling';


function Stepper({ currentStep }) {
    const steps = [
        { label: 'Shipping Address', id: 1 },
        { label: 'Payment', id: 2 },
        { label: 'Order & Review', id: 3 },
      ];
    
      const getStepColor = (stepId) => {
        const borderColor = '#53644A';
        const backgroundColor =
          currentStep === stepId ? '#53644A' : currentStep > stepId ? 'white' : 'inherit';
    
        return {
          backgroundColor,
          border: `2px solid ${borderColor}`,
        };
      };
    
      return (
        <div className='stepper'>
            {steps.map((step, index) => (
                <div key={step.id} className="step">
                    <div style={{display: "flex", alignItems: "center"}}>

                        <div className={`circle ${currentStep === step.id ? 'active' : ''}`} style={getStepColor(step.id)} />
                        {index === steps.length - 1 && <FontAwesomeIcon style={{ fontSize: '25px', marginLeft: '20px' }} />}
                        {index < steps.length - 1 && <FontAwesomeIcon style={{ fontSize: '25px', marginLeft: '20px' }} icon={faChevronRight} />}
                    </div>
                    <span style={{ ...code, color: getStepColor(step.id).border }}>{step.label}</span>

                </div>
            ))}
        </div>
    );
}

export default Stepper;