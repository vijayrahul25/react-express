import React from 'react';
import BookList from './BookList';
import PaginationList from './../common/PaginationList';

export default class Books extends React.Component {

    componentDidMount() {        
        this.props.getBooks(this.props.page);
        this.props.getTotalbooks();
    }

    render() {        
        let data = 'Loading...';
        let lastPage = Math.ceil(this.props.globalState.pagination.totalRecords / this.props.globalState.pagination.pageSize);
        
        if (this.props.globalState.bookfetched) {
            if (this.props.globalState.books.length > 0) {
                data = this.props.globalState.books.map((book, index) =>
                    <BookList key={index} book={book} addToCart={this.props.addToCart} />
                )

                data = <div className="row">
                    <PaginationList lastPage={lastPage} pageSize={this.props.globalState.pagination.pageSize} currentpage={this.props.globalState.pagination.currentPage} getpage={this.props.getBooks} />
                    <div className="card-columns text-center" >
                        {data}
                    </div>
                </div>
            } else {
                data = <div className="row"><div class="alert alert-warning">
                    No records found...
                            </div></div>
            }
        }

        return (
            <div>{data}</div>
        );

    }
}