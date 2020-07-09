import React , { Component } from 'react';
import './App.css';

class Book extends Component {

    changeBook = (event) => {
        console.log(event.target.value);
        console.log(this.props.book);
        this.props.updateBook(this.props.book, event.target.value)
    }

    render() {
        const {book, currentShelf} = this.props;
        return (
            <li key={book.id}>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                <select defaultValue={currentShelf} onChange={this.changeBook}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors[0]}</div>
            </div>
          </li>
      
        )
    }
}

export default Book;