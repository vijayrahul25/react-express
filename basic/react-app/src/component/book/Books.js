import React from 'react';
import bookApi from './../../service/bookApi';
import BookList from './BookList';

export default class Books extends React.Component { 
    constructor() {
        super();

        this.state = {
            books: [],
            fetched:false
        };
    }
    componentDidMount() {
      this.getData();
    }

    getData = async () => {
        var bookData = await bookApi.getBooks();        
        this.setState({books: bookData, fetched:true}) 
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