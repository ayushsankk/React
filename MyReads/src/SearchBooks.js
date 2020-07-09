import React, { Component } from 'react'
import { Link }   from 'react-router-dom'
import './App.css';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    keyWord: '',
    resultBooks: []
  };

  searchBooks = event => {
    const keyWord = event.target.value;
    this.setState({ keyWord });

    if (keyWord) {
      BooksAPI.search(keyWord).then(books => {
        console.log(books);
        books.length > 0
          ? this.setState({ resultBooks: books})
          : this.setState({ resultBooks: []});
      });

    } else this.setState({ resultBooks: []});
  };

    render() {
      const { books, updateBook } = this.props;
      const { keyWord, resultBooks } = this.state;
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={keyWord} onChange={this.searchBooks}/>

              </div>
            </div>
            <div className="search-books-results">
              {
                resultBooks.length > 0 &&
                (
                  <div>
                    <ol className="books-grid">
                    {resultBooks.map(book => (
                  <Book
                    key={book.id}
                    book={book}
                    books={books}
                    updateBook={updateBook}
                    currentShelf = 'none'
                  />
                ))}
                  </ol>
                  </div>
                ) 
              } 
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks