import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
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

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBooks 
            books = {this.state.books}
            changeShelf = {this.changeShelf}
          />
          <div className="open-search">
            <Link to="/search">Search</Link>
          </div>
          </div>
        } 
        />
        <Route exact path="/search" render={() => 
          <SearchBooks books={this.state.books} changeShelf={this.changeShelf} />
        } 
        />
      </div>
    );
  }
}

export default BooksApp;
