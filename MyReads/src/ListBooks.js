import React, { Component } from 'react';
import { Link }  from 'react-router-dom';  
import './App.css';

class ListBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wantToRead: props.books.filter((book) => 
            (book.shelf === 'wantToRead')),
          currentlyReading: props.books.filter((book) => 
            (book.shelf === 'currentlyReading')),
          read: props.books.filter((book) => 
            (book.shelf === 'read'))
        }
    }
    state = {
        wantToRead  : [],
        currentlyReading : [],
        read: []
    }
    render() {

        const { books } = this.props

        const wantToRead = books.filter((book) => 
        (book.shelf === 'wantToRead'))
        const currentlyReading = books.filter((book) => 
        (book.shelf === 'currentlyReading'))
        const read = books.filter((book) => 
        (book.shelf === 'read'))

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {console.log('currently reading')}
                        {console.log(this.state.currentlyReading)}
                      {currentlyReading.map((book) => (
                          <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.previewLink})` }}></div>
                                <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading" selected>Currently Reading</option>
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
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {console.log('currently reading')}
                        {console.log(this.state.currentlyReading)}
                      {wantToRead.map((book) => (
                          <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.previewLink})` }}></div>
                                <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading" >Currently Reading</option>
                                    <option value="wantToRead" selected>Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors[0]}</div>
                            </div>
                          </li>
                      ))}
                    </ol>  
                </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                        {console.log('currently reading')}
                        {console.log(this.state.currentlyReading)}
                      {read.map((book) => (
                          <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.previewLink})` }}></div>
                                <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read" selected>Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors[0]}</div>
                            </div>
                          </li>
                      ))}
                    </ol>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link className="open-search-button" to='/search'>Add a book</Link>
            </div>
          </div>
)
}}

export default ListBooks