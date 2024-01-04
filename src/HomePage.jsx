import { useState } from 'react';
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
import { items } from './items';



function HomePage (){
 /*  let navbarLinks = navigationLinks.map((link) => (
    <NavLink to={link.path} key={link.name}>
      <div className='navbar--link'>{link.name}</div>
    </NavLink>
  )) */

  let navbarLinks = GenerateLinks(navigationLinks);

  let tabsLinks = TabLinks(tabsData);
/*   const [selectedItem, setSelectedItem] = useState(null);

  const handleCarouselItemClick = (item) => {
    setSelectedItem(item);
  }; */


    return(
        <>
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
        </>
        
    )

} 
export default HomePage