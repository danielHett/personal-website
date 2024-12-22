import './Books.css';

const readBooks = [
  { title: 'A Confederacy of Dunces', author: 'John Kennedy Toole', isFavorite: false, language: 'EN' },
  { title: 'Les Misérables', author: 'Victor Hugo', isFavorite: true, language: 'EN' },
  { title: 'The Three Musketeers', author: 'Alexandre Dumas', isFavorite: true, language: 'EN' },
  { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', isFavorite: true, language: 'EN' },
  { title: 'The Shining', author: 'Stephen King', isFavorite: false, language: 'EN' },
  { title: 'A Prayer for Owen Meany', author: 'John Irving', isFavorite: false, language: 'EN' },
  { title: 'The Grapes of Wrath', author: 'John Steinbeck', isFavorite: true, language: 'EN' },
  { title: 'East of Eden', author: 'John Steinbeck', isFavorite: false, language: 'EN' },
];

const languages = {
  EN: '🇬🇧',
  DE: '🇩🇪',
};

const filledStar = '★';
const emptyStar = '☆';

const BookChip = ({ book }) => {
  return (
    <div className="book-chip">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '5px',
        }}
      >
        <div className="book-chip-title">{book.title}</div>
        <div className="book-chip-author">{book.author}</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <div className="book-chip-star">{book.isFavorite ? filledStar : emptyStar}</div>
        <div className="book-chip-lang">{languages[book.language] ? languages[book.language] : '?'}</div>
      </div>
    </div>
  );
};

const Books = () => {
  return (
    <div className="books-container">
      <div className="books-book-chips">
        {readBooks.map((readBook) => (
          <BookChip book={readBook} />
        ))}
      </div>
    </div>
  );
};

export default Books;
