import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('ADD_TO_CART');
export const setCartCount = createAction("SET_CART_COUNT");
export const resetCart = createAction('RESET_CART');
export const setCartItems = createAction('SET_CART_ITEMS');
export const removeFromCart = createAction('REMOVE_FROM_CART');

export const updateCartItemQuantity = createAction('UPDATE_CART_ITEM_QUANTITY');
