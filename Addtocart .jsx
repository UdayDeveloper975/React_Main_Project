import React, { useEffect, useState } from 'react';
import '../../assets/styles/addtocart.css';
import { useNavigate } from 'react-router-dom';

const AddtoCart = () => {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const bookdata = await fetch(`http://localhost:4000/Cartitems`);
      const data = await bookdata.json();
      setBook(data);
    };
    fetchApi();
  }, [book]); 
  const viewBook = (id) => {
    navigate(`/userportal/readbook/${id}`);
  };

  const deleteBook = (id, title) => {
    const confirmDelete = window.confirm(`Do you want to delete ${title} book...?`);
    if (confirmDelete) {
      fetch(`http://localhost:4000/Cartitems/${id}`, { method: 'DELETE' });
      alert(`${title} book is deleted`);
      setBook(book.filter((b) => b.id !== id)); 
    } else {
      alert(`${title} Book is not deleted`);
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="add">
        <div className="add-cart">
          <table>
            <thead>
              <tr>
                <th>SNo</th>
                <th>Title</th>
                <th>Image</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {book.map((ele, index) => {
                const { title, thumbnailUrl, id } = ele;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td><img src={thumbnailUrl} alt="Book Thumbnail" /></td>
                    <td>
                      <button onClick={() => viewBook(id)}>
                        <img src="https://cdn-icons-png.flaticon.com/128/709/709612.png" alt="View" />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteBook(id, title)}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10337/10337185.png" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
