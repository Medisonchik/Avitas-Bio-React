import { createReducer } from "@reduxjs/toolkit";
import { addToCart } from "./actions";
import { setCartCount } from "./actions";
import { resetCart } from "./actions";

const initialState = {
    cartItems: [],
    cartCount: 0,
};

const cartReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(addToCart, (state, action) => {
        state.cartItems.push(action.payload);
    })
    .addCase(setCartCount, (state, action) => {
        state.cartCount = action.payload;
    })
    .addCase(resetCart, (state) => {
        state.cartItems = [];
        state.cartCount = 0;
    })
});

export default cartReducer;
