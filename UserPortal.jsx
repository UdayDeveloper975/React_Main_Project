import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import Users from '../Users'
import Contact from '../Contact'
import ReadBook from '../ReadBook'
import Addtocart from './Addtocart '

const UserPortal = () => {
  return (
   <>
   <div>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Books/>} path='/books'/>
      <Route element={<ReadBook/>} path='readbook/:id'/>
      <Route element={<Addtocart/>} path='addtocart'/>
      <Route element={<Users/>} path='/users'/>
      <Route element={<Contact/>} path='contact'/>
    </Routes>
   </div>
   
   </>
  )
}

export default UserPortal