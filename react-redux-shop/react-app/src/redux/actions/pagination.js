export const setCurrentPage = currentPage => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    };
};
export const dispatchTotalRecords = totalRecords => {
    return {
        type: "SET_TOTAL_RECORDS",
        totalRecords
    };    
};

export function setTotalRecords(totalRecords) {
    return dispatch => {        
        dispatch(dispatchTotalRecords(totalRecords));
        dispatch(setlastPage(totalRecords));
    }
}
export const setlastPage = totalRecords => {    
    return {
        type: "SET_LAST_PAGE",
        totalRecords
    };

    // let lastPage = Math.ceil(this.props.pagination.totalRecords / this.props.pagination.pageSize);
};