import React, { useState } from 'react';
import '../../assets/Styles/addusers.css';
import { useNavigate } from 'react-router-dom';

let Addusers = () => {
  let [user, setUser] = useState({
    fname: '',
    lname: '',
    place: '',
    dob: '',
    email: '',
    password: 'user@123', 
  });

  let navigate = useNavigate();

  let handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/Users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.ok) {
        alert('User added successfully');
        navigate('/adminportal/addusers');
      } else {
        alert('Failed to add user');
      }
    });
  };

  return (
    <div className="addusers">
      <div className="form-container">
        <div className="head">Add User</div>
        <form onSubmit={handleSubmit}>
          <div className="inputfield">
            <input type="text" name="fname" placeholder="Enter First Name" onChange={handleChange} value={user.fname} />
            <input type="text" name="lname" placeholder="Enter Last Name" onChange={handleChange} value={user.lname} />
            <input type="text" name="place" placeholder="Enter Place" onChange={handleChange} value={user.place} />
            <input type="date" name="dob" placeholder="Enter Date of Birth" onChange={handleChange} value={user.dob} />
            <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} value={user.email} />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <button type="submit" className="buttn">ADD USER</button>
        </form>
      </div>
    </div>
  );
};

export default Addusers;
