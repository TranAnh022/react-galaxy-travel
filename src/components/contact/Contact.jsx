import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='form'>
          <form>
              <label>Your Name</label>
              <input type="text" name="" id="" />
              <label>Email</label>
              <input type="text" name="" id="" />
              <label>Subject</label>
              <input type="text" name="" id="" />
              <label>Details</label>
              <textarea name="" id="" placeholder='Type a short message here' rows="6"></textarea>
              <button className='btn'>Submit</button>
          </form>
    </div>
  )
}

export default Contact