import { useState } from 'react';

function useCart() {
    const [cartCount, setCartCount] = useState(0);
    //const [showCart, setShowCart] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    console.log("cart" + cartCount);

 /*    const openCart = () => {
        setShowCart(true);
    };

    const closeCart = () => {
        setShowCart(false);
    }; */

    const addToCart = (item) => {
        setCartCount((prevCount) => prevCount + 1);
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return {
        cartCount,
        cartItems,
        addToCart,
    };
}

export default useCart;
