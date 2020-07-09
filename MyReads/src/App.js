import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    books: [],
    wantToRead: [],
    currentlyReading: [],
    read: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          books: books
        }))
      })
  }

  updateBook = (book,shelf) => {
    console.log(book);
    console.log(shelf);
    book.shelf = shelf;
    BooksAPI.update(book,shelf)
      .then((res) => {
        console.log(res);
        this.setState((currentState) => ({
          books : currentState.books.filter((b) => b.id !== book.id).concat(book)
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <ListBooks 
            books = {this.state.books}
            updateBook = {this.updateBook}
          />
        } 
        />
        <Route exact path="/search" render={() => 
          <SearchBooks 
            books = {this.state.books}
            updateBook = {this.updateBook}/>} />
      </div>
    );
  }
}

export default BooksApp;
