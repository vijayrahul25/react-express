
const initialState = {
    cartItems: [],
    cartTotal: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_CART_TOTAL":                
            return {
                ...state, cartTotal: action.cartTotal
            };

        case "UPDATE_CART_ITEMS":                
            return {
                ...state, cartItems: action.cartItems
            };

        default:
            return state;
    }
};

export default cartReducer;