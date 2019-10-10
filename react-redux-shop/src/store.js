import { createStore, combineReducers , applyMiddleware, compose  } from "redux";
import booksReducer from "./redux/reducers/book/books";
import paginationReducer from "./redux/reducers/pagination";
import cartReducer from "./redux/reducers/cart/cart";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
    booksReducer, paginationReducer, cartReducer
});
const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ) );
export default store;

