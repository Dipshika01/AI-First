import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('/api/books');
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`/api/books/${id}`);
    setBooks(books.filter(book => book._id !== id));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      <h2>Book List</h2>
      {books.map((book) => (
        <div key={book._id} className="book-item">
          <h3>{book.title} by {book.author}</h3>
          <p>Genre: {book.genre || 'N/A'} | Year: {book.publishedYear || 'Unknown'}</p>
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
