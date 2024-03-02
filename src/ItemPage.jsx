import { NavLink, Nav, NavItem, Container } from 'react-bootstrap';

import Links from './utilityFunction/Links';
import TabLinks from './utilityFunction/TabLinks';
import MyNavbar from './components/MyNavbar';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import BasicItemMenu from './components/BasicItemMenu';
import RecentlyViewed from './components/RecentlyViewed';
import Footer from './components/Footer';
import { navigationLinks } from './navigationLinks';
import { tabsData } from './tabsData';



function ItemPage(){
    let navbarLinks = Links(navigationLinks);
    let tabLinks = TabLinks(tabsData);

    return(
        <>
        <MyNavbar
        links={navbarLinks}
         />
         <Container fluid className='search--container'>
            <SearchBar />
         </Container>        
        <Tabs
        tabs={tabLinks}
         />
         <BasicItemMenu 

         />  
         <RecentlyViewed />
        <Footer />
        </>

    )
}

export default ItemPage