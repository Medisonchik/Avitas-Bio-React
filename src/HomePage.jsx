import { useEffect, useState } from 'react';
import MyNavbar from './components/MyNavbar'
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import Specials from './components/Specials';
import BestSellers from './components/BestSellers';
import RecentlyViewed from './components/RecentlyViewed';
import Footer from './components/Footer';
import { NavLink, Nav, NavItem } from 'react-bootstrap';
import { GenerateLinks, TabLinks } from './utilityFunction/generateLinks';
import {navigationLinks} from './navigationLinks'
import {tabsData} from './tabsData'

function HomePage (){
 /*  let navbarLinks = navigationLinks.map((link) => (
    <NavLink to={link.path} key={link.name}>
      <div className='navbar--link'>{link.name}</div>
    </NavLink>
  )) */
  //const { cartCount } = useCart();  

 /*  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    console.log('Updated cart count', cartCount);
  } */

  
  //console.log("home page" + cartCount);

  let navbarLinks = GenerateLinks(navigationLinks);

  let tabsLinks = TabLinks(tabsData);

    return(
        <div>
          <MyNavbar
          links={navbarLinks}
          />
          <Hero />
          <Tabs
          tabs={tabsLinks}        
          />
          <Specials />
          <BestSellers />
          <RecentlyViewed />
          <Footer />
        </div>
        
    )

} 
export default HomePage