import { Navbar, Nav, Button, NavbarBrand, Container, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircle } from '@fortawesome/free-solid-svg-icons';
import AddToCartBtn from '../utilityFunction/AddToCartBtn';

import useCart from '../utilityFunction/useCart';
import { useSelector } from 'react-redux';



function MyNavbar({ links }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/home/cart');
  };
  const cartCount = useSelector((state) => state.cart.cartCount);
  
  
  console.log('Navbar Cart Count:', cartCount);
  return (
    <Navbar expand="lg" className="navbar navbar-light py-3">
      <Container fluid className='navbar-container'>
        <Navbar.Brand as={Link} to="/home" className="navbar--brand d-flex justify-content-between align-items-center order-lg-0">
          <img className="navbar--logo" src="/home/logo.png" alt="site icon" />
          <span className="logoText text-uppercase fw-lighter ms-2">Avitas Bio</span>
        </Navbar.Brand>

        <div className="nav-btn order-lg-2">
          <Button type="button" className="btn position-relative" onClick={handleCartClick}>
            <FontAwesomeIcon className='cart' icon={faCartShopping} />
            {/* <FontAwesomeIcon className='circle' icon={faCircle} />   */}
            {cartCount > 0 && (
              <div className='circle'>
                <span className='count'>
                  {cartCount}
                </span>   
              </div>
              
            )}  
          </Button>       
        </div>

        <Navbar.Toggle aria-controls="navMenu" className="border-0" />
        <Navbar.Collapse id="navMenu" className="order-lg-1">
        <Nav className="text-center">
          {links}
        </Nav>
        </Navbar.Collapse>

      </Container>
      
    </Navbar>
  )
}

export default MyNavbar;
