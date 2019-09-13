import { createStore, applyMiddleware } from "redux";
import booksReducer from "./redux/reducers/book/books";
import thunk from "redux-thunk";

const store = createStore(booksReducer, applyMiddleware(thunk));
export default store;

