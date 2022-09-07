import React from 'react'

import './ContactStyles.css'

const Contact = () => {
  return (
    <div className='contact'>
        <form>
          <label>Name</label>
          <input type='text'/>
          <label>Email Name</label>
          <input type='email'/>
          <label>Subject</label>
          <input type='text'/>
          <label>Messasge</label>
          <textarea rows='6' placeholder='Type your short message here'/>

          <button className='btn'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Contact