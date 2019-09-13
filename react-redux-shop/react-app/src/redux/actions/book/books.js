// import store from "./../../../store";
import ApiHandler from './../../../service/ApiHandler';

export const fetch_books = () => {
  return {
    type: "FETCH_BOOKS"
  };
};

export const fetched_books = books => {
  return {
    type: "FETCHED_BOOKS",
    books: books
  };
};

export const fetch_books_error = () => {
  return {
    type: "FETCH_BOOKS_ERROR"
  };
};

export function  actionLoadBooks () {   

    return async dispatch => {
      try {
        
        dispatch(fetch_books());        
        var bookData = await ApiHandler.getBooks(1, 10);
        dispatch(fetched_books(bookData));
      }
      catch(error) {
        dispatch(fetch_books_error());
      } 
  
      return true;
    }
  }