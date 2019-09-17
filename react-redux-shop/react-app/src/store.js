import { createStore, combineReducers , applyMiddleware } from "redux";
import booksReducer from "./redux/reducers/book/books";
import paginationReducer from "./redux/reducers/pagination";
import cartReducer from "./redux/reducers/cart/cart";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
    booksReducer, paginationReducer, cartReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

