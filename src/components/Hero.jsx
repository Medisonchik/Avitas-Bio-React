import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"
import SearchBar from "./SearchBar"

function Hero(){
    return(
        <section id="hero" className="py-3">
            <Container fluid className="hero--container">
                <SearchBar />
                <Row className="hero--text d-flex align-items-center justify-content-center text-center">
                    <Col className="hero--title">
                        <span>REJUVENATION & RECOVERY</span><br />
                        <span className="hero--subtitle">FROM MONGOLIAN MOUNTAINS</span>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}
export default Hero;
