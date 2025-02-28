import './Books.css';

import { books } from '../../data/books.js';

const BookChip = ({ book }) => {
  return (
    <div className="book-chip">
      <div className="book-chip-cover">
        <img src={book.coverLink} alt={book.title} width="100%" height="100%" style={{ objectFit: 'fill' }} />
      </div>
      <div className="book-chip-other-data">
        <div style={{ fontSize: '1.2em' }}>{book.title}</div>
        <div>{book.author}</div>
      </div>
    </div>
  );
};

const Books = () => {
  return (
    <div className="books-container">
      <div className="book-page-description">Here is a list of some of the books that I have read!</div>
      <div className="books-book-chips">
        {books ? books.map((book) => <BookChip key={book.title} book={book} />) : null}
      </div>
    </div>
  );
};

export default Books;
