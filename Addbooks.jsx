import React, { useEffect, useState } from 'react';
import '../../assets/Styles/addbooks.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

let AddBooks = () => {
  let [book, setBook] = useState({
    title: '',
    isbn: '',
    pageCount: '',
    thumbnailUrl: '',
    shortDescription: '',
    longDescription: '',
    status: '',
    authors: '',
    categories: ''
  });
  
  let [books, setBooks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then(resp => {
        setBooks(resp.data);
      });
  }, []);

  let idValue = () => {
    if (books.length === 0) return 1; 
    const id = Number(books[books.length - 1].id);
    return id + 1;
  };

  let handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let newId = idValue();

    let newBook = {
      id: String(newId),
      title: book.title,
      isbn: book.isbn,
      pageCount: book.pageCount,
      thumbnailUrl: book.thumbnailUrl,
      shortDescription: book.shortDescription,
      longDescription: book.longDescription,
      status: book.status,
      authors: book.authors.split(',').map(author => author.trim()), 
      categories: book.categories.split(',').map(category => category.trim()) 
    };

    fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    }).then((response) => {
      if (response.ok) {
        alert('Book added successfully');
        navigate('/adminportal/addbooks');
      } else {
        alert('Failed to add book');
      }
    });
  };

  return (
    <div className="addbooks">
      <div className="form-container">
        <div className="head">Add Book</div>
        <form onSubmit={handleSubmit}>
          <div className="inputfield">
            <input type="text" name="title" placeholder="Enter Title Name" onChange={handleChange} />
            <input type="text" name="isbn" placeholder="Enter ISBN" onChange={handleChange} />
            <input type="number" name="pageCount" placeholder="Enter Page Count" onChange={handleChange} />
            <input type="text" name="thumbnailUrl" placeholder="Enter Image URL" onChange={handleChange} />
            <input type="text" name="shortDescription" placeholder="Enter Short Description" onChange={handleChange} />
            <input type="text" name="longDescription" placeholder="Enter Long Description" onChange={handleChange} />
            <input type="text" name="status" placeholder="Enter Status" onChange={handleChange} />
            <input type="text" name="authors" placeholder="Enter Authors" onChange={handleChange} />
            <input type="text" name="categories" placeholder="Enter Categories " onChange={handleChange} />
          </div>
          <button type="submit" className="buttn">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
