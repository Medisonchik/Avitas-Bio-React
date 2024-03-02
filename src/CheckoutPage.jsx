import React from 'react';
import MyNavbar from './components/MyNavbar';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import StepperCheckout from './components/StepperCheckout';
import RecentlyViewed from './components/RecentlyViewed';
import Footer from './components/Footer';

import Links from './utilityFunction/Links';
import TabLinks from './utilityFunction/TabLinks';
import { navigationLinks } from './navigationLinks';
import { tabsData } from './tabsData';
import { useLocation } from 'react-router-dom';

function CheckoutPage(props) {
    const location = useLocation();
    const { cartItems, total } = location.state;
    let navbarLinks = Links(navigationLinks);
    let tabsLinks = TabLinks(tabsData);

    return (
        <div>
            <MyNavbar
            links={navbarLinks}
            />
            <Tabs
            tabs = {tabsLinks}           
            />
            <StepperCheckout
                items = {cartItems}
                total = {total}            
            />
            <RecentlyViewed />
            <Footer />
        </div>
    );
}

export default CheckoutPage;