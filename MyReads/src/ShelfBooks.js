import React , { Component } from 'react';
import './App.css';
import Book from './Book';

class ShelfBooks extends Component {

    render() {
        const { books, currentShelf, updateBook } = this.props;
        return (
            
            <ol className="books-grid">
            {books.map((book) => (
                <Book 
                    key = {book.id}
                    books = {books}
                    currentShelf = {currentShelf}
                    book = {book}
                    updateBook = {updateBook}    
                 />
            ))}
          </ol>
        )
    }
}

export default ShelfBooks;