import React from 'react'

    const BookList = ({ book }) => {
      return (
        <div>                  
            <div className="card">
              <div className="card-header"><h4 className="card-title">{book.title}</h4> </div>
              <img src={book.thumbnailUrl} className="card-img-top bookthumbs" alt={book.title}/>
              <div className="card-body">
                <h5 className="card-title">ISBN: {book.isbn}</h5> 
          <h5 className="card-title">Pages: {book.pageCount}</h5>
                <p className="card-text">{book.shortDescription}</p>
                <p className="card-text text-left">Authors: {book.authors}</p>
                <p className="card-text text-left">Categories: {book.categories}</p>
              </div>
              <div className="card-footer">: {book.categories}</div>
            </div>          
        </div>
      )
    };

    export default BookList