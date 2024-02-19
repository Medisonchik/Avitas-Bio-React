import {Nav, Container} from 'react-bootstrap';

function Tabs(props){
    return(
      <Container style={{padding: "0"}} fluid={window.innerWidth <= 576}>
        <div className='grid--container'>
          <Nav className='nav--tabs'>
            {props.tabs}
          </Nav>
        </div>
        
      </Container>
    )
}
export default Tabs;
