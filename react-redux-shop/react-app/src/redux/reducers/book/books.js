
const initialState = {
    books: [],
    totalBooks: 0,
    isFetching: false,
    isError: false
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BOOKS":
            return {
                ...state, isFetching: true
            };

        case "FETCHED_BOOKS":
            return {
                ...state, books: action.books, isFetching: false
            };
        case "FETCHED_BOOK_TOTAL":
            return {
                ...state, totalBooks: action.count
            };
            
        case "FETCH_BOOKS_ERROR":
            return {
                ...state, isError: true
            };
        default:
            return state;
    }
};

export default booksReducer;