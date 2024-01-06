import { createReducer } from "@reduxjs/toolkit";
import { addToCart } from "./actions";
import { setCartCount } from "./actions";

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
});

export default cartReducer;
