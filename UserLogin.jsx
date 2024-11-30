import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  let [users, setUsers] = useState([])
  let emailInput = useRef()
  let pswdInput = useRef()
  let navigate = useNavigate()

  useEffect(() => {
    let fetchUserApi = async () => {
      let response = await axios.get('http://localhost:4000/Users')
      setUsers(response.data)
    }
    fetchUserApi()
  }, [users])
  let handleSubmit = (e) => {
    e.preventDefault()

    let allUserEmails = users.map((user) => user.email)
    let emailField = emailInput.current.value
    let pswdField = pswdInput.current.value

    let email = allUserEmails.includes(emailField)
    let password = (pswdField === 'user@123')

    if (email && password) {
      navigate('/userportal')
    } else {
      let err=`border:solid 2px red`
      emailField.style.cssText=err;
      pswdField.style.cssText=err;
    }
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <input ref={emailInput} type="email" placeholder="Enter Email..." />
        <input ref={pswdInput} type="password" placeholder="Enter Password..."  />
        <button type="submit" className="login-btn">User Login</button>
      </form>
    </div>
  )
}

export default UserLogin
