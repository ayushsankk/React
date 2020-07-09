import React from 'react';
import { Link }  from 'react-router-dom';  
import './App.css';
import ShelfBooks from './ShelfBooks';

const ListBooks = props =>  {
        const { books, updateBook } = props
        const shelfTypes = [
          { type: 'currentlyReading', title: 'Currently Reading' },
          { type: 'wantToRead', title: 'Want to Read' },
          { type: 'read', title: 'Read' }
        ];
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {shelfTypes.map((shelf, index) => {
                  const shelfBooks = books.filter((book) => book.shelf === shelf.type);
                  return (
                    <div className="bookshelf" key={index}>
                      <h2 className="bookshelf-title">{shelf.title}</h2>
                      <div className="bookshelf-books">
                        <ShelfBooks books={shelfBooks} currentShelf={shelf.type} updateBook={updateBook}/>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="open-search">
              <Link className="open-search-button" to='/search'>Add a book</Link>
              </div>
          </div>

)}

export default ListBooks