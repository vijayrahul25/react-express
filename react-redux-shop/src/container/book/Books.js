import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* import redux actions*/
import { actionLoadBooks, actionLoadBookTotal } from "./../../redux/actions/book/books";
import { setTotalRecords, setCurrentPage } from "./../../redux/actions/pagination";

import BookList from './../../component/book/BookList';
import PaginationList from './../common/PaginationList';

class Books extends React.Component {

    async componentWillMount() {
        console.log('props - ', this.props)
        await this.props.actionLoadBookTotal();
        this.props.setTotalRecords(this.props.totalBooks);

        let intPageParameter = parseInt(this.props.match.params.page);
        let intCurrentPage = parseInt(this.props.pagination.currentPage);
        let intPageSize = parseInt(this.props.pagination.pageSize);
        let totalRecords = parseInt(this.props.pagination.totalRecords);

        if (!isNaN(intPageParameter) && intCurrentPage !== intPageParameter && intPageParameter <= totalRecords) {
            this.props.setCurrentPage(intPageParameter);
            intCurrentPage = intPageParameter;
        }

        await this.props.actionLoadBooks(intCurrentPage, intPageSize);
    }

    loadNextPageRecords = (currentPage, pageSize) => {
        this.props.actionLoadBooks(currentPage, pageSize);
        this.props.history.push('/booklist/' + currentPage);
    }

    render() {
        let data = null;
        if (this.props.isFetching) {
            data = <div className="text-center ">
            <div className="spinner-border spinner-border-large" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>;
        } else {

            if (this.props.books.length > 0) {
                data = this.props.books.map((book, index) =>
                    <BookList key={index} book={book} />
                )

                data = <div className='col-sm'>
                    <PaginationList loadNextPageRecords={this.loadNextPageRecords} />
                    <div className="card-columns text-center" >
                        {data}
                    </div>
                    </div>
                    
               
            } else {
                data = <div className="alert alert-warning">
                    No records found...
                            </div>
            }
        }

        return (
            <div className='col-sm'>{data}</div>
        );

    }
}

const mapStateToProps = state => {
    const { books, isError, isFetching, totalBooks } = state.booksReducer;
    const { pagination } = state.paginationReducer;

    return {
        books, isError, isFetching, totalBooks, pagination
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ actionLoadBooks, actionLoadBookTotal, setTotalRecords, setCurrentPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
