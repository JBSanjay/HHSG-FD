import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router';
const login = () => {
  // const navigate=useNavigate();
  return (
    <div className='outer'>
    <div className='log-outer-div'>
      <h1>LOGIN</h1>
      <div className='log-user'>
      <label>Username<br/></label>
      <input placeholder='' type="text" />
      </div>
      <div className='log-pass'>
      <label>Password<br/></label>
      <input placeholder='' type="text"/>
      </div>
      <button className='button' >Login</button>
      <a href='/signup'>or create one</a>
    </div>
    </div>
  )
}

export default login
