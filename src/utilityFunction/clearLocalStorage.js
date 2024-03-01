export const clearLocalStorage = (timeout) => {
    const clearStorage = () => {
        localStorage.removeItem('cartCount');
        localStorage.removeItem('cartItems');
    };

    setTimeout(clearStorage, timeout);
};