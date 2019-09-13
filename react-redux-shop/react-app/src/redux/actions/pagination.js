export const setCurrentPage = currentPage => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    };
};
export const setTotalRecords = totalRecords => {
    return {
        type: "SET_TOTAL_RECORDS",
        totalRecords
    };
};
