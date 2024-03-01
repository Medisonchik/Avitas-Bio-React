import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setCartCount, setCartItems } from '../../redux/actions';
import { firestore } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { updateCartItemQuantity } from '../../redux/actions';

function AddToCartBtn({ firebaseId }) {

    const dispatch = useDispatch();
    const cartCount = useSelector(state => state.cart.cartCount);
    const cartItems = useSelector(state => state.cart.cartItems);

    const [showMessage, setShowMessage] = useState(false);

    const handleBtnClick = async () => {
        try {
            const itemDocRef = doc(firestore, 'items', firebaseId);
            const itemDocSnap = await getDoc(itemDocRef);
    
            if (itemDocSnap.exists()) {
                const itemData = itemDocSnap.data();
                const formattedItem = fetchItemData(itemData);
                const existingItemIndex = cartItems.findIndex(item => item.id === firebaseId);

                if (existingItemIndex !== -1) {
                    dispatch(updateCartItemQuantity({
                        index: existingItemIndex,
                        newQuantity: cartItems[existingItemIndex].quantity + 1
                    }));
                } else {
                    dispatch(addToCart(formattedItem));
                }


                dispatch(setCartCount(cartCount + 1));

                setShowMessage(true);
    
                setTimeout(() => {
                    setShowMessage(false);
                }, 5000);
            } else {
                console.error('Item not found');
            }
        } catch (error) {
            console.error('Error fetching item data:', error);
        }
    };

    const handleClose = () => {
        setShowMessage(false);
    }

    useEffect(() => {
        const storedCartCount = localStorage.getItem('cartCount');
        if(storedCartCount) {
            dispatch(setCartCount(parseInt(storedCartCount)));
        }

        const storedCartItems = localStorage.getItem('cartItems');
        if(storedCartItems) {
            dispatch(setCartItems(JSON.parse(storedCartItems))); 
        }

    }, [dispatch]);

    const fetchItemData = (itemData) => {
        return { id: firebaseId, name: itemData.name, img: itemData.img, price: itemData.price, code: itemData.code, subText: itemData.subText};
    };

    return (
        <>
            <button className='greenBtn' onClick={handleBtnClick}>Add to Cart </button>
            {showMessage && (
                <div className='overlay'>
                    <div className='addToCart--message'>
                        <span className='centered-text'>
                            Item was successfully added to your cart. You can go to 
                            <span className='underline--text'> your cart </span> 
                            or continue shopping
                        </span>
                        <span className='xmark-container'>
                            <FontAwesomeIcon onClick={handleClose} className='xmark' icon={faXmark} />
                        </span>
                    </div>
                </div>
            )}
        </>

    );
}

export default AddToCartBtn;