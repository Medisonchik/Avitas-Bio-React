import {Nav, Container} from 'react-bootstrap' 


function Tabs(props){
    return(
      <Container fluid={window.innerWidth <= 576}>
        <Nav className='nav--tabs'>
          {props.tabs}
        </Nav>
      </Container>
    )
}
export default Tabs

/* <!-- Breadcrambs -->
<div class="container breadcrumbsHolder">
  <div class="row">
    <ul class="breadcrumbsList ">
      <li><a href="#">Cold, Flu & Immune</a></li>
      <li><a href="#">Digestion & Detox</a></li>
      <li><a href="#">Learning & Focus</a></li>
      <li><a href="#">Stress & Anxiety</a></li>
      <li><a href="#">All</a></li>
    </ul>

  </div>

</div>

<!-- Breadcrambs end -->  */