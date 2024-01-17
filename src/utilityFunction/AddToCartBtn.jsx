import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setCartCount } from '../../redux/actions';
import { firestore } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

import { greenBtn } from '../../styling/styling';

function AddToCartBtn({ firebaseId }) {
    //when press circle apear on top of basket
    //number increasing when more items add
    //apears alert that item bean added to basket
    const dispatch = useDispatch();
    const cartCount = useSelector(state => state.cart.cartCount);

    const handleBtnClick = async () => {
        try {
            const itemDocRef = doc(firestore, 'items', firebaseId);
            const itemDocSnap = await getDoc(itemDocRef);
            if(itemDocSnap.exists()) {
                const itemData = itemDocSnap.data();

                const formattedItem = fetchItemData(itemData);

                dispatch(addToCart(formattedItem));
                dispatch(setCartCount(cartCount + 1));
                console.log('Item added to cart:', formattedItem);
                console.log('cart count' + cartCount);
            } else {
                console.error('Item not found');
            }
        } catch(error) {
            console.error('error fetching item data:', error);
        }
    };

    const fetchItemData = (itemData) => {
        return { id: firebaseId, name: itemData.name, img: itemData.img, price: itemData.price, code: itemData.code, subText: itemData.subText };
    };

    return (
        <button onClick={handleBtnClick} style={greenBtn}>Add to Cart
        </button>

    );
}

export default AddToCartBtn;