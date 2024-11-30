import React from 'react'
import '../assets/Styles/navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

  let loc=useLocation()
 let path=loc.pathname
let bool= path.startsWith('/adminportal')
  
  return (
    <div className="navbar">
      <div className="logo">
        <h3>
          <img src="../Images/pngwing.com .png" alt="" height={60} width={120} />
        </h3>
      </div>
      <div className="links">
       {
        bool ?
        <ul>
        <li><NavLink to="/adminportal/">HOME</NavLink></li>
        <li><NavLink to="/adminportal/books">BOOKS</NavLink></li>
        <li><NavLink to="/adminportal/addbooks">ADD BOOKS</NavLink></li>
        <li><NavLink to="/adminportal/users">USERS</NavLink></li>
        <li><NavLink to="/adminportal/addusers">ADD USERS</NavLink></li>
        <li><NavLink to="/adminportal/contact">CONTACT</NavLink></li>
        <li><NavLink to="/">LOGOUT</NavLink></li>
      </ul> :
       <ul>
       <li><NavLink to="/userportal/">HOME</NavLink></li>
       <li><NavLink to="/userportal/books">BOOKS</NavLink></li>
       <li><NavLink to="/userportal/addtocart">CART</NavLink></li>
       <li><NavLink to="/userportal/users">USERS</NavLink></li>
       <li><NavLink to="/userportal/contact">CONTACT</NavLink></li>
       <li><NavLink to="/">LOGOUT</NavLink></li>
     </ul>
       }
      </div>
    </div>
  )
}

export default Navbar
