import React from 'react';
import bookApi from './../../service/bookApi';
import BookList from './BookList';
import PaginationList from './../common/PaginationList';

export default class Books extends React.Component {
    constructor() {
        super();

        this.state = {
            books: [],
            fetched: false,
            totalRecords: 0,
            startPage: 1,
            currentPage: 1,
            pageSize: 10,
        };
    }
    componentDidMount() {
        this.getBooks(this.props.page);
        this.getTotalbooks();
    }
    componentWillReceiveProps(nextProps) {
        // this.setState({
        //     loaded: false
        // });


    }
    getBooks = async (page) => {
        this.setState(prevstate => ({ currentPage: page }));

        var bookData = await bookApi.getBooks(page, this.state.pageSize);
        this.setState({ books: bookData, fetched: true })
    }

    getTotalbooks = async () => {
        var count = await bookApi.getTotalbooks();
        this.setState({ totalRecords: count });
    }

    render() {
        let data = 'Loading...';
        let lastPage = Math.ceil(this.state.totalRecords / this.state.pageSize);
        console.log(this.state.books)
        if (this.state.fetched) {
            if (this.state.books.length > 0) {
                data = this.state.books.map((book, index) =>
                    <BookList key={index} book={book} />
                )

                data = <div className="row">
                    <PaginationList lastPage={lastPage} pageSize={this.state.pageSize} currentpage={this.state.currentPage} totalRecords={this.state.totalRecords} getpage={this.getBooks} />
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