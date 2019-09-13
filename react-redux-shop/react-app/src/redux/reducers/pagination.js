const initialState = {
    pagination: { totalRecords: 0, startPage: 1, currentPage: 1, pageSize: 10 }
};

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOTAL_RECORDS":
            return {
                ...state, pagination: {...state.pagination, totalRecords:action.totalRecords}
            };

        case "SET_CURRENT_PAGE":
            return {
                ...state, pagination: {...state.pagination, currentPage:action.currentPage}
            };       
        default:
            return state;
    }
};

export default paginationReducer;