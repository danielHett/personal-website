import { useEffect, useState } from 'react';
import './Books.css';

const languages = {
  EN: '🇬🇧',
  DE: '🇩🇪',
};

const filledStar = '★';
const emptyStar = '☆';

const BookChip = ({ book }) => {
  // If the user has clicked on a chip, then we display the cover of the book.
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <div className="book-chip" onClick={handleClick}>
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
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      let resp = await fetch('/book_information/books.json');
      setBooks(await resp.json());
    };

    // If we haven't fetched, then fetch.
    if (books === null) fetchBooks();
  }, [books]);

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
