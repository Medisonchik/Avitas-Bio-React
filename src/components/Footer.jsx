import { Container, Button, Form, Row, Col } from "react-bootstrap"


function Footer(){
    return( 
        <Container fluid className="footer">
            <Row className="footer--row align-items-center">
                <Col lg={3}className="footer--h">   
                    <h2>Up to 40% Off! </h2>
                </Col>
                <Col lg={3}className="footer--p"> 
                    <p>Sign up for emails.<br /> 
                    Get subscription-only savings & fantastic <br /> 
                    offers (first time subscribers only)</p>
                </Col>
                <Col lg={6}className="footer-form-section">
                    <Form.Control className="footer--form" type="text" placeholder="Email adress" />
                    <Button className="footer--btn" variant="secondary">Sign up!</Button>
                </Col>                        
            </Row>            
        </Container>

    )
}
export default Footer