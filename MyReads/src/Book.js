import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger';


const Book = props => {
    const { book, books, changeShelf } = props;

    const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : 'noCover';

    return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        {/* Check for authors and render each on separate line if exist*/
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
    )

}

export default Book;
