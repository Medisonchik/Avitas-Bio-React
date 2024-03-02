export const selectItemQuantity = (state, firebaseId) => {
    const item = state.cart.cartItems.find(item => item.firebaseId === firebaseId);
    return item ? item.quantity : 0;
}