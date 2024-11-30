import React from 'react'
import '../assets/Styles/home.css'
import { NavLink } from 'react-router-dom'
import Images from'/Images/Books student.png'

const Home = () => {
  return (
    <div>
    <div className="home-page">
      <div className="content">
        <h2>Read <span>your</span></h2>
        <h1>Read books</h1>
        <h2>ColourFull <span>Book</span></h2>
        <h2>from <NavLink to='/adminportal/books'>Here...!</NavLink></h2>
      </div>
      <div className="boy">
        <img src={Images} height={380} width={400}/>
      </div>
   
    </div>
  </div>
  )
}

export default Home
