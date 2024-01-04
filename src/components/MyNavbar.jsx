import { Navbar, Nav, Button, NavbarBrand, Container, NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



function MyNavbar(props) {
  return (
    <Navbar expand="lg" className="navbar navbar-light py-3">
      <Container fluid className='navbar-container'>
        {/* <a className="navbar--brand d-flex justify-content-between align-items-center order-lg-0" href="#mainPage">
            <img className="navbar--logo"src="./public/logo.png" alt="site icon" />
            <span className="logoText text-uppercase fw-lighter ms-2">Avitas Bio</span>
        </a> */}
        <Navbar.Brand as={Link} to="/home" className="navbar--brand d-flex justify-content-between align-items-center order-lg-0">
          <img className="navbar--logo" src="/home/logo.png" alt="site icon" />
          <span className="logoText text-uppercase fw-lighter ms-2">Avitas Bio</span>
        </Navbar.Brand>

        <div className="nav-btn order-lg-2">
          <Button type="button" className="btn position-relative">
            <FontAwesomeIcon className='cart' icon={faCartShopping} />
          </Button>
        </div>

        <Navbar.Toggle aria-controls="navMenu" className="border-0" />
        <Navbar.Collapse id="navMenu" className="order-lg-1">
        <Nav className="text-center">
          {props.links}
        </Nav>
        </Navbar.Collapse>

      </Container>
      
    </Navbar>


    /* <Navbar expand="lg" className="navbar navbar-dark navbar-expand-lg py-3"

        <Navbar.Toggle aria-controls="navMenu" className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse className="collapse navbar-collapse order-lg-1" id="navMenu">
          <Nav className="navbar-nav mx-auto text-center">
            <Nav.Item className="nav-item py-2">
              <Nav.Link className="nav-link text-light" href="#header">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item py-2">
              <Nav.Link className="nav-link text-light" href="#products">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item py-2">
              <Nav.Link className="nav-link text-light" href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item py-2">
              <Nav.Link className="nav-link text-light" href="#contactUs">Contact us</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item py-2">
              <Nav.Link className="nav-link text-light" href="#blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item py-2">
              <Nav.Link className="nav-link text-light" href="#login">Login/Register</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar> */
  )
}

export default MyNavbar;
