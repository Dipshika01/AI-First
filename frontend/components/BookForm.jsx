import React, { useState } from 'react';
import axios from 'axios';
import './BookForm.css';

const BookForm = ({ onBookAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publishedYear: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/books', formData);
      onBookAdded(res.data);
      setFormData({ title: '', author: '', genre: '', publishedYear: '' });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" required />
      <input name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" />
      <input name="publishedYear" type="number" value={formData.publishedYear} onChange={handleChange} placeholder="Year" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;