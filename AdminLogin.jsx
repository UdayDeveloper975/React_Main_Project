import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  let formData=useRef()
    
   let navigate=useNavigate()


  let handleSubmit=(e)=>{
    e.preventDefault()

    let emailField=formData.current[0]
    let pswdField=formData.current[1]

    let credentials={
      email:"admin@gmail.com",
      password:'admin@123'
    }
    let {email,password}=credentials 
    let err=`border:solid 2px red`
    if (emailField.value===email && pswdField.value===password) {
      navigate("/adminportal")
    }
    else{
      emailField.style.cssText = err;
      pswdField.style.cssText = err;
    }
  }
  return (
<>
            <div className="form-box">
                    <form ref={formData} onSubmit={handleSubmit}>
                        <input type="email" placeholder='Enter Email...' />
                        <input type="password" placeholder='Enter Password...' />
                       <button className='login-btn'> Admin Login</button>
                    </form>
                </div>
</>
)
}

export default AdminLogin