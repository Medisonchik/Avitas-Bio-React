import { createReducer } from "@reduxjs/toolkit";
import { addToCart } from "./actions";
import { setCartCount } from "./actions";
import { resetCart } from "./actions";
import { setCartItems } from "./actions";
import { updateCartItemQuantity } from "./actions";
import { removeFromCart } from "./actions";

const initialState = {
    cartItems: [],
    cartCount: 0,
};

 
const cartReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(addToCart, (state, action) => {
        const newItem = action.payload;
        const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);
    
        if (existingItemIndex !== -1) {
            state.cartItems[existingItemIndex] = {
                ...state.cartItems[existingItemIndex],
                quantity: state.cartItems[existingItemIndex].quantity + 1
            };
        } else {
            newItem.quantity = newItem.quantity || 1; 
            state.cartItems.push(newItem);        
        }

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        const totalCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        localStorage.setItem('cartCount', totalCount);
    })
    .addCase(setCartCount, (state, action) => {
        state.cartCount = action.payload;
        
    })
    .addCase(resetCart, (state) => {
        state.cartItems = [];
        state.cartCount = 0;

        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartCount');
    })
    .addCase(setCartItems, (state, action) => {
        state.cartItems = action.payload;
        const totalCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        localStorage.setItem('cartCount', totalCount);
    })
    .addCase(updateCartItemQuantity, (state, action) => {
        const { index, newQuantity } = action.payload;
        if (index >= 0 && index < state.cartItems.length) {
            state.cartItems[index] = {
                ...state.cartItems[index],
                quantity: newQuantity
            };

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            const totalCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            localStorage.setItem('cartCount', totalCount);
        }
    })
    .addCase(removeFromCart, (state, action) => {
        const itemId = action.payload;
        const updatedCartItems = state.cartItems.filter(item => item.id !== itemId);
        state.cartItems = updatedCartItems;

        const totalCount = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
        state.cartCount = totalCount;
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        localStorage.setItem('cartCount', totalCount);

    })
});

export default cartReducer;
