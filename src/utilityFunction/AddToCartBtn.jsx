import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setCartCount } from '../../redux/actions';
import { firestore } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function AddToCartBtn({ firebaseId }) {

    const dispatch = useDispatch();
    const cartCount = useSelector(state => state.cart.cartCount);
    const [showMessage, setShowMessage] = useState(false);

    const handleBtnClick = async () => {
        try {
            const itemDocRef = doc(firestore, 'items', firebaseId);
            const itemDocSnap = await getDoc(itemDocRef);
            if(itemDocSnap.exists()) {
                const itemData = itemDocSnap.data();

                const formattedItem = fetchItemData(itemData);

                dispatch(addToCart(formattedItem));
                dispatch(setCartCount(cartCount + 1));

                setShowMessage(true);

                setTimeout(() => {
                    setShowMessage(false);
                }, 5000);

            } else {
                console.error('Item not found');
            }
        } catch(error) {
            console.error('error fetching item data:', error);
        }
    };

    const handleClose = () => {
        setShowMessage(false);
    }

    const fetchItemData = (itemData) => {
        return { id: firebaseId, name: itemData.name, img: itemData.img, price: itemData.price, code: itemData.code, subText: itemData.subText };
    };

    return (
        <>
            <button className='greenBtn' onClick={handleBtnClick}>Add to Cart </button>
            {showMessage && (
                <div className='addToCart--message'>
                    <span class='centered-text'>
                        Item was successfully added to your cart. You can go to 
                        <span class='underline--text'> your cart </span> 
                        or continue shopping
                    </span>
                    <span class='xmark-container'>
                        <FontAwesomeIcon onClick={handleClose} className='xmark' icon={faXmark} />
                    </span>
                </div>
            )}
        </>

    );
}

export default AddToCartBtn;