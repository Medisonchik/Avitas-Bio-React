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


import useCart from './utilityFunction/useCart';

function HomePage (){
 /*  let navbarLinks = navigationLinks.map((link) => (
    <NavLink to={link.path} key={link.name}>
      <div className='navbar--link'>{link.name}</div>
    </NavLink>
  )) */
  //const { cartCount } = useCart();  
  const { cartCount } = useCart();
  const [renderKey, setRenderKey] = useState(0);

  const [number, setNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNumber(prevNumber => prevNumber + 1);
    }, 100);

    return () => {
      clearTimeout(timeoutId); // Clear the timeout on component unmount
    };
  }, [cartCount]); // Ensure the effect runs whenever 'number' changes

  console.log("render" + number);
  

  useEffect(() => {
    setRenderKey(prevKey => prevKey + 1);
  }, [cartCount]);

  console.log("home page" + cartCount);
/*   const [localCartCount, setLocalCartCount] = useState(0);
  console.log("home page:" + localCartCount);

  useEffect(() => {
    setLocalCartCount(cartCount);
  }, [cartCount]); */


  let navbarLinks = GenerateLinks(navigationLinks);

  let tabsLinks = TabLinks(tabsData);

    return(
        <div key={renderKey}>
        <MyNavbar
        links={navbarLinks}
        cartCount={cartCount}
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