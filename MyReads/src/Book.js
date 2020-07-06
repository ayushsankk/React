import React, { Component } from 'react'
import './App.css'

class Book extends Component {

  updateShelf = event => 
  this.props.changeShelf(this.props.book,event.target.value)

    render() {
      console.log(this.props)
    const { book, books } = this.props;

    let currentShelf = 'none'

    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
          />
          <div className="book-shelf-changer">
              <select onChange={this.updateShelf} defaultValue={currentShelf}>
                <option value="none" disabled>
                  Move to...
                </option>
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
