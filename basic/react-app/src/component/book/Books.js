import React from 'react';
import bookApi from './../../service/bookApi';
import BookList from './BookList';

export default class Books extends React.Component { 
    constructor() {
        super();

        this.state = {
            books: [],
            fetched: false,
            totalRecords: 0,
            start: 0,
            end: 10,
        };
    }
    componentDidMount() {
      this.getData();
        this.getTotalbooks();
    }

    getData = async () => {
        var bookData = await bookApi.getBooks(this.state.start, this.state.end);
        this.setState({books: bookData, fetched:true}) 
    }
    getTotalbooks = async () => {
        var count = await bookApi.getTotalbooks();
        this.setState({ totalRecords: count });
    }

    render() {
        let data = 'Loading...';
        if(this.state.fetched ) {  
            data = this.state.books.map((book, index) =>
                <BookList key={index} book={book}/>
            )
        }
    
       return (
            <div className=" card-columns text-center">
                {data}
            </div>
        );

    }
 }