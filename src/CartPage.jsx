import React from 'react';

import MyNavbar from './components/MyNavbar';
import Cart from './components/Cart';
import Tabs from './components/Tabs';
import RecentlyViewed from './components/RecentlyViewed';
import Footer from './components/Footer';

import Links from './utilityFunction/Links';
import TabLinks from './utilityFunction/TabLinks';
import {navigationLinks} from './navigationLinks';
import {tabsData} from './tabsData';

function CartPage(props) {
    let navbarLinks = Links(navigationLinks);
    let tabLinks = TabLinks(tabsData);
    
    return (
        <div>
            <MyNavbar
                links={navbarLinks}
            />
            <Tabs
            tabs={tabLinks}
             />
             <Cart />
            <RecentlyViewed />
            <Footer />
            
        </div>
    );
}

export default CartPage;
