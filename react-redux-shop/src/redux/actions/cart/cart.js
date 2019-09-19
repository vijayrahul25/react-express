
//import ApiHandler from './../../../service/ApiHandler';

export const updateCartTotal = (cartTotal) => {
    return {
        type: "UPDATE_CART_TOTAL",
        cartTotal
    };
};

export const updateCartItems = (cartItems) => {    
    return {
        type: "UPDATE_CART_ITEMS",
        cartItems
    };
};

