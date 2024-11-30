import React, { useState, useEffect } from 'react';
import '../assets/Styles/books.css';
import { useLocation, useNavigate } from 'react-router-dom';

let Books = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/books')
      .then(resp => resp.json())
      .then(elem => setData(elem));
  }, []);

  let navigate = useNavigate();
  let loc=useLocation()
  let path=loc.pathname.startsWith(`/adminportal`)
  let readBook = (id) => {
    path ?
    navigate(`/adminportal/readbook/${id}`)
    :
    navigate(`/userportal/readbook/${id}`)
  }

  let deleteBook = (id, title) => {
    let bool = window.confirm(`Do you want to delete ${title} book`);
    if (bool) {
      fetch(`http://localhost:4000/books/${id}`, { method: 'DELETE' });
      alert('Book is deleted');
    } else {
      alert(`${title}: Book is Not Deleted`);
    }
    setData(data.filter(book => book.id !== id));
  };

  return (
    <div className="books">
      <div className="contact">
        {data.map(elem => {
          const { id, title, isbn, pageCount, thumbnailUrl, status, authors, categories } = elem;
          return (
            <div key={id} className="book-item">
              <div className="book-thumbnail">
                <img src={thumbnailUrl} alt={`${title} thumbnail`} />
                <div className="book-title">{title}</div>
              </div>
              <div className="book-info">
                <table border={2} className="book-table">
                  <tbody>
                    <tr>
                      <td><strong>ID:</strong></td>
                      <td>{id}</td>
                    </tr>
                    <tr>
                      <td><strong>ISBN:</strong></td>
                      <td>{isbn}</td>
                    </tr>
                    <tr>
                      <td><strong>Page Count:</strong></td>
                      <td>{pageCount}</td>
                    </tr>
                    <tr>
                      <td><strong>Status:</strong></td>
                      <td className="book-status">{status}</td>
                    </tr>
                    <tr>
                      <td><strong>Authors:</strong></td>
                      <td className="book-authors">{Array.isArray(authors) ? authors.join(', ') : authors}</td>
                    </tr>
                    <tr>
                      <td><strong>Categories:</strong></td>
                      <td className="book-categories">{Array.isArray(categories) ? categories.join(', ') : categories}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="btns">
                  <button className="read" onClick={() => readBook(id)}>Read Book</button>
                  {
                    path &&
                    <button className="delete" onClick={() => deleteBook(id, title)}>Delete Book</button>

                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
