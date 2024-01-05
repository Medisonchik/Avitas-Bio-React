import { useState } from 'react';

function useCart() {
    const [cartCount, setCartCount] = useState(0);
    const [showCart, setShowCart] = useState(false);
    console.log("cart" + cartCount);

    const openCart = () => {
        setShowCart(true);
    };

    const closeCart = () => {
        setShowCart(false);
    };

    const handleAddToCart = () => {
        setCartCount((prevCount) => prevCount + 1);
        console.log("handle add to cart" + cartCount);
    };

    return {
        cartCount,
        handleAddToCart,
    };
}

export default useCart;
