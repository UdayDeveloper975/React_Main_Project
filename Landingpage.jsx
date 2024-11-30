import React, { useState } from 'react'
import '../assets/Styles/landingpage.css'
import AdminLogin from './AdminLogin/AdminLogin'
import UserLogin from './UserLogin/UserLogin'

const LandingPage = () => {
   let[bool , setBool] =  useState(true)
   let handleToggle = ()=>{
    setBool(!bool)
   }

  return (
    <>
        <div className="landingpage">
            <div className="containerr">
                <div className="btn-box">
                    <button onClick={handleToggle} className={bool ? 'admin-btn' : 'user-btn'}>{bool ? <h4>Admin Login</h4> : <h4>User Login</h4> }</button>
                </div>
                <div className="text-box">
                    {bool ? "Admin Page" : "User Page"}
                </div>
                <div className="form-box">
                    {bool ? <AdminLogin/>
                          :
                            <UserLogin/>

                    }
                </div>
                <div className="forgetten">
                    <button>forget password</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage