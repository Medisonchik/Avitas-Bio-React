import React, { useState } from 'react';

function AddToCartBtn({ handleAddToCart }) {
    //when press circle apear on top of basket
    //number increasing when more items add
    //apears alert that item bean added to basket

    const add = () => {
        handleAddToCart();
        console.log('button clicked');
    }

    return (
        <button onClick={add} className='addToCart--button'>Add to Cart
        </button>

    );
}

export default AddToCartBtn;