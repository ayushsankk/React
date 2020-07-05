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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <ListBooks 
            books = {this.state.books}
          />
        } 
        />
        <Route exact path="/search" render={() => 
          <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
