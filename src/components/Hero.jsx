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
export default Hero

/* <!-- Header -->
<section id = "offers" class = "py-3">
  <div class = "container-fluid">
    <div class="row d-flex justify-content-flex-end">
      <div class="input-group searchBar">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" placeholder="Search"/>
        </div>
       
      </div>
    </div>

      <div class = "headerTitle row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
          <div class = "offers-content">
              <span>REJUVENATION & RECOVERY</span><br>
              <span class="mongolian">FROM MONGOLIAN MOUNTAINS</span><br>   
              
          </div>
      </div>

      <div class="row textField">
        <div class="textHolder py-2">
          <span>Not sure where to start?</span>
          <span>Try our Product Finder</span>

        </div>
        <button type="submit" class="submit-button btnStartNow">Start Now</button>
        

        
      </div>
  </div>
</section>
<!-- Header end-->
  
*/