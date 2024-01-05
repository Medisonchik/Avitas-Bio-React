import MyNavbar from './components/MyNavbar';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import BasicItemMenu from './components/BasicItemMenu';
import Footer from './components/Footer';
import { NavLink, Nav, NavItem, Container } from 'react-bootstrap';
import { GenerateLinks, TabLinks } from './utilityFunction/generateLinks';
import { useParams } from 'react-router-dom';



import {navigationLinks} from './navigationLinks'
import {tabsData} from './tabsData'

import useCart from './utilityFunction/useCart';


function ItemPage(){
    const { cartCount } = useCart(); 
    let navbarLinks = GenerateLinks(navigationLinks);
    let tabLinks = TabLinks(tabsData);

    

    return(
        <>
        <MyNavbar
        links={navbarLinks}
        cartCount={cartCount}
         />
         <Container fluid className='search--container'>
            <SearchBar />
         </Container>        
        <Tabs
        tabs={tabLinks}
         />
         <BasicItemMenu 

         />  
        <Footer />
        </>

    )
}

export default ItemPage