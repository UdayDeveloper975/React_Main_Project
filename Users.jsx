import React, { useEffect, useState } from 'react';
import '../assets/Styles/users.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Users = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/Users')
            .then(resp => resp.json())
            .then(elem => setData(elem));
    }, []);

    let navigate = useNavigate();

    let navigatebtn = () => {
        navigate(`/adminportal/addusers`);
    };

    let handleDelete = (id) => {
        fetch(`http://localhost:4000/Users/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (response.ok) {
                setData(data.filter(user => user.id !== id));
            }
        });
    };
     let loc=useLocation()
    let path= loc.pathname.startsWith(`/adminportal`)
    return (
        <>
            <div className="users">
                <div className="container">
                    <div className="header">
                        <h1>User Details</h1>
                        <button onClick={navigatebtn}>ADD USER</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                                <th>PLACE</th>
                                {path && <th>DOB</th>}
                                <th>EMAIL</th>
                               {path &&  <th>PASSWORD</th>}
                               {path &&   <th>ACTION</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((elem) => {
                                let { id, fname, lname, place, dob, email, password } = elem;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{fname}</td>
                                        <td>{lname}</td>
                                        <td>{place}</td>
                                       {path &&  <td>{dob}</td>}
                                        <td>{email}</td>
                                        {path &&                                         <td>{password}</td>
                                    }
                                      {path &&   <td>
                                            <button onClick={() => handleDelete(id)} className="delete-btn">
                                                DELETE
                                            </button>
                                        </td>}
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

export default Users;
