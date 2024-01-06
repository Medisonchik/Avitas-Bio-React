import React from 'react';
import { firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


import MyNavbar from './components/MyNavbar';
import Cart from './components/Cart';
import Tabs from './components/Tabs';
import RecentlyViewed from './components/RecentlyViewed';
import Footer from './components/Footer';

import { GenerateLinks, TabLinks } from './utilityFunction/generateLinks';
import {navigationLinks} from './navigationLinks';
import {tabsData} from './tabsData'

import useCart from './utilityFunction/useCart';


function CartPage(props) {
    let navbarLinks = GenerateLinks(navigationLinks);
    let tabLinks = TabLinks(tabsData);
    const { cartCount, addToCart, cartItems} = useCart();
    
    return (
        <div>
            <MyNavbar
                links={navbarLinks}
            />
            <Tabs
            tabs={tabLinks}
             />
             <Cart
                //cartItems={cartItems}
              />
            <RecentlyViewed />
            <Footer />
            
        </div>
    );
}

export default CartPage;

  /*  const { firebaseId } = useParams();
   

    const handleAddToCart = async () => {
        try {
            const itemDocRef = doc(firestore, 'items', firebaseId);
            const itemDocSnap = await getDoc(itemDocRef);
            if(itemDocSnap.exists()) {
                const itemData = itemDocSnap.data();

                const formattedItem = fetchItemData(itemData);

                addToCart(formattedItem);
            } else {
                console.error('Item not found');
            }
        } catch(error) {
            console.error('error fetching item data:', error);
        }
    };

    const fetchItemData = (itemData) => {
        return { id: itemData.firebaseId, name: itemData.name, img:itemData.img, price: itemData.price };
    }

 */