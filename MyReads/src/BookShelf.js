import React from 'react'
import './App.css';
import Book from './Book';

const BookShelf = props => {
    const { books, changeShelf } = props
    return (
        <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    )
}

export default BookShelf;