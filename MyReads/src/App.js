import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState(() => ({
        books: books,
      }));
    });
  }

  updateBook = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then((response) => {
      changedBook.shelf = shelf;
      this.setState((prevState) => ({
        books: prevState.books
          .filter((book) => book.id !== changedBook.id)
          .concat(changedBook),
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ListBooks
                books={this.state.books}
                changeShelf={this.updateBook}
              />
              <div className="open-search">
                <Link to="/search">Search</Link>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.books}
              changeShelf={this.updateBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
