import React from 'react'
import '../assets/Styles/contact.css'
let Contact = () => {
  return (
        <>
            <div className="contact-form">
                
                <form>
                <div className="header">Contact Form</div>
                    <input type="text" placeholder='Enter UserName' />
                    <input type="email" placeholder='Enter Email Address'/>
                    <input type="tel" placeholder='Enter Contact Number' pattern='[6-9]{1}[0-9]{9}'/>
                    <textarea placeholder='Enter Feedback'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </>
  )
}

export default Contact