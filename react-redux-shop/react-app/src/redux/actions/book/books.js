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
        books
    };
};
export const fetch_book_total = count => {
    return {
        type: "FETCHED_BOOK_TOTAL",
        count
    };
};

export const fetch_books_error = () => {
    return {
        type: "FETCH_BOOKS_ERROR"
    };
};

export function actionLoadBooks() {
    return async dispatch => {
        try {

            dispatch(fetch_books());
            const bookData = await ApiHandler.getBooks(1, 10);
            dispatch(fetched_books(bookData));
        }
        catch (error) {
            dispatch(fetch_books_error());
        }

        return true;
    }
}

export function actionLoadBookTotal() {
    return async dispatch => {
        try {
            const count = await ApiHandler.getTotalbooks();
            dispatch(fetch_book_total(count));
        }
        catch (error) {
            dispatch(fetch_books_error());
        }

        return true;
    }
}